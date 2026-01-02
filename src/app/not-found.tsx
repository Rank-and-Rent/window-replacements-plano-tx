import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Page Not Found</h2>
            <p className={styles.description}>
              Sorry, the page you are looking for does not exist or has been moved. Let us help you find what you need.
            </p>
            
            <div className={styles.buttons}>
              <Link href="/" className={styles.btnPrimary}>
                Go to Homepage
              </Link>
              <Link href="/contact" className={styles.btnSecondary}>
                Contact Us
              </Link>
            </div>

            <div className={styles.quickLinks}>
              <h3>Popular Pages</h3>
              <div className={styles.linksGrid}>
                <Link href="/windows">Window Services</Link>
                <Link href="/doors">Door Services</Link>
                <Link href="/brands">Our Brands</Link>
                <Link href="/locations">Service Areas</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
