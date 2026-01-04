'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { servicesData } from '@/data'
import styles from './contact.module.css'

declare global {
  interface Window {
    _turnstileLoaded?: boolean;
    turnstile?: { render: (el: HTMLElement, opts: Record<string, unknown>) => string; execute: (id: string, opts?: Record<string, unknown>) => Promise<string>; reset: (id: string) => void; };
  }
}

function loadTurnstile(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window._turnstileLoaded) return Promise.resolve();
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]');
    if (existing) { window._turnstileLoaded = true; return resolve(); }
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"; s.async = true; s.defer = true;
    s.onload = () => { window._turnstileLoaded = true; resolve(); };
    s.onerror = () => reject(new Error("Turnstile failed"));
    document.head.appendChild(s);
  });
}

type FormData = { name: string; phone: string; email: string; service: string; address: string; timeline: string; description: string; };

export default function ContactPage() {
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', email: '', service: '', address: '', timeline: '', description: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [turnstileId, setTurnstileId] = useState<string | null>(null);
  const [turnstileReady, setTurnstileReady] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const windowServices = servicesData.filter(s => s.category === 'Windows');
  const doorServices = servicesData.filter(s => s.category === 'Doors');

  useEffect(() => {
    let cancelled = false;
    const t = setTimeout(async () => {
      if (cancelled || !siteKey) return;
      try {
        await loadTurnstile();
        if (cancelled || !window.turnstile || !captchaRef.current) return;
        const id = window.turnstile.render(captchaRef.current, { sitekey: siteKey, size: "normal", theme: "light", callback: () => setTurnstileReady(true), "error-callback": () => setTurnstileReady(false) });
        setTurnstileId(id); setTurnstileReady(true);
      } catch (e) { console.error("Turnstile init failed:", e); }
    }, 500);
    return () => { cancelled = true; clearTimeout(t); };
  }, [siteKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.service.trim()) newErrors.service = "Required";
    if (!formData.address.trim()) newErrors.address = "Required";
    if (!formData.timeline.trim()) newErrors.timeline = "Required";
    if (!formData.description.trim()) newErrors.description = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) { setFeedback("Please complete all required fields."); return; }
    setStatus('submitting'); setErrors({}); setFeedback('');
    try {
      if (siteKey && (!turnstileReady || !window.turnstile || !turnstileId)) { setFeedback("Please complete security verification."); setStatus("error"); return; }
      let turnstileToken = '';
      if (siteKey && window.turnstile && turnstileId) {
        try {
          window.turnstile.reset(turnstileId);
          turnstileToken = await new Promise<string>((resolve, reject) => { window.turnstile!.execute(turnstileId, { callback: (t: string) => resolve(t), "error-callback": () => reject(new Error("error")) }); });
        } catch { setFeedback("Security verification failed."); setStatus("error"); window.turnstile?.reset(turnstileId); return; }
      }
      const response = await fetch('/api/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: formData.name, fullName: formData.name, email: formData.email, phone: formData.phone.replace(/\D/g, ''), service: formData.service, address: formData.address, timeline: formData.timeline, description: formData.description, turnstileToken }) });
      if (response.ok) {
        setFormData({ name: '', phone: '', email: '', service: '', address: '', timeline: '', description: '' });
        if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId);
        setStatus('success'); setFeedback('Thank you! A Plano window specialist will contact you within one business day.');
      } else {
        const err = await response.json().catch(() => ({ error: 'Failed' }));
        setFeedback(err.error || 'Failed to submit.'); setStatus('error');
        if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId);
      }
    } catch { setFeedback("An error occurred."); setStatus("error"); if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId); }
  };

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}><div className={styles.container}><h1>Contact Us</h1><p>Get a free consultation and estimate for your window or door project in Plano, TX.</p></div></section>
        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.formColumn}>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h2>Request Your Free Estimate</h2>
                  {status === 'success' && <div style={{ background: '#22c55e', color: 'white', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>{feedback}</div>}
                  {status === 'error' && <div style={{ background: '#ef4444', color: 'white', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>{feedback}</div>}
                  <fieldset disabled={status === 'submitting'} style={{ border: 'none', padding: 0, margin: 0 }}>
                    <div className={styles.formGroup}><label htmlFor="name">Full Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" required />{errors.name && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.name}</p>}</div>
                    <div className={styles.formGroup}><label htmlFor="phone">Phone Number</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(972) 284-7995" required />{errors.phone && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.phone}</p>}</div>
                    <div className={styles.formGroup}><label htmlFor="email">Email Address</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />{errors.email && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.email}</p>}</div>
                    <div className={styles.formGroup}><label htmlFor="service">Service Interested In</label><select id="service" name="service" value={formData.service} onChange={handleChange} required><option value="">Select a service...</option><optgroup label="Windows">{windowServices.map(service => <option key={service.slug} value={service.name}>{service.name}</option>)}</optgroup><optgroup label="Doors">{doorServices.map(service => <option key={service.slug} value={service.name}>{service.name}</option>)}</optgroup><option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option></select>{errors.service && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.service}</p>}</div>
                    <div className={styles.formGroup}><label htmlFor="address">Property Address</label><input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="123 Main St, Plano, TX 75024" required />{errors.address && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.address}</p>}</div>
                    <div className={styles.formGroup}><label htmlFor="timeline">Project Timeline</label><select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} required><option value="">Select timeline...</option><option value="ASAP">ASAP</option><option value="Within 1 month">Within 1 month</option><option value="Within 3 months">Within 3 months</option><option value="Within 6 months">Within 6 months</option><option value="6+ months">6+ months</option><option value="Just researching">Just researching</option></select>{errors.timeline && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.timeline}</p>}</div>
                    <div className={styles.formGroup}><label htmlFor="description">Project Description</label><textarea id="description" name="description" rows={4} value={formData.description} onChange={handleChange} placeholder="Tell us about your project..." required></textarea>{errors.description && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.description}</p>}</div>
                    {siteKey && <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}><div ref={captchaRef} style={{ minHeight: '78px' }} /></div>}
                    <button type="submit" className={styles.submitButton} disabled={status === 'submitting' || !!(siteKey && !turnstileReady)}>{status === 'submitting' ? 'Sending...' : 'Request Free Estimate'}</button>
                  </fieldset>
                  <p className={styles.disclaimer}>By submitting this form, you agree to receive communications from our team.</p>
                </form>
              </div>
              <div className={styles.infoColumn}>
                <div className={styles.contactInfo}>
                  <h2>Contact Information</h2>
                  <div className={styles.infoItem}><h3>Phone</h3><a href="tel:945-207-3988">945-207-3988</a></div>
                  <div className={styles.infoItem}><h3>Email</h3><a href="mailto:help@windowreplacementplano.com">help@windowreplacementplano.com</a></div>
                  <div className={styles.infoItem}><h3>Address</h3><address>5445 Legacy Dr #160<br />Plano, TX 75024</address></div>
                  <div className={styles.infoItem}><h3>Hours</h3><p>Open 24/7<br />Available for Emergency Service</p></div>
                </div>
                <div className={styles.mapContainer}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.9!2d-96.82!3d33.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c1c1a1a1a1a%3A0x1234567890abcdef!2s5445%20Legacy%20Dr%20%23160%2C%20Plano%2C%20TX%2075024!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="300" style={{ border: 0, borderRadius: '4px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Window Replacements of Plano location"></iframe></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
