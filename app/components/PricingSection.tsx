import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '0',
    description: 'Perfect for first-time shoppers exploring our catalog.',
    features: [
      'Access to full product catalog',
      'Standard shipping rates',
      'Email order updates',
      '30-day return policy',
      'Customer support',
    ],
    cta: 'Start Shopping',
    featured: false,
  },
  {
    name: 'Member',
    price: '9',
    description: 'For regular shoppers who want perks, savings, and early access.',
    features: [
      'Free shipping on all orders',
      'Early access to new drops',
      'Exclusive member discounts',
      'Priority customer support',
      'Extended 60-day returns',
      'Birthday reward credit',
    ],
    cta: 'Join Now',
    featured: true,
  },
  {
    name: 'Business',
    price: 'Custom',
    description: 'Bulk ordering and wholesale pricing for businesses.',
    features: [
      'Wholesale pricing',
      'Bulk order discounts',
      'Dedicated account manager',
      'Custom invoicing',
      'Net-30 payment terms',
      'Brand co-op options',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <p className="text-sm uppercase tracking-[0.28em] text-accent font-semibold">Membership Plans</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950">
            Simple, honest pricing
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg">
            Shop for free or unlock member perks for $9/month. No contracts, cancel anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 ${
                plan.featured
                  ? 'border-2 border-accent bg-accent shadow-[0_8px_40px_-8px_rgba(26,26,46,0.4)] scale-100 md:scale-105'
                  : 'border-2 border-slate-200 bg-white hover:border-accent hover:shadow-md'
              }`}
            >
              {plan.featured && (
                <div className="px-4 sm:px-6 py-2 bg-yellow-400 text-slate-900 text-xs sm:text-sm font-semibold text-center rounded-t-2xl">
                  Most Popular
                </div>
              )}

              <div className="p-6 sm:p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm sm:text-base ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className={`text-4xl sm:text-5xl font-bold ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price === 'Custom' ? 'Custom' : plan.price === '0' ? 'Free' : `$${plan.price}/mo`}
                  </div>
                </div>

                <button
                  className={`w-full py-3 sm:py-3.5 rounded-lg font-medium mb-8 transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm sm:text-base ${
                    plan.featured
                      ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-300'
                      : 'bg-accent text-white hover:bg-accent-dark'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-3 sm:space-y-4 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3 sm:gap-4">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-yellow-400' : 'text-accent'}`} />
                      <span className={`text-sm sm:text-base ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-slate-600 text-sm sm:text-base">
            Questions about membership? <span className="font-semibold">Contact us and we will help you find the right plan.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
