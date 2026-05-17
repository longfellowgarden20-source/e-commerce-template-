import Link from 'next/link'
import { Navigation } from '../components/Navigation'
import { CTASection } from '../components/CTASection'
import { Footer } from '../components/Footer'

const products = [
  { name: 'Classic Crew Tee', category: 'T-Shirts', price: '$49', badge: 'New', image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Classic+Tee' },
  { name: 'Washed Canvas Jacket', category: 'Outerwear', price: '$159', badge: 'Bestseller', image: 'https://placehold.co/600x700/2d2d4a/ffffff?text=Canvas+Jacket' },
  { name: 'Slim Cargo Pants', category: 'Pants', price: '$99', badge: null, image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Cargo+Pants' },
  { name: 'Leather Crossbody Bag', category: 'Accessories', price: '$89', badge: 'New', image: 'https://placehold.co/600x700/2d2d4a/ffffff?text=Crossbody+Bag' },
  { name: 'Minimal Sneakers', category: 'Footwear', price: '$139', badge: null, image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Sneakers' },
  { name: 'Fleece Pullover', category: 'Hoodies', price: '$79', badge: 'Sale', image: 'https://placehold.co/600x700/2d2d4a/ffffff?text=Fleece+Pullover' },
  { name: 'Structured Cap', category: 'Hats', price: '$39', badge: null, image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Structured+Cap' },
  { name: 'Overshirt Jacket', category: 'Outerwear', price: '$129', badge: 'Bestseller', image: 'https://placehold.co/600x700/2d2d4a/ffffff?text=Overshirt' },
  { name: 'Essential Hoodie', category: 'Hoodies', price: '$89', badge: null, image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Essential+Hoodie' },
]

const filters = ['All', 'T-Shirts', 'Outerwear', 'Pants', 'Hoodies', 'Footwear', 'Accessories', 'Hats']

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-3">Store</p>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-3">All Products</h1>
        <p className="text-slate-600 text-base sm:text-lg">Free shipping on orders over $75. New arrivals every week.</p>
      </section>

      {/* Filters */}
      <section className="border-t border-slate-100 bg-slate-50 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2">
          {filters.map((f, i) => (
            <span key={f} className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-colors ${i === 0 ? 'bg-accent text-white border-accent' : 'bg-white text-slate-600 border-slate-200 hover:border-accent hover:text-accent'}`}>
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-5 py-2.5 bg-white text-accent text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-white shadow-lg">
                  Add to Cart
                </button>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">{product.category}</p>
                <h3 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-accent transition-colors">{product.name}</h3>
                <p className="text-accent font-bold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-200">
            Load More Products
          </button>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
