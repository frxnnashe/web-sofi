import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import ServiciosDestacados from './components/ServiciosDestacados'
import Autoridad from './components/Autoridad'
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
      <Ubicacion />
      <Footer />
    </>
  )
}

export default App
