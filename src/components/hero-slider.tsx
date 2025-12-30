'use client'

import { useState, useEffect, useCallback } from 'react'
import styles from './hero-slider.module.css'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    lines: ['CREATIVELY CRAFTED FOR', 'EVERY STYLE'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    lines: ['REMARKABLE CURB', 'APPEAL'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80',
    lines: ['ENERGY EFFICIENT &', 'SUSTAINABLE'],
  },
  {
    image: 'https://images.unsplash.com/photo-1600573472591-ee6c8e695481?w=1920&q=80',
    lines: ['UNOBSTRUCTED', 'VIEWS'],
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
    lines: ['PRECISION ENGINEERED', 'PERFORMANCE'],
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
