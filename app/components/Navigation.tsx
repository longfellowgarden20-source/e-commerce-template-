'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const closeNav = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 backdrop-blur-sm bg-white/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
                🛍️
              </div>
              <span className="hidden sm:inline font-display text-xl font-bold text-slate-900">
                ShopCraft
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Shop
            </Link>
            <Link href="/collections" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Collections
            </Link>
            <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/shop" className="px-4 py-2 text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Browse All
            </Link>
            <Link href="/contact" className="flex items-center gap-2 px-4 py-2.5 text-sm bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors font-medium">
              <ShoppingCart className="w-4 h-4" />
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-slate-900" />
            ) : (
              <Menu className="w-5 h-5 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 border-t border-slate-200">
            <div className="flex flex-col gap-3 pt-4">
              <Link href="/" onClick={closeNav} className="block px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors min-h-[44px]">
                Home
              </Link>
              <Link href="/shop" onClick={closeNav} className="block px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors min-h-[44px]">
                Shop
              </Link>
              <Link href="/collections" onClick={closeNav} className="block px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors min-h-[44px]">
                Collections
              </Link>
              <Link href="/about" onClick={closeNav} className="block px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors min-h-[44px]">
                About
              </Link>
              <Link href="/contact" onClick={closeNav} className="block px-4 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded transition-colors min-h-[44px]">
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-slate-200">
                <Link href="/shop" onClick={closeNav} className="w-full px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded transition-colors font-medium min-h-[44px]">
                  Browse All Products
                </Link>
                <Link href="/shop" onClick={closeNav} className="w-full px-4 py-3 text-sm bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors font-medium min-h-[44px] flex items-center gap-2 justify-center">
                  <ShoppingCart className="w-4 h-4" />
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
