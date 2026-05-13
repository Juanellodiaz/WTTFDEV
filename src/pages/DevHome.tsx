import { TechBackdrop } from '../components/TechBackdrop'
import { CTA } from '../components/CTA'
import { FeaturedProjects } from '../components/FeaturedProjects'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Philosophy } from '../components/Philosophy'
import { Platforms } from '../components/Platforms'
import { Process } from '../components/Process'
import { ScrollMarquee } from '../components/ScrollMarquee'
import { ScrollProgress } from '../components/ScrollProgress'
import { Services } from '../components/Services'
import { StudioIntro } from '../components/StudioIntro'

export function DevHome() {
  return (
    <div className="page page--dev">
      <TechBackdrop />
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
  )
}
