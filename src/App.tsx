import FeaturesSection from "./components/FeaturesSection"
import { Footer } from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import { PricingSection } from "./components/PricingSection"
import TestimonialsSection from "./components/TestimonialsSection"
import WorkflowSection from "./components/WorkflowSection"

function App() {

  return (
    <>
      <Navbar />
      <main className="w-3/4 mx-auto">
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <PricingSection />
        <TestimonialsSection />
        <hr />
        <Footer />
      </main>

    </>
  )
}

export default App
