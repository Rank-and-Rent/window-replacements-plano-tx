import Link from 'next/link'
import { servicesData, locationsData, brandsData } from '@/data'
import styles from './footer.module.css'

export function SocialBar() {
  return (
    <section className={styles.socialBar}>
      <div className={styles.container}>
        <div className={styles.socialIcons}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <h2 className={styles.contactTitle}>START YOUR TRANSFORMATION</h2>
          <p className={styles.contactText}>
            Ready to enhance your Plano home with premium replacement windows? Schedule your 
            complimentary consultation today. Our window specialists will assess your needs, 
            discuss your options, and provide a detailed estimate - all with no obligation.
          </p>
          <div className={styles.contactMethods}>
            <a href="tel:945-207-3988" className={styles.contactButton}>
              Call 945-207-3988
            </a>
            <a href="mailto:help@windowreplacementplano.com" className={styles.contactButtonOutline}>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')
  // Show first 8 locations in footer
  const footerLocations = locationsData.slice(0, 8)

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Links Grid */}
        <div className={styles.topSection}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMain}>Window Replacements</span>
              <span className={styles.logoSub}>OF PLANO</span>
            </Link>
            <p className={styles.brandDescription}>
              Plano&apos;s trusted window and door replacement experts. Andersen, Pella, JELD-WEN, and Marvin. Quality installations backed by
              industry-leading warranties.
            </p>
            <div className={styles.contactBlock}>
              <a href="tel:945-207-3988" className={styles.phone}>
                945-207-3988
              </a>
              <a href="mailto:help@windowreplacementplano.com" className={styles.email}>
                help@windowreplacementplano.com
              </a>
              <address className={styles.address}>
                5445 Legacy Dr #160<br />
                Plano, TX 75024
              </address>
              <p className={styles.hours}>
                Open 24/7<br />
                Available for Emergency Service
              </p>
            </div>
          </div>

          {/* Windows Column */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Window Services</h4>
            <ul className={styles.linkList}>
              {windowServices.map((service) => (
                <li key={service.slug}>
                  <Link href={service.route} className={styles.link}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Doors Column */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Door Services</h4>
            <ul className={styles.linkList}>
              {doorServices.map((service) => (
                <li key={service.slug}>
                  <Link href={service.route} className={styles.link}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className={styles.columnTitle} style={{ marginTop: '2rem' }}>
              Brands
            </h4>
            <ul className={styles.linkList}>
              {brandsData.map((brand) => (
                <li key={brand.slug}>
                  <Link href={brand.route} className={styles.link}>
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Service Areas</h4>
            <ul className={styles.linkList}>
              {footerLocations.map((location) => (
                <li key={location.slug}>
                  <Link href={location.route} className={styles.link}>
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={styles.link}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={styles.link}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps */}
        <div className={styles.mapSection}>
          <h4 className={styles.mapTitle}>Find Us</h4>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.9!2d-96.82!3d33.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c1c1a1a1a1a%3A0x1234567890abcdef!2s5445%20Legacy%20Dr%20%23160%2C%20Plano%2C%20TX%2075024!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '4px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Window Replacements of Plano location map"
            ></iframe>
          </div>
        </div>

        {/* Disclosure and Copyright */}
        <div className={styles.bottomSection}>
          <p className={styles.disclosure}>
            Disclosure: This site routes inquiries to our chosen fulfillment partner for window and door contractor matching and project coordination support.
          </p>
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              &copy; {currentYear} Window Replacements of Plano. All rights reserved.
            </p>
            <div className={styles.footerLinks}>
              <Link href="/terms">Terms and Conditions</Link>
              <span>/</span>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Also export Footer as a named export for components that import it that way
export { Footer }