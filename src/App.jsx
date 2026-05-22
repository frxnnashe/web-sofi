import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import ServiciosDestacados from './components/ServiciosDestacados'
import Autoridad from './components/Autoridad'
import Testimonios from './components/Testimonios'
import Ubicacion from './components/ubicacion'
import Footer from './components/footer'
import './assets/css/styles.css'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <ServiciosDestacados />
      <Autoridad />
      <Testimonios />
      <Ubicacion />
      <Footer />
    </>
  )
}

export default App
