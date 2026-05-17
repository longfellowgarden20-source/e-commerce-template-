import Link from 'next/link'
import { ArrowRight, Truck, RotateCcw, ShieldCheck } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-accent">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-xs sm:text-sm font-medium border border-white/20">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              New Collection — Spring 2026
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Style that speaks
              <br className="hidden sm:block" />
              <span className="text-yellow-300">for itself</span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-300 leading-relaxed">
              ShopCraft curates premium lifestyle and apparel for people who care about quality. Free shipping on every order over $75.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
              <Link href="/shop" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-slate-900 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base">
                Shop the Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/collections" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/40 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-200 text-sm sm:text-base text-center">
                View All Collections
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-yellow-400" />
                <span>Free shipping over $75</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-yellow-400" />
                <span>30-day returns</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-yellow-400" />
                <span>Secure checkout</span>
              </div>
            </div>
          </div>

          {/* Product category preview grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { label: 'Outerwear', price: 'From $129' },
              { label: 'Accessories', price: 'From $49' },
              { label: 'Footwear', price: 'From $159' },
              { label: 'Essentials', price: 'From $59' },
            ].map((item, i) => (
              <Link href="/shop" key={item.label} className={`${i % 2 === 0 ? 'bg-slate-700' : 'bg-slate-600'} rounded-2xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 group`}>
                <div className="w-10 h-10 bg-white/10 rounded-lg mb-4 group-hover:bg-yellow-400/20 transition-colors duration-300"></div>
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <p className="text-slate-400 text-xs mt-1">{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
