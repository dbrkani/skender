import styles from './Hero.module.css'
import skyline from '../assets/hero-skyline.jpg'

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div
        className={styles.bgImage}
        style={{ backgroundImage: `url(${skyline})` }}
        aria-hidden="true"
      />
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>Strategy &amp; Consulting</p>
        <h1 className={styles.title}>
          Clear thinking for businesses<br />ready to move forward.
        </h1>
        <p className={styles.subtitle}>
          We help ambitious teams cut through complexity, sharpen their strategy,
          and turn plans into measurable results.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.primary}>Start a conversation</a>
          <a href="#services" className={styles.secondary}>See what we do</a>
        </div>
        <div className={styles.stats}>
          <div>
            <strong>120+</strong>
            <span>Clients advised</span>
          </div>
          <div>
            <strong>15 yrs</strong>
            <span>In the field</span>
          </div>
          <div>
            <strong>94%</strong>
            <span>Client retention</span>
          </div>
        </div>
      </div>
    </section>
  )
}
