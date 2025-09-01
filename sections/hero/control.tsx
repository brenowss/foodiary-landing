import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppleIcon } from "@/components/ui/apple-icon";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export default function HeroSectionControl() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit bg-green-100 text-green-700 hover:bg-green-100">
                🥗 Track • Learn • Thrive
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Your Personal
                <span className="block bg-gradient-to-r from-lime-600 via-emerald-500 to-orange-500 bg-clip-text text-transparent">
                  Food Journey
                </span>
                Starts Here
              </h1>
              <p className="text-xl text-gray-600 max-w-[600px] leading-relaxed">
                Transform your relationship with food through intelligent tracking, personalized insights, and
                a supportive community. Achieve your health goals with Foodiary's simple yet powerful approach.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg">
                Start Free Trial on iOS
                <AppleIcon className="fill-white" />
              </Button>
              {/* <Button variant="outline" size="lg" className="text-lg px-8 border-green-200 text-green-700 hover:bg-green-50">
                Watch Demo
              </Button> */}
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>No credit card needed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-orange-400/20 rounded-3xl blur-3xl"></div>
            <Image
              src="/foodiary-app-mockup.png"
              alt="Foodiary App Interface"
              width={600}
              height={800}
              className="relative rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}