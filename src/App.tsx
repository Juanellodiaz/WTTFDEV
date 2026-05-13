import { OffWhiteMotif } from './components/OffWhiteMotif'
import { CTA } from './components/CTA'
import { FeaturedProjects } from './components/FeaturedProjects'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Philosophy } from './components/Philosophy'
import { Platforms } from './components/Platforms'
import { Process } from './components/Process'
import { ScrollMarquee } from './components/ScrollMarquee'
import { ScrollProgress } from './components/ScrollProgress'
import { Services } from './components/Services'
import { StudioIntro } from './components/StudioIntro'
import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <div className="page">
        <OffWhiteMotif />
        <ScrollProgress />
        <Navbar />
        <main className="main">
          <Hero />
          <StudioIntro />
          <FeaturedProjects />
          <Philosophy />
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
