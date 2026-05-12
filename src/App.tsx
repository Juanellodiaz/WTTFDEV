import { AmbientOrbs } from './components/AmbientOrbs'
import { LanguageProvider } from './context/LanguageContext'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Platforms } from './components/Platforms'
import { Process } from './components/Process'
import { ScrollMarquee } from './components/ScrollMarquee'
import { ScrollProgress } from './components/ScrollProgress'
import { Services } from './components/Services'
import { WorkStrip } from './components/WorkStrip'

export default function App() {
  return (
    <LanguageProvider>
      <div className="page">
        <AmbientOrbs />
        <ScrollProgress />
        <Navbar />
        <main className="main">
          <Hero />
          <WorkStrip />
          <Services />
          <ScrollMarquee />
          <Platforms />
          <Process />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
