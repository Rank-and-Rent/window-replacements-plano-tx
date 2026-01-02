import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from '../about/about.module.css'

export const metadata = {
  title: 'Privacy Policy | Window Replacements of Plano',
  description: 'Privacy policy for Window Replacements of Plano. Learn how we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={styles.label}>Legal</span>
            <h1>Privacy Policy</h1>
            <p>Last Updated: January 1, 2026</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.prose}>
              <h2>Information We Collect</h2>
              <p>When you contact us for window or door installation services in Plano, TX, we may collect:</p>
              <ul>
                <li>Name and contact information (email, phone number)</li>
                <li>Property information and project details</li>
                <li>Communication preferences</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information you provide to:</p>
              <ul>
                <li>Provide consultation and project planning services</li>
                <li>Coordinate consultations and estimates</li>
                <li>Communicate about your project</li>
                <li>Improve our services</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Qualified professionals for project consultation and estimates</li>
                <li>Service providers who assist with our operations</li>
                <li>As required by law or to protect our rights</li>
              </ul>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2>Contact Us</h2>
              <p>If you have questions about this privacy policy or your personal information, please contact us at:</p>
              <p>Phone: 945-207-3988<br />Email: help@windowreplacementplano.com</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
