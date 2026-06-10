import styles from './About.module.css'
import aboutImg from '../assets/about-discussion.jpg'

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className={`container ${styles.inner}`}>
        <div className={styles.media}>
          <img src={aboutImg} alt="Two colleagues in conversation" />
          <span className={styles.badge}>Est. 2026</span>
        </div>
        <div className={styles.content}>
          <p className="eyebrow">About us</p>
          <h2 className={styles.heading}>A small team with a sharp focus</h2>
          <p>
            SkenderCorp. is a consulting practice built on a simple belief: good
            advice is specific, honest, and grounded in your reality. We are not
            here to hand you a generic playbook.
          </p>
          <p>
            We have spent over a decade helping companies of all sizes make
            better decisions under pressure. Our work spans strategy, operations,
            and growth, but it always comes back to one thing: helping you move
            forward with clarity.
          </p>
          <ul className={styles.points}>
            <li>Senior advisors on every engagement</li>
            <li>Practical recommendations, not slideware</li>
            <li>Partnership that lasts beyond the project</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
