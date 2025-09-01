import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Apple, BarChart3, Target, Camera, Users, Scale } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white" >
      <div className="mx-auto container px-4 md:px-6">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto bg-orange-100 text-orange-700 hover:bg-orange-100">
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need for
            <span className="block bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
              healthy living
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
            Discover powerful tools designed to make nutrition tracking effortless and enjoyable.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4 mx-auto">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-green-700">Smart Food Recognition</CardTitle>
              <CardDescription className="text-gray-600">
                Simply snap a photo of your meal and let AI identify ingredients and calculate nutrition automatically.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-blue-700">Personalized Insights</CardTitle>
              <CardDescription className="text-gray-600">
                Get detailed analytics about your eating patterns, nutrient intake, and progress toward your goals.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-orange-50 to-amber-50">
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mb-4 mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-orange-700">Goal Tracking</CardTitle>
              <CardDescription className="text-gray-600">
                Set weight and nutrition targets and track progress with clean, visual charts.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-purple-700">Weight Progress Tracking</CardTitle>
              <CardDescription className="text-gray-600">
                Track your weight over time with simple logs and clear progress charts.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
