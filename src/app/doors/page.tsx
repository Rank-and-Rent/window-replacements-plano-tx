import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { SocialBar, ContactSection } from '@/components/footer'
import { servicesData } from '@/data'
import styles from './doors.module.css'

export const metadata: Metadata = {
  title: 'Door Installation Services Plano TX | Entry & Patio Doors',
  description: 'Professional door installation in Plano, TX. Entry doors, patio doors, French doors, sliding glass doors. Andersen, Pella, JELD-WEN, Marvin. Free estimates. Call 945-207-3988.',
  keywords: 'door installation Plano TX, entry doors, patio doors, French doors, sliding glass doors, storm doors, custom doors',
}

export default function DoorsIndexPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors')

  return (
    <>
      <Header />
      <main>
        <section className={styles.indexHero}>
          <div className={styles.container}>
            <h1>Door Replacement Services in Plano, TX</h1>
            <p>Transform your home with premium doors from Andersen, Pella, JELD-WEN, and Marvin. Professional installation backed by industry-leading warranties.</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.servicesGrid}>
              {doorServices.map((service) => (
                <Link key={service.slug} href={service.route} className={styles.serviceCard}>
                  <h2>{service.name}</h2>
                  <p>{service.short}</p>
                  <span className={styles.learnMore}>Learn More</span>
                </Link>
              ))}
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Transform Your Entryways?</h2>
              <p>Get a free consultation and estimate for door installation in Plano, TX.</p>
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
