import Image from "next/image"
import Link from "next/link"
import WrittenLogo from "@/components/ui/written-logo"

export default function Footer() {
  return (
    <footer id="support" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="mx-auto container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center bg-green-100 rounded-xl">
                <Image src="/foodiary-icon.png" alt="Foodiary" width={48} height={48} className="rounded-lg" />
              </div>
              <WrittenLogo />
            </div>
            <p className="text-gray-600 max-w-sm leading-relaxed">
              Your personal companion for a healthier, happier relationship with food. Track, learn, and thrive with Foodiary.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/documents/Terms & Conditions.txt" className="text-gray-600 hover:text-lime-600 transition-all duration-200">
                Terms and Conditions
              </Link>
              <Link href="/documents/Privacy Policy.txt" className="text-gray-600 hover:text-lime-600 transition-all duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-lime-600 transition-all duration-200">
                Download
              </Link>
              <Link href="mailto:appfoodiary@gmail.com" className="text-gray-600 hover:text-lime-600 transition-all duration-200">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Social/CTA Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Get Started</h4>
            <p className="text-gray-600 text-sm">
              Ready to transform your relationship with food?
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-lime-500 text-white font-medium rounded-lg hover:bg-lime-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Download App
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Foodiary. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center">
              Made with <span className="text-red-500 mx-1">❤️</span> for your health journey
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
