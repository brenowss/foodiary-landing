import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AppleIcon } from "@/components/ui/apple-icon"
import { Heart, Smartphone } from 'lucide-react'

export default function FinalCTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white relative overflow-hidden" >
      <div className="absolute inset-0 bg-[url('/food-pattern.svg')] opacity-10"></div>
      <div className="mx-auto container px-4 md:px-6 text-center relative">
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="flex justify-center">
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/20 backdrop-blur">
              🎉 Limited Time Offer
            </Badge>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to transform your relationship with food?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Discover how Foodiary can help you achieve your health goals.
            Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-green-600 hover:bg-gray-100">
              Download on App Store
              <AppleIcon className="text-green-600" />
            </Button>
          </div>
          <p className="text-sm opacity-75">
            Free 30-day trial • Cancel anytime • Available for iOS
          </p>
        </div>
      </div>
    </section>
  )
}
