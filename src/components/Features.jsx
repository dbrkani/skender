import styles from './Features.module.css'

const features = [
  {
    number: '01',
    title: 'We start with listening',
    description:
      'Before recommending anything, we take the time to understand your business, your constraints, and your goals.',
  },
  {
    number: '02',
    title: 'Advice you can act on',
    description:
      'No vague frameworks. Everything we deliver is concrete, prioritized, and ready to put into motion.',
  },
  {
    number: '03',
    title: 'Senior people, every time',
    description:
      'You work directly with experienced advisors, not a rotating cast of juniors learning on your project.',
  },
  {
    number: '04',
    title: 'In it for the long run',
    description:
      'We measure success by your results, and we stay close to make sure recommendations actually stick.',
  },
]

export default function Features() {
  return (
    <section className={`section ${styles.features}`} id="features">
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">Why work with us</p>
          <h2 className={styles.heading}>The difference is in how we work</h2>
        </div>
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.number} className={styles.item}>
              <span className={styles.number}>{feature.number}</span>
              <h3 className={styles.itemTitle}>{feature.title}</h3>
              <p className={styles.itemDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
