import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from 'lucide-react'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-white" >
      <div className="mx-auto container px-4 md:px-6">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto bg-orange-100 text-orange-700 hover:bg-orange-100">
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Choose your
            <span className="block bg-gradient-to-r from-orange-300 to-emerald-600 bg-clip-text text-transparent">
              wellness plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
            Choose the plan that fits your nutrition journey. Start free and upgrade as your needs grow.
          </p>
        </div>

        <div className="flex justify-center gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors bg-white relative w-full max-w-sm">

            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Monthly</CardTitle>
              <CardDescription className="text-gray-600">Best for getting started and staying consistent. Consistent is key.</CardDescription>
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-900">$4.99</span>
                <span className="text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button variant="outline" className="w-full border-orange-300 text-orange-700 hover:bg-orange-50">
                Start Monthly Plan
              </Button>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited scans (photo, voice, text, barcode)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Accurate calorie & portion estimates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Personalized meal plans & daily targets</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Weight tracking & goal progress</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-500 shadow-xl scale-105 bg-gradient-to-br from-green-50 to-emerald-50 relative w-full max-w-sm">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1">
                Most Popular
              </Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-700">Annual</CardTitle>
              <CardDescription className="text-gray-600">Best value for long-term results. <br /> Save ~58% vs monthly</CardDescription>
              <div className="mt-6">
                <span className="text-4xl font-bold text-green-700">$24.99</span>
                <span className="text-gray-500">/year</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                Start Free Trial
              </Button>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Everything in Monthly</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited scans all year</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Personalized meal plans included</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Full weight & goal tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
