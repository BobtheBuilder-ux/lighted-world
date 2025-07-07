import { Lightbulb, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">LightedWorld</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-amber-600 transition-colors">Services</Link>
            <Link href="/stories" className="text-gray-700 hover:text-amber-600 transition-colors">Stories</Link>
            <Link href="/resources" className="text-gray-700 hover:text-amber-600 transition-colors">Resources</Link>
            <Link href="/auth/login">
              <Button variant="outline" className="mr-2">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                Begin Your Journey
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <Link href="/about" className="block text-gray-700 hover:text-amber-600 transition-colors py-2">
                About
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-amber-600 transition-colors py-2">
                Services
              </Link>
              <Link href="/stories" className="block text-gray-700 hover:text-amber-600 transition-colors py-2">
                Stories
              </Link>
              <Link href="/resources" className="block text-gray-700 hover:text-amber-600 transition-colors py-2">
                Resources
              </Link>
              <div className="pt-2 space-y-3">
                <Link href="/auth/login" className="block">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register" className="block">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    Begin Your Journey
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar