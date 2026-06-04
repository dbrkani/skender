import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Approach from './components/Approach.jsx'
import Features from './components/Features.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Approach />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
