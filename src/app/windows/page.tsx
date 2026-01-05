import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import MaterialsSection from '@/components/materials-section'
import { servicesData } from '@/data'
import styles from '../doors/doors.module.css'

export const metadata: Metadata = {
  title: 'Window Types & Materials Plano TX | Replacement Windows',
  description: 'Explore all window types and materials in Plano, TX. Double-hung, casement, sliding, vinyl, aluminum, Fibrex, fiberglass, wood clad, and wood windows. Tech-forward solutions for professionals. Call 945-207-3988.',
  keywords: 'window types Plano TX, window materials, window styles Plano, replacement windows Plano',
}

export default function WindowsIndexPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows')

  return (
    <>
      <Header />
      <main>
        <section className={styles.indexHero}>
          <div className={styles.container}>
            <h1>Window Replacement in Plano, TX</h1>
            <p>Tech-forward window materials for Plano&apos;s professional community and upscale neighborhoods. Smart energy solutions with innovative designs for North Texas&apos;s tech hub.</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <h2 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2rem'}}>Window Styles</h2>
            <div className={styles.servicesGrid}>
              {windowServices.map((service) => (
                <Link key={service.slug} href={service.route} className={styles.serviceCard}>
                  <h3>{service.name}</h3>
                  <p>{service.short}</p>
                  <span className={styles.learnMore}>Learn More</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <MaterialsSection />

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>Ready to Upgrade Your Windows?</h2>
              <p>Plano&apos;s tech-savvy window specialists help you choose innovative materials with smart energy performance and professional aesthetics.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.btnPrimary}>Get Free Estimate</Link>
                <a href="tel:945-207-3988" className={styles.btnSecondary}>Call 945-207-3988</a>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
