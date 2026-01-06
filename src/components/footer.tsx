import Link from 'next/link'
import { servicesData, locationsData, brandsData } from '@/data'
import styles from './footer.module.css'

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
            <Link href="/contact" className={styles.contactButtonOutline}>
              Get Free Quote
            </Link>
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
              <li>
                <Link href="/sitemap.xml" className={styles.link}>
                  Sitemap
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