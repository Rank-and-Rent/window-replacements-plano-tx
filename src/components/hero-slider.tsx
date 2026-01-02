'use client'

import { useState, useEffect, useCallback } from 'react'
import styles from './hero-slider.module.css'

const slides = [
  {
    image: '/windows/double-hung-windows-plano-tx.avif',
    lines: ['WINDOW REPLACEMENT', 'PLANO, TX'],
  },
  {
    image: '/windows/casement-windows-plano-tx.avif',
    lines: ['PREMIUM WINDOWS', 'FOR PLANO HOMES'],
  },
  {
    image: '/windows/picture-windows-plano-tx.jpg',
    lines: ['ENERGY EFFICIENT', 'WINDOW REPLACEMENT'],
  },
  {
    image: '/windows/bay-bow-windows-plano-tx.jpg',
    lines: ['CUSTOM WINDOW', 'INSTALLATION PLANO'],
  },
  {
    image: '/windows/sliding-windows-plano-tx.jpg',
    lines: ['PROFESSIONAL WINDOW', 'REPLACEMENT TEXAS'],
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleArrowClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      prevSlide()
    } else {
      nextSlide()
    }
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className={styles.hero} aria-label="Featured window projects">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={index !== currentSlide}
        >
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            {slide.lines.map((line, lineIndex) => (
              <h1 key={lineIndex} className={styles.title}>
                {line}
              </h1>
            ))}
          </div>
        </div>
      ))}

      {/* Arrow Navigation */}
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => handleArrowClick('prev')}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => handleArrowClick('next')}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className={styles.pagination} role="tablist" aria-label="Slide navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentSlide}
            role="tab"
          />
        ))}
      </div>
    </section>
  )
}
