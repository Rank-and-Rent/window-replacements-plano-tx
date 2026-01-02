'use client'

import styles from './top-brand-banner.module.css'

export default function TopBrandBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.logos}>
          <span className={styles.label}>Trusted Brands:</span>
          <div className={styles.logoGrid}>
            <a href="/brands" className={styles.logoLink}>
              <img
                src="/andersen-windows-and-doors-logo.png"
                alt="Andersen Windows & Doors"
                className={styles.logo}
              />
            </a>
            <a href="/brands" className={styles.logoLink}>
              <img
                src="/Pella-Corp-Windows-Doors-Logo-2x1-1.png"
                alt="Pella Windows & Doors"
                className={styles.logo}
              />
            </a>
            <a href="/brands" className={styles.logoLink}>
              <img
                src="/jeld-wen-windows-and-doors-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className={styles.logo}
              />
            </a>
            <a href="/brands" className={styles.logoLink}>
              <img
                src="/Marvin-LOCKUP-CMYK-898x301.png"
                alt="Marvin Windows & Doors"
                className={styles.logo}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}