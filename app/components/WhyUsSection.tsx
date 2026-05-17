export function WhyUsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="text-center mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">Why ShopCraft</p>
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-950 mb-6">
          Shopping made simple, quality made standard
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          We built ShopCraft around one idea: great products should be easy to find and easy to trust. Here is what sets us apart.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {[
          {
            title: 'Handpicked products',
            description: 'Every item in our store is reviewed and selected by our team. We only carry products we would buy ourselves.',
          },
          {
            title: 'No-hassle returns',
            description: 'Changed your mind? No problem. Return any item within 30 days for a full refund with free return shipping.',
          },
          {
            title: 'Transparent pricing',
            description: 'What you see is what you pay. No hidden fees, surprise charges, or confusing membership requirements.',
          },
          {
            title: 'Fast, reliable delivery',
            description: 'Most orders ship within 1 business day. Free standard shipping on orders over $75, always.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border-2 border-slate-100 p-8 shadow-sm bg-white hover:border-accent hover:shadow-[0_8px_30px_-8px_rgba(26,26,46,0.12)] transition-all duration-300">
            <h2 className="text-2xl font-semibold text-slate-950 mb-3">{item.title}</h2>
            <p className="text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          When you shop with ShopCraft, you get quality products, fair prices, and a shopping experience worth coming back to.
        </p>
      </div>
    </section>
  )
}
