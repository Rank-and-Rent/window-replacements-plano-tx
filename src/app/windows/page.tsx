import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { SocialBar, ContactSection } from '@/components/footer'
import { servicesData } from '@/data'
import styles from './windows.module.css'

export const metadata: Metadata = {
  title: 'Window Installation Services Plano TX | All Window Types',
  description: 'Professional window installation in Plano, TX. Double-hung, casement, bay, bow, and all window styles. Andersen, Pella, JELD-WEN, Marvin. Free estimates. Call 945-207-3988.',
  keywords: 'window installation Plano TX, double-hung windows, casement windows, bay windows, bow windows, picture windows',
}

export default function WindowsIndexPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows')

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>Window Installation Services in Plano, TX</h1>
            <p>Transform your home with premium windows from Andersen, Pella, JELD-WEN, and Marvin. Professional installation backed by industry-leading warranties.</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.servicesGrid}>
              {windowServices.map((service) => (
                <Link key={service.slug} href={service.route} className={styles.serviceCard}>
                  <h2>{service.name}</h2>
                  <p>{service.short}</p>
                  <span className={styles.learnMore}>Learn More</span>
                </Link>
              ))}
            </div>

            <div className={styles.whySection}>
              <h2>Why Replace Your Windows?</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <h3>Energy Savings</h3>
                  <p>Modern windows can reduce energy costs by 25-30% with advanced Low-E coatings and insulated frames designed for Texas heat.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Home Value</h3>
                  <p>Window replacement offers one of the highest returns on investment of any home improvement project.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Comfort</h3>
                  <p>Eliminate drafts, reduce noise, and maintain consistent temperatures throughout your Plano home.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Aesthetics</h3>
                  <p>Update your home&apos;s appearance with new windows that complement your architectural style.</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Transform Your Home?</h2>
              <p>Get a free consultation and estimate for window installation in Plano, TX.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
                <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
        <SocialBar />
      </main>
      <Footer />
    </>
  )
}
