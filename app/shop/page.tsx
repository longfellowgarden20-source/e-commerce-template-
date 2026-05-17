'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Navigation } from '../components/Navigation'
import { CTASection } from '../components/CTASection'
import { Footer } from '../components/Footer'
import { useCart } from '../context/CartContext'
import { ShoppingCart, Check, X } from 'lucide-react'
import { Suspense } from 'react'

const products = [
  { id: 'classic-crew-tee', name: 'Classic Crew Tee', category: 'T-Shirts', price: 49, badge: 'New', image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Classic+Tee' },
  { id: 'washed-canvas-jacket', name: 'Washed Canvas Jacket', category: 'Outerwear', price: 159, badge: 'Bestseller', image: 'https://placehold.co/600x700/2d2d4a/ffffff?text=Canvas+Jacket' },
  { id: 'slim-cargo-pants', name: 'Slim Cargo Pants', category: 'Pants', price: 99, badge: null, image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Cargo+Pants' },
  { id: 'leather-crossbody-bag', name: 'Leather Crossbody Bag', category: 'Accessories', price: 89, badge: 'New', image: 'https://placehold.co/600x700/2d2d4a/ffffff?text=Crossbody+Bag' },
  { id: 'minimal-sneakers', name: 'Minimal Sneakers', category: 'Footwear', price: 139, badge: null, image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Sneakers' },
  { id: 'fleece-pullover', name: 'Fleece Pullover', category: 'Hoodies', price: 79, badge: 'Sale', image: 'https://placehold.co/600x700/2d2d4a/ffffff?text=Fleece+Pullover' },
  { id: 'structured-cap', name: 'Structured Cap', category: 'Hats', price: 39, badge: null, image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Structured+Cap' },
  { id: 'overshirt-jacket', name: 'Overshirt Jacket', category: 'Outerwear', price: 129, badge: 'Bestseller', image: 'https://placehold.co/600x700/2d2d4a/ffffff?text=Overshirt' },
  { id: 'essential-hoodie', name: 'Essential Hoodie', category: 'Hoodies', price: 89, badge: null, image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Essential+Hoodie' },
]

const filters = ['All', 'T-Shirts', 'Outerwear', 'Pants', 'Hoodies', 'Footwear', 'Accessories', 'Hats']

function ShopContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('All')
  const [added, setAdded] = useState<string | null>(null)
  const { addItem } = useCart()

  const query = searchParams.get('q')?.trim() ?? ''

  // Reset category filter when a search query arrives
  useEffect(() => {
    if (query) setActiveFilter('All')
  }, [query])

  const clearSearch = () => router.push('/shop')

  const filtered = products.filter((p) => {
    const matchesCategory = activeFilter === 'All' || p.category === activeFilter
    const matchesQuery = query === '' || p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image })
    setAdded(product.id)
    setTimeout(() => setAdded(null), 1500)
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-3">Store</p>
        {query ? (
          <>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-3">
              Results for &ldquo;{query}&rdquo;
            </h1>
            <div className="flex items-center gap-3">
              <p className="text-slate-600">{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</p>
              <button
                onClick={clearSearch}
                className="flex items-center gap-1 text-sm text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-3.5 h-3.5" /> Clear search
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-3">All Products</h1>
            <p className="text-slate-600 text-base sm:text-lg">Free shipping on orders over $75. New arrivals every week.</p>
          </>
        )}
      </section>

      {/* Filters */}
      <section className="border-t border-slate-100 bg-slate-50 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => { setActiveFilter(f); clearSearch() }}
              className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-colors ${f === activeFilter && !query ? 'bg-accent text-white border-accent' : 'bg-white text-slate-600 border-slate-200 hover:border-accent hover:text-accent'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl font-display font-bold text-slate-900 mb-2">No products found</p>
            <p className="text-slate-500 mb-6">Try a different search term or browse all products.</p>
            <button onClick={clearSearch} className="px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">
              View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filtered.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${product.badge === 'Sale' ? 'bg-red-500 text-white' : product.badge === 'New' ? 'bg-yellow-400 text-slate-900' : 'bg-white text-slate-900'}`}>
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-5 py-2.5 bg-white text-accent text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-white shadow-lg flex items-center gap-2"
                  >
                    {added === product.id ? (
                      <><Check className="w-4 h-4" /> Added!</>
                    ) : (
                      <><ShoppingCart className="w-4 h-4" /> Add to Cart</>
                    )}
                  </button>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">{product.category}</p>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-accent transition-colors">{product.name}</h3>
                  <p className="text-accent font-bold mt-1">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!query && filtered.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-200">
              Load More Products
            </button>
          </div>
        )}
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}

export default function ShopPage() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  )
}
