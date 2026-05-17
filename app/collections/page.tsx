import Link from 'next/link'
import { Navigation } from '../components/Navigation'
import { CTASection } from '../components/CTASection'
import { Footer } from '../components/Footer'

const collections = [
  {
    name: 'Spring 2026',
    description: 'Light layers, fresh palettes, and warm-weather essentials for the new season.',
    count: '24 items',
    image: 'https://placehold.co/800x500/1a1a2e/ffffff?text=Spring+2026',
    badge: 'New',
  },
  {
    name: 'Monochrome Edit',
    description: 'A curated selection of black, white, and grey pieces that work together effortlessly.',
    count: '18 items',
    image: 'https://placehold.co/800x500/2d2d4a/ffffff?text=Monochrome+Edit',
    badge: null,
  },
  {
    name: 'Workwear Ready',
    description: 'Sharp, comfortable clothing that transitions from the office to after-hours with ease.',
    count: '21 items',
    image: 'https://placehold.co/800x500/1a1a2e/ffffff?text=Workwear+Ready',
    badge: 'Bestseller',
  },
  {
    name: 'Weekend Casual',
    description: 'Relaxed fits, quality fabrics, and styles built for days off and going out.',
    count: '30 items',
    image: 'https://placehold.co/800x500/2d2d4a/ffffff?text=Weekend+Casual',
    badge: null,
  },
  {
    name: 'Active & Outdoors',
    description: 'Performance-ready pieces designed for movement — from the gym to the trail.',
    count: '15 items',
    image: 'https://placehold.co/800x500/1a1a2e/ffffff?text=Active+%26+Outdoors',
    badge: null,
  },
  {
    name: 'Sale Picks',
    description: 'Handpicked markdowns on quality items. Limited stock — grab them while they last.',
    count: '40 items',
    image: 'https://placehold.co/800x500/2d2d4a/ffffff?text=Sale+Picks',
    badge: 'Sale',
  },
]

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-3">Collections</p>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-3">Shop by Collection</h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
          Handpicked sets of products built around a theme, season, or style. Find the look that fits your life.
        </p>
      </section>

      {/* Collections grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((col) => (
            <Link href="/shop" key={col.name} className="group block rounded-2xl overflow-hidden border-2 border-slate-100 hover:border-accent hover:shadow-[0_8px_40px_-12px_rgba(26,26,46,0.2)] transition-all duration-300">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {col.badge && (
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${col.badge === 'Sale' ? 'bg-red-500 text-white' : col.badge === 'New' ? 'bg-yellow-400 text-slate-900' : 'bg-white text-slate-900'}`}>
                    {col.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-accent transition-colors">{col.name}</h3>
                  <span className="text-xs text-slate-400 font-medium mt-1 ml-2 whitespace-nowrap">{col.count}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{col.description}</p>
                <p className="mt-4 text-sm font-semibold text-accent group-hover:underline">Shop collection &rarr;</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
