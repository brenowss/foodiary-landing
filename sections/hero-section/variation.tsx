import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";

export default function HeroSectionVariation() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit bg-green-100 text-green-700 hover:bg-green-100">
                🥗 Track • Learn • Thrive
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Your Personal
                <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-orange-500 bg-clip-text text-transparent">
                  Food Journey
                </span>
                Starts Here
              </h1>
              <p className="text-xl text-gray-600 max-w-[600px] leading-relaxed">
                <span className="font-semibold text-gray-800">Stop guessing about your nutrition.</span> Join 100,000+ people who've already lost weight, gained energy, and built lasting healthy habits with our AI-powered food tracking.
                <span className="text-green-600 font-medium">See results in just 7 days</span> or get your money back.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group relative text-lg px-10 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 rounded-2xl border-2 border-green-400/20 hover:border-green-300/40"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  🚀 Start Free Trial Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  FREE
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group text-lg px-10 py-4 border-2 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 hover:text-green-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <span className="flex items-center">
                  📱 Watch 2-Min Demo
                  <div className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </span>
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>30-day free trial</span>
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

              {/* Social Proof Bar */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        S
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        M
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        J
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        +
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium">2,847 people started today</span>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-gray-700 font-semibold">4.9/5</span>
                    <span className="text-gray-500">(12k+ reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">


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
      </div>
    </section>
  )
}