import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.logo}>Skender<span>Corp</span></a>
          <p className={styles.tagline}>
            Strategy and consulting for businesses ready to move forward.
          </p>
        </div>

        <div className={styles.linksCol}>
          <h4>Company</h4>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#features">Why Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.linksCol}>
          <h4>Get in touch</h4>
          <a href="mailto:contact@SkenderCorp.com">contact@SkenderCorp.com</a>
          <a href="tel:+12813308004">(281) 330-8004</a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {year} SkenderCorp. Consulting. All rights reserved.</span>
        <div className={styles.legal}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
