import Link from 'next/link'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { ServiceAreaSection } from './components/ServiceAreaSection'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />

      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">Explore ShopCraft</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950">
              Everything you need, all in one store.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              From curated collections to easy returns, ShopCraft makes it simple to find quality products you will actually love.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/shop" className="group block rounded-3xl border-2 border-slate-200 bg-white p-8 hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(26,26,46,0.15)] transition">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-accent transition-colors">Shop All</h3>
              <p className="text-slate-500">Browse the full catalog — apparel, accessories, footwear, and more. New arrivals added weekly.</p>
            </Link>
            <Link href="/collections" className="group block rounded-3xl border-2 border-slate-200 bg-white p-8 hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(26,26,46,0.15)] transition">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-accent transition-colors">Collections</h3>
              <p className="text-slate-500">Explore handpicked collections built around a theme, season, or style moment.</p>
            </Link>
            <Link href="/about" className="group block rounded-3xl border-2 border-slate-200 bg-white p-8 hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(26,26,46,0.15)] transition">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-accent transition-colors">About Us</h3>
              <p className="text-slate-500">Learn about the ShopCraft story, our sourcing standards, and what makes us different.</p>
            </Link>
            <Link href="/contact" className="group block rounded-3xl border-2 border-slate-200 bg-white p-8 hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(26,26,46,0.15)] transition">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-accent transition-colors">Support</h3>
              <p className="text-slate-500">Questions about an order, return, or product? Our team responds fast.</p>
            </Link>
          </div>
        </div>
      </section>

      <ServiceAreaSection />
      <Footer />
    </main>
  )
}
