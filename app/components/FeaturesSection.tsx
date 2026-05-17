import { Shirt, Star, Truck, RotateCcw, ShieldCheck, Tag } from 'lucide-react'

const features = [
  {
    icon: Shirt,
    title: 'Premium Quality',
    description: 'Every product is sourced from trusted manufacturers and held to strict quality standards before it reaches you.',
  },
  {
    icon: Star,
    title: 'Curated Collections',
    description: 'Our team handpicks each item for style, durability, and value — no filler, only the best.',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free standard shipping on all orders over $75. Express and next-day options available at checkout.',
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    description: 'Not happy with your order? Return it within 30 days for a full refund — no questions asked.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Checkout',
    description: 'Shop with confidence. All transactions are encrypted and protected by industry-standard security.',
  },
  {
    icon: Tag,
    title: 'Member Discounts',
    description: 'Join ShopCraft and get early access to sales, exclusive member pricing, and new drop notifications.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold">Why ShopCraft</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950">
            Built for people who care about quality
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg">
            From curated picks to hassle-free returns, everything about ShopCraft is designed to make your shopping experience better.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-xl border-2 border-slate-200 hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(26,26,46,0.15)] transition-all duration-300 bg-white hover:bg-slate-50/50"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
