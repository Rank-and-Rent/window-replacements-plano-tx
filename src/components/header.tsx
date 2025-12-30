'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './header.module.css'

const navLinks = [
  { href: '/', label: 'HOME', isActive: true },
  { href: '#about', label: 'OUR STORY', isActive: false },
  { href: '#windows', label: 'PRODUCTS', isActive: false },
  { href: '#brands', label: 'BRANDS', isActive: false },
  { href: '#contact', label: 'CONTACT', isActive: false },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoScript}>Window Replacements</span>
          <span className={styles.logoSub}>OF PLANO, LLC</span>
        </Link>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`${styles.navLink} ${link.isActive ? styles.navLinkActive : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
