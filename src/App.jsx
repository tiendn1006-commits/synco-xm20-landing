import Header from './components/Header'
import Hero from './components/Hero'
import KVBanner from './components/KVBanner'
import EventInfo from './components/EventInfo'
import BrandStory from './components/BrandStory'
import Concept from './components/Concept'
import DopSection from './components/DopSection'
import Schedule from './components/Schedule'
import Partners from './components/Partners'
import Register from './components/Register'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <Header />
      <main>
        <KVBanner />
        <Hero />
        <EventInfo />
        <DopSection />
        <BrandStory />
        <Concept />
        <Schedule />
        <Partners />
        <Register />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
