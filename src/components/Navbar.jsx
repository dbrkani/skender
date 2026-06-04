import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#features' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          Skender<span>Corp</span>
        </a>

        <nav className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.navCta} onClick={() => setMenuOpen(false)}>
            Get in touch
          </a>
        </nav>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
