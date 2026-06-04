import ServiceCard from './ServiceCard.jsx'
import styles from './Services.module.css'

const services = [
  {
    icon: '◆',
    title: 'Strategy & Planning',
    description:
      'We work with leadership to define direction, set priorities, and build a roadmap your whole team can rally behind.',
  },
  {
    icon: '◈',
    title: 'Operations Consulting',
    description:
      'Streamline how work gets done. We identify bottlenecks and design processes that scale with your business.',
  },
  {
    icon: '◉',
    title: 'Growth Advisory',
    description:
      'From market positioning to go-to-market planning, we help you find and act on your next opportunity.',
  },
  {
    icon: '◇',
    title: 'Change Management',
    description:
      'Big shifts are hard. We guide teams through transitions so new strategies actually take hold.',
  },
]

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">What we do</p>
          <h2 className={styles.heading}>Services built around your goals</h2>
          <p className={styles.lead}>
            Every engagement starts with understanding where you are and where
            you want to be. Here is how we help you close that gap.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
