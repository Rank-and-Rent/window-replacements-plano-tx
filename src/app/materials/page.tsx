import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import Footer, { ContactSection } from '@/components/footer'
import { servicesData } from '@/data'
import styles from './materials.module.css'

export const metadata: Metadata = {
  title: 'Window Materials Plano TX | Vinyl, Aluminum, Fiberglass & More',
  description: 'Premium window materials in Plano, TX. Vinyl, aluminum, fiberglass, Fibrex, wood clad, and wood windows. Everything priced including installation. Free estimates. Call 945-207-3988.',
  keywords: 'window materials Plano TX, vinyl windows, aluminum windows, fiberglass windows, Fibrex windows, wood clad windows, wood windows',
}

export default function MaterialsIndexPage() {
  const materialServices = servicesData.filter(s => s.category === 'Materials')

  return (
    <>
      <Header />
      <main>
        <section className={styles.indexHero}>
          <div className={styles.container}>
            <h1>Window Materials in Plano, TX</h1>
            <p>Choose from premium window materials designed for Plano&apos;s climate. Each material offers unique benefits in terms of durability, energy efficiency, and aesthetic appeal.</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.servicesGrid}>
              {materialServices.map((service) => (
                <Link key={service.slug} href={service.route} className={styles.serviceCard}>
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={400}
                      height={200}
                      className={styles.serviceCardImage}
                    />
                  )}
                  <div className={styles.serviceCardContent}>
                    <h2>{service.name}</h2>
                    <p>{service.short}</p>
                    <span className={styles.learnMore}>Learn More</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.ctaBox}>
              <h2>Ready to Choose Your Window Material?</h2>
              <p>Get a free consultation and estimate for window replacement in Plano, TX.</p>
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
