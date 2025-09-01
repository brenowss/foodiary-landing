import { Button } from "@/components/ui/button"
import WrittenLogo from "@/components/ui/written-logo"
import { Apple, Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto container flex w-full h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center">
            <Image src="/foodiary-icon.png" alt="Apple Store" width={40} height={40} className="h-6 w-6 fill-white" />
          </div>
          <WrittenLogo />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-lime-600 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-700 hover:text-lime-600 transition-colors">
            Pricing
          </Link>
          <Link href="#mobile-app" className="text-sm font-medium text-gray-700 hover:text-lime-600 transition-colors">
            Mobile App
          </Link>
          <Link href="#support" className="text-sm font-medium text-gray-700 hover:text-lime-600 transition-colors">
            Support
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white shadow-lg">
            Get Started Free
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
