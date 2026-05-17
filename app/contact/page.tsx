import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold mb-4">Contact ShopCraft</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-6">
              We are here to help
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Questions about an order, a return, or a product? Reach out and our support team will get back to you within one business day.
            </p>

            <div className="mt-8 rounded-2xl border-2 border-slate-100 bg-slate-50 p-6">
              <p className="text-base font-semibold text-slate-900">Prefer to reach us directly?</p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Email us at <a href="mailto:hello@example.com" className="text-accent font-medium hover:underline">hello@shopcraft.com</a> or call <a href="tel:+15551234567" className="text-accent font-medium hover:underline">(555) 123-4567</a>. We respond to all inquiries within one business day.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-slate-100 bg-slate-50 p-8 shadow-sm">
            <form className="space-y-6">
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Name</span>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Email</span>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Phone</span>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Message</span>
                <textarea
                  rows={6}
                  placeholder="Order number, product question, or anything else we can help with"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
