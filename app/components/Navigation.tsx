'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCart } from '../context/CartContext'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const router = useRouter()
  const { totalItems } = useCart()
  const closeNav = () => setIsOpen(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/shop?q=${encodeURIComponent(query.trim())}`)
      setSearchOpen(false)
      setQuery('')
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 backdrop-blur-sm bg-white/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search overlay */}
        {searchOpen && (
          <div className="absolute inset-x-0 top-0 z-10 bg-white border-b border-slate-200 h-16 flex items-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <form onSubmit={handleSearch} className="flex items-center gap-3 w-full">
              <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => { setSearchOpen(false); setQuery('') }}
                className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </form>
          </div>
        )}

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
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Open search"
            >
              <Search className="w-4 h-4" />
            </button>
            <Link href="/sign-in" className="flex items-center gap-1.5 px-4 py-2 text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors border border-slate-200 rounded-lg hover:bg-slate-50">
              <User className="w-4 h-4" />
              Sign In
            </Link>
            <Link href="/cart" className="relative p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors" aria-label="Cart">
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
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
              <form onSubmit={(e) => { e.preventDefault(); if (query.trim()) { router.push(`/shop?q=${encodeURIComponent(query.trim())}`); setIsOpen(false); setQuery('') } }} className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg mx-0">
                <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
                />
              </form>
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
                <Link href="/sign-in" onClick={closeNav} className="w-full px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors font-medium min-h-[44px] flex items-center gap-2 justify-center">
                  <User className="w-4 h-4" />
                  Sign In
                </Link>
                <Link href="/cart" onClick={closeNav} className="w-full px-4 py-3 text-sm bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors font-medium min-h-[44px] flex items-center gap-2 justify-center">
                  <ShoppingCart className="w-4 h-4" />
                  Cart {totalItems > 0 && `(${totalItems})`}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
