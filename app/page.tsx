import { heroSectionFlag } from '@/lib/flags';
import HeroSection from "@/sections/hero"
import BlogSection from "@/sections/blog"
import Header from "@/sections/header"
import FeaturesSection from "@/sections/features"
import TestimonialsSection from "@/sections/testimonials"
import PricingSection from "@/sections/pricing"
import MobileAppSection from "@/sections/mobile-app"
import FinalCTASection from "@/sections/final-cta"
import Footer from "@/sections/footer"

export default function FoodiaryLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      <HeroSection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <MobileAppSection />
      {/* <BlogSection /> */}
      <FinalCTASection />
      <Footer />
    </div >
  )
}
