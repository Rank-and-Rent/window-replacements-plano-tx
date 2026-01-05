import Link from 'next/link'
import styles from './service-hero.module.css'

interface ServiceHeroProps {
  title: string
  subtitle: string
  image: string
}

export default function ServiceHero({ title, subtitle, image }: ServiceHeroProps) {
  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <ol>
            <li><Link href="/">Home</Link></li>
            <li>/</li>
            <li><Link href="/windows">Windows</Link></li>
            <li>/</li>
            <li>{title}</li>
          </ol>
        </div>
      </nav>
      <section className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </section>
    </>
  )
}