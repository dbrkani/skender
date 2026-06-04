import styles from './Approach.module.css'
import strategyImg from '../assets/approach-strategy.jpg'
import planningImg from '../assets/approach-planning.jpg'
import reviewImg from '../assets/approach-review.jpg'

const steps = [
  {
    image: strategyImg,
    alt: 'Chess pieces mid-game',
    step: 'Step one',
    title: 'Understand the board',
    description:
      'We get to know your business, your market, and the decisions in front of you before we recommend a single move.',
  },
  {
    image: planningImg,
    alt: 'Planning wall covered in notes',
    step: 'Step two',
    title: 'Map the plan',
    description:
      'Together we lay out priorities and a clear sequence of actions, so everyone knows what happens next and why.',
  },
  {
    image: reviewImg,
    alt: 'Two colleagues reviewing work on a laptop',
    step: 'Step three',
    title: 'Execute and refine',
    description:
      'We stay close as the plan rolls out, reviewing results and adjusting so the strategy holds up in the real world.',
  },
]

export default function Approach() {
  return (
    <section className={`section ${styles.approach}`} id="approach">
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">How we work</p>
          <h2 className={styles.heading}>A clear path from question to result</h2>
        </div>
        <div className={styles.grid}>
          {steps.map((s) => (
            <article key={s.step} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={s.image} alt={s.alt} loading="lazy" />
              </div>
              <span className={styles.step}>{s.step}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
