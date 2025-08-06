import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Apple, BarChart3, Target, Camera, Users, Smartphone, ArrowRight, Menu, Facebook, Twitter, Instagram, Youtube, Heart, Zap, Download, QrCode } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function FoodiaryLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto container flex w-full h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
              <Apple className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Foodiary
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              Reviews
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              Pricing
            </Link>
            <Link href="#support" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              Support
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex text-gray-700 hover:text-green-600">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg">
              Get Started Free
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
              {/* Background Elements */}
              {/* <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-green-300/10 to-blue-300/10 rounded-full blur-3xl"></div>
              </div> */}

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


              {/* Floating UI Elements */}
              {/* <div className="absolute top-16 right-20 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-green-100 animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Meal logged successfully!</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-24 left-16 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-orange-100 animate-float delay-1000">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Daily Goal</div>
                      <div className="text-sm font-semibold text-gray-700">85% Complete</div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                  Set personalized nutrition goals and track your progress with visual charts and milestone celebrations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-purple-700">Community Support</CardTitle>
                <CardDescription className="text-gray-600">
                  Connect with like-minded individuals, share recipes, and get motivation from our supportive community.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-green-50 via-white to-orange-50" >
        <div className="mx-auto container px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-green-100 text-green-700 hover:bg-green-100">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Loved by thousands of
              <span className="block bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                health enthusiasts
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              See how Foodiary has transformed the lives of our amazing community members.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base text-gray-700">
                  "Foodiary completely changed how I think about food. The photo recognition is incredible -
                  I just snap and go! Lost 15 pounds in 3 months without feeling restricted."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/happy-woman-testimonial.png"
                    alt="Sarah Martinez"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Martinez</p>
                    <p className="text-sm text-gray-500">Fitness Enthusiast</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base text-gray-700">
                  "As a busy mom, I needed something simple. Foodiary's insights helped me understand my eating patterns
                  and make better choices for my whole family. Game changer!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/mom-testimonial.png"
                    alt="Jessica Chen"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Jessica Chen</p>
                    <p className="text-sm text-gray-500">Working Mom</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base text-gray-700">
                  "The community feature is amazing! Getting support and recipe ideas from others on similar journeys
                  keeps me motivated. Plus the app is beautiful and easy to use."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/athlete-testimonial.png"
                    alt="Mike Rodriguez"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                    <p className="text-sm text-gray-500">Personal Trainer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-white" >
        <div className="mx-auto container px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-orange-100 text-orange-700 hover:bg-orange-100">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Choose your
              <span className="block bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                wellness plan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Start free and upgrade when you're ready. All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Free</CardTitle>
                <CardDescription className="text-gray-600">Perfect for getting started</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Get Started Free
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Basic food logging</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">5 photo scans per day</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Basic nutrition insights</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Community access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500 shadow-xl scale-105 bg-gradient-to-br from-green-50 to-emerald-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-green-700">Premium</CardTitle>
                <CardDescription className="text-gray-600">Best for serious health goals</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-green-700">$9.99</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                  Start Free Trial
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Unlimited photo scans</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Advanced AI insights</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Personalized meal plans</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Progress tracking & goals</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-orange-300 transition-colors bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Pro</CardTitle>
                <CardDescription className="text-gray-600">For nutrition professionals</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">$19.99</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button variant="outline" className="w-full border-orange-300 text-orange-700 hover:bg-orange-50">
                  Contact Sales
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Everything in Premium</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Client management tools</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Custom branding</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">API access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile App Download Section */}
      <section className="py-20 md:py-32 bg-white" >
        <div className="mx-auto container px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-blue-100 text-blue-700 hover:bg-blue-100">
              📱 Mobile Apps
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Take Foodiary
              <span className="block bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                everywhere you go
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Download our mobile app and track your nutrition on the go. Available for iOS and Android with all premium features included.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            {/* App Features */}
            <div className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <Camera className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Instant Photo Logging</h3>
                    <p className="text-sm text-gray-600">Snap photos of your meals anywhere, anytime</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Offline Mode</h3>
                    <p className="text-sm text-gray-600">Track your food even without internet connection</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time Sync</h3>
                    <p className="text-sm text-gray-600">Seamlessly sync across all your devices</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Reminders</h3>
                    <p className="text-sm text-gray-600">Never forget to log your meals with gentle nudges</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                  <Download className="mr-2 h-5 w-5" />
                  Download Now
                </Button>
                <Button variant="outline" size="lg" className="border-green-200 text-green-700 hover:bg-green-50">
                  <Smartphone className="mr-2 h-5 w-5" />
                  View Screenshots
                </Button>
              </div>
            </div>

            {/* Download Links with QR Codes */}
            <div className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* iOS Download */}
                <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors p-6 text-center">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <Apple className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">iOS App</h3>
                      <p className="text-sm text-gray-600">iPhone & iPad</p>
                    </div>

                    {/* QR Code for iOS */}
                    <div className="flex justify-center">
                      <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                        <Image
                          src="/ios-qr-code.png"
                          alt="iOS App QR Code"
                          width={120}
                          height={120}
                          className="rounded"
                        />
                      </div>
                    </div>

                    <Button className="w-full bg-black hover:bg-gray-800 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      App Store
                    </Button>

                    <p className="text-xs text-gray-500">
                      <QrCode className="inline h-3 w-3 mr-1" />
                      Scan QR code to download
                    </p>
                  </div>
                </Card>

                {/* Android Download */}
                <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors p-6 text-center">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                        <Smartphone className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Android App</h3>
                      <p className="text-sm text-gray-600">All Android devices</p>
                    </div>

                    {/* QR Code for Android */}
                    <div className="flex justify-center">
                      <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                        <Image
                          src="/android-qr-code.png"
                          alt="Android App QR Code"
                          width={120}
                          height={120}
                          className="rounded"
                        />
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Google Play
                    </Button>

                    <p className="text-xs text-gray-500">
                      <QrCode className="inline h-3 w-3 mr-1" />
                      Scan QR code to download
                    </p>
                  </div>
                </Card>
              </div>

              {/* App Stats */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.8★</div>
                    <div className="text-sm text-gray-600">App Store Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100K+</div>
                    <div className="text-sm text-gray-600">Downloads</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50MB</div>
                    <div className="text-sm text-gray-600">App Size</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Compatible with iOS 14.0+ and Android 8.0+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
              Join over 100,000 people who have already started their wellness journey with Foodiary.
              Get your first month free when you sign up today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-green-600 hover:bg-gray-100">
                Start Free Trial
                <Heart className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white/10 bg-transparent"
              >
                Download App
                <Smartphone className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm opacity-75">
              30-day free trial • No credit card required • Cancel anytime • Available on iOS & Android
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="support" className="py-12 border-t bg-gray-50" >
        <div className="mx-auto container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
                  <Apple className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Foodiary
                </span>
              </div>
              <p className="text-sm text-gray-600 max-w-xs">
                Your personal companion for a healthier, happier relationship with food. Track, learn, and thrive with Foodiary.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Download App
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Foodiary. All rights reserved. Made with ❤️ for your health journey.</p>
          </div>
        </div>
      </footer>
    </div >
  )
}
