'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer, { SocialBar } from '@/components/footer'
import { servicesData } from '@/data'
import styles from './contact.module.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    address: '',
    timeline: '',
    description: '',
  })

  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>Contact Us</h1>
            <p>Get a free consultation and estimate for your window or door project in Plano, TX.</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.formColumn}>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h2>Request Your Free Estimate</h2>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(972) 284-7995"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service...</option>
                      <optgroup label="Windows">
                        {windowServices.map(service => (
                          <option key={service.slug} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Doors">
                        {doorServices.map(service => (
                          <option key={service.slug} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                      </optgroup>
                      <option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="address">Property Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main St, Plano, TX 75024"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="timeline">Project Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select timeline...</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="Within 6 months">Within 6 months</option>
                      <option value="6+ months">6+ months</option>
                      <option value="Just researching">Just researching</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="description">Project Description</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Tell us about your project or any questions you have..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Request Free Estimate
                  </button>

                  <p className={styles.disclaimer}>
                    By submitting this form, you agree to receive communications from our team. We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>

              <div className={styles.infoColumn}>
                <div className={styles.contactInfo}>
                  <h2>Contact Information</h2>
                  
                  <div className={styles.infoItem}>
                    <h3>Phone</h3>
                    <a href="tel:945-207-3988">945-207-3988</a>
                  </div>

                  <div className={styles.infoItem}>
                    <h3>Email</h3>
                    <a href="mailto:help@windowreplacementplano.com">help@windowreplacementplano.com</a>
                  </div>

                  <div className={styles.infoItem}>
                    <h3>Address</h3>
                    <address>
                      5445 Legacy Dr #160<br />
                      Plano, TX 75024
                    </address>
                  </div>

                  <div className={styles.infoItem}>
                    <h3>Hours</h3>
                    <p>Open 24/7<br />Available for Emergency Service</p>
                  </div>
                </div>

                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.9!2d-96.82!3d33.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c1c1a1a1a1a%3A0x1234567890abcdef!2s5445%20Legacy%20Dr%20%23160%2C%20Plano%2C%20TX%2075024!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '4px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Window Replacements of Plano location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SocialBar />
      </main>
      <Footer />
    </>
  )
}
