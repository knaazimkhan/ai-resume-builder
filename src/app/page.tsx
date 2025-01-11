import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import LiveDemo from './components/LiveDemo'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <LiveDemo />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}

