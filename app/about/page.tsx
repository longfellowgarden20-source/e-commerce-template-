import Link from 'next/link'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-4">About ShopCraft</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-6">
            Quality products, no compromises
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
            ShopCraft was built for people who are tired of sifting through low-quality products online. We handpick every item, stand behind everything we sell, and make returns painless.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/shop" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition">
              Shop Now
            </Link>
            <Link href="/" className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-slate-300 text-slate-900 text-sm font-semibold hover:bg-slate-50 transition">
              Back to homepage
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Curated with care',
              body: 'Every product is reviewed by our team before it goes live. We only carry items we would buy and recommend ourselves.',
            },
            {
              title: 'Quality guaranteed',
              body: 'We partner with trusted manufacturers and hold every product to a high bar for materials, construction, and finish.',
            },
            {
              title: 'Customer first',
              body: 'Fast shipping, easy returns, and a support team that actually responds. Shopping should be simple.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border-2 border-slate-100 p-8 bg-white hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(26,26,46,0.12)] transition-all duration-300">
              <h2 className="text-xl font-semibold text-slate-950 mb-3">{item.title}</h2>
              <p className="text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
