import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppleIcon } from "@/components/ui/apple-icon"
import { BarChart3, Camera, Smartphone, Zap, Download, QrCode, MicVocal } from 'lucide-react'
import Image from "next/image"

export default function MobileAppSection() {
  return (
    <section id="mobile-app" className="py-20 md:py-32 bg-white" >
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
                  <h3 className="font-semibold text-gray-900">Weight Tracking</h3>
                  <p className="text-sm text-gray-600">
                    Track your weight with simple logs and progress charts.
                  </p>
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
                  <MicVocal className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Voice Recognition</h3>
                  <p className="text-sm text-gray-600">Describe your meal to add it to your diary</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                <AppleIcon className="fill-white" />
                Download on App Store
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
                      <AppleIcon className="h-10 w-10 text-white" />
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
                    <AppleIcon className="mr-2 h-5 w-5 text-white" />
                    App Store
                  </Button>

                  <p className="text-xs text-gray-500">
                    <QrCode className="inline h-3 w-3 mr-1" />
                    Scan QR code to download
                  </p>
                </div>
              </Card>

              {/* Android Download */}
              <Card className="border-2 border-gray-200 opacity-75 p-6 text-center">
                <div className="space-y-4 flex flex-col h-full">
                  <div className="flex justify-center">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                      <Smartphone className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Android App</h3>
                    <p className="text-sm text-gray-600">All Android devices</p>
                  </div>

                  {/* Coming Soon Message */}
                  <div className="flex flex-col flex-1 justify-between space-y-4">
                    <div className="flex justify-center h-full">
                      <div className="p-4 bg-gray-50 border-2 border-gray-200 rounded-lg h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-500 mb-2">👨‍💻</div>
                          <p className="text-xs text-gray-500">Our solo developer is working full-time to get the Android version out soon! ☕</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button disabled className="w-full bg-gray-400 text-white cursor-not-allowed">
                        <Download className="mr-2 h-4 w-4" />
                        Available Soon
                      </Button>

                      <p className="text-xs text-gray-500">
                        🚀 Stay tuned!
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* App Stats */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">50MB</div>
                  <div className="text-sm text-gray-600">App Size</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">AI</div>
                  <div className="text-sm text-gray-600">Powered by AI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Fast</div>
                  <div className="text-sm text-gray-600">Fast and smooth</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Compatible with iOS 14.0+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
