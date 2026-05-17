import { CheckCircle, Truck, Globe } from 'lucide-react'
import Link from 'next/link'

const categories = [
  'Outerwear & Jackets',
  'T-Shirts & Tops',
  'Pants & Denim',
  'Footwear',
  'Bags & Backpacks',
  'Hats & Headwear',
  'Accessories',
  'Activewear',
  'Swimwear',
  'Hoodies & Fleece',
  'Formal & Dress',
  'Sale Items',
]

const shippingZones = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'European Union',
  'Japan',
]

export function ServiceAreaSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">

          {/* Left — categories */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-accent" />
              <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold">What We Carry</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 mb-4 leading-tight">
              Shop every category,<br />all in one place
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              ShopCraft carries a wide range of lifestyle and apparel categories — from everyday essentials to statement pieces. New arrivals land every week, so there is always something fresh to discover.
            </p>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 mb-6">
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-widest mb-4">Product Categories</h3>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                {categories.map((cat) => (
                  <li key={cat} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-widest mb-4">We Ship To</h3>
              <ul className="flex flex-wrap gap-2">
                {shippingZones.map((zone) => (
                  <li key={zone} className="px-3 py-1.5 rounded-full bg-white border border-slate-300 text-sm text-slate-700 font-medium">
                    {zone}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — shipping info card */}
          <div className="rounded-3xl border-2 border-slate-200 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] overflow-hidden">
            <div className="bg-accent px-8 py-6">
              <div className="flex items-center gap-3 mb-2">
                <Truck className="w-6 h-6 text-yellow-400" />
                <h3 className="text-white font-bold text-lg">Shipping & Delivery</h3>
              </div>
              <p className="text-slate-300 text-sm">Fast, reliable shipping worldwide.</p>
            </div>
            <div className="bg-white p-8 space-y-6">
              {[
                { label: 'Standard Shipping', detail: '5-7 business days', note: 'Free on orders over $75' },
                { label: 'Express Shipping', detail: '2-3 business days', note: '$12.99 flat rate' },
                { label: 'Overnight Shipping', detail: 'Next business day', note: '$24.99 flat rate' },
                { label: 'International', detail: '7-14 business days', note: 'Rates calculated at checkout' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-start border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{row.label}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{row.note}</p>
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{row.detail}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Have a question about your order?{' '}
          <Link href="/contact" className="font-semibold text-accent hover:underline">
            Contact our support team and we will help right away.
          </Link>
        </p>
      </div>
    </section>
  )
}
