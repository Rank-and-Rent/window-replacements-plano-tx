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
                src="/andersen-windows-and-doors-plano-tx-logo.png"
                alt="Andersen Windows & Doors"
                className={styles.logo}
              />
            </a>
            <a href="/brands" className={styles.logoLink}>
              <img
                src="/pella-windows-and-doors-plano-tx-logo.png"
                alt="Pella Windows & Doors"
                className={styles.logo}
              />
            </a>
            <a href="/brands" className={styles.logoLink}>
              <img
                src="/jeld-wen-windows-and-doors-plano-tx-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className={styles.logo}
              />
            </a>
            <a href="/brands" className={styles.logoLink}>
              <img
                src="/marvin-windows-and-doors-plano-tx-logo.png"
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