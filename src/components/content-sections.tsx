import Link from 'next/link'
import styles from './content-sections.module.css'

export function VisionSection() {
  return (
    <section id="about" className={styles.textSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>VALUING YOUR VISION.</h2>
        <p className={styles.sectionText}>
          Your Plano home deserves windows that reflect your commitment to quality and comfort. 
          At Window Replacements of Plano, we carefully curate our selection of premium windows 
          from industry-leading manufacturers—Andersen, Pella, Jeld-Wen, and Marvin—to ensure your home 
          receives nothing less than exceptional craftsmanship. Our long-standing partnerships 
          with these trusted brands mean you get access to the latest innovations in window 
          technology, energy efficiency, and architectural beauty.
        </p>
      </div>
    </section>
  )
}

export function FullImageSection1() {
  return (
    <section 
      className={styles.fullImageSection}
      style={{ backgroundImage: 'url(/windows/double-hung-windows-plano-tx.avif' }}
    >
      <div className={styles.imageOverlay}></div>
      <div className={styles.imageContent}>
        <h2 className={styles.imageTitle}>LOVE WHERE YOU LIVE.</h2>
        <p className={styles.imageSubtitle}>
          Extraordinary homes deserve extraordinary windows.
        </p>
      </div>
    </section>
  )
}

export function PassionSection() {
  return (
    <section className={styles.textSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>PASSIONATE ABOUT YOUR PROJECT.</h2>
        <p className={styles.sectionText}>
          With over two decades of experience serving North Texas homeowners, we bring 
          unmatched expertise to every window replacement project. From historic homes in 
          downtown Plano to modern residences in Legacy West, our team understands the unique 
          architectural requirements and climate challenges of the region. We combine meticulous 
          attention to detail with professional installation techniques to deliver results that 
          exceed expectations and stand the test of time.
        </p>
      </div>
    </section>
  )
}

export function FullImageSection2() {
  return (
    <section 
      className={styles.fullImageSection}
      style={{ backgroundImage: 'url(/windows/double-hung-windows-plano-tx.avif' }}
    >
      <div className={styles.imageOverlay}></div>
      <div className={styles.imageContent}>
        <h2 className={styles.imageTitle}>YOUR LEGACY, OUR PRIORITY.</h2>
        <p className={styles.imageSubtitle}>
          Build a home you love with windows that last generations.
        </p>
      </div>
    </section>
  )
}

export function WindowTypesSection() {
  const windowTypes = [
    { name: 'Double-Hung', desc: 'Classic vertical sliding design', image: '/windows/double-hung-windows-plano-tx.avif' },
    { name: 'Single-Hung', desc: 'Timeless and cost-effective', image: '/windows/single-hung-windows-plano-tx.jpg' },
    { name: 'Casement', desc: 'Full ventilation with crank operation', image: '/windows/casement-windows-plano-tx.avif' },
    { name: 'Awning', desc: 'Weather-resistant top-hinged design', image: '/windows/awning-windows-plano-tx.webp' },
    { name: 'Sliding', desc: 'Contemporary horizontal operation', image: '/windows/sliding-windows-plano-tx.jpg' },
    { name: 'Picture', desc: 'Maximize light and views', image: '/windows/picture-windows-plano-tx.jpg' },
    { name: 'Bay & Bow', desc: 'Elegant projecting elegance', image: '/windows/bay-bow-windows-plano-tx.jpg' },
    { name: 'Specialty', desc: 'Custom architectural shapes', image: '/windows/special-shape-windows-plano-tx.jpg' },
  ]

  return (
    <section id="windows" className={styles.windowsSection}>
      <div className={styles.windowsInner}>
        <div className={styles.windowsContent}>
          <span className={styles.windowsLabel}>OUR PRODUCTS</span>
          <h2 className={styles.windowsTitle}>Premium Window Styles</h2>
          <p className={styles.windowsText}>
            Every home tells a story. Choose from our comprehensive selection of window styles, 
            each engineered for North Texas climate conditions and available from our trusted brand partners.
          </p>
        </div>
        <div className={styles.windowsGrid}>
          {windowTypes.map((item, index) => (
            <div key={index} className={styles.windowItem}>
              <div className={styles.windowImage}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.windowImageElement}
                />
                <span className={styles.windowNumber}>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className={styles.windowInfo}>
                <h3 className={styles.windowName}>{item.name}</h3>
                <p className={styles.windowDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BrandsSection() {
  return (
    <section id="brands" className={styles.brandsSection}>
      <div className={styles.brandsInner}>
        <span className={styles.brandsLabel}>TRUSTED PARTNERS</span>
        <h2 className={styles.brandsTitle}>Trusted Brand Partners</h2>
        <p className={styles.brandsText}>
          We partner exclusively with America&apos;s most trusted window manufacturers, 
          ensuring every installation meets the highest standards of quality and performance.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 max-w-6xl mx-auto">
          <Link href="/brands/andersen-windows-doors" className="hover:opacity-80 transition-opacity">
            <img
              src="/andersen-windows-and-doors-plano-tx-logo.png"
              alt="Andersen Windows & Doors"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>
          <Link href="/brands/pella-windows-doors" className="hover:opacity-80 transition-opacity">
            <img
              src="/pella-windows-and-doors-plano-tx-logo.png"
              alt="Pella Windows & Doors"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>
          <Link href="/brands/jeld-wen-windows-doors" className="hover:opacity-80 transition-opacity">
            <img
              src="/jeld-wen-windows-and-doors-plano-tx-logo.png"
              alt="Jeld-Wen Windows & Doors"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>
          <Link href="/brands/marvin-windows-doors" className="hover:opacity-80 transition-opacity">
            <img
              src="/marvin-windows-and-doors-plano-tx-logo.png"
              alt="Marvin Windows & Doors"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function ServiceSection() {
  return (
    <section id="service" className={styles.serviceSection}>
      <div className={styles.serviceInner}>
        <div className={styles.serviceContent}>
          <span className={styles.serviceLabel}>WHY CHOOSE US</span>
          <h2 className={styles.serviceTitle}>The Window Replacements Difference</h2>
          <p className={styles.serviceText}>
            Choosing Window Replacements of Plano means partnering with professionals who 
            understand that window replacement is an investment in your home&apos;s comfort, 
            efficiency, and value.
          </p>
        </div>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceItem}>
            <span className={styles.serviceNumber}>01</span>
            <h4 className={styles.serviceItemTitle}>Free Consultations</h4>
            <p className={styles.serviceItemText}>On-site assessments with expert recommendations tailored to your home.</p>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceNumber}>02</span>
            <h4 className={styles.serviceItemTitle}>Professional Installation</h4>
            <p className={styles.serviceItemText}>Factory-certified installers ensuring warranty compliance.</p>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceNumber}>03</span>
            <h4 className={styles.serviceItemTitle}>Energy Efficiency</h4>
            <p className={styles.serviceItemText}>Windows that reduce heating and cooling costs significantly.</p>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceNumber}>04</span>
            <h4 className={styles.serviceItemTitle}>Lifetime Support</h4>
            <p className={styles.serviceItemText}>Ongoing service backed by manufacturer warranties.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FullImageSection3() {
  return (
    <section 
      className={styles.fullImageSection}
      style={{ backgroundImage: 'url(/windows/double-hung-windows-plano-tx.avif' }}
    >
      <div className={styles.imageOverlay}></div>
      <div className={styles.imageContent}>
        <h2 className={styles.imageTitle}>INVEST IN QUALITY.</h2>
        <p className={styles.imageSubtitle}>
          Premium windows that enhance your home&apos;s beauty and value.
        </p>
      </div>
    </section>
  )
}
