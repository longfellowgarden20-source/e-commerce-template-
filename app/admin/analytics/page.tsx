import { orders, products, customers } from '../data'

const revenue = orders.filter(o => o.status !== 'cancelled').reduce((s, o) => s + o.total, 0)
const delivered = orders.filter(o => o.status === 'delivered').length
const cancelled = orders.filter(o => o.status === 'cancelled').length
const conversionRate = Math.round((delivered / orders.length) * 100)

const topProducts = products.slice().sort((a, b) => b.price - a.price).slice(0, 5)
const topCustomers = customers.slice().sort((a, b) => b.spent - a.spent).slice(0, 5)

const dailyRevenue = orders
  .filter(o => o.status !== 'cancelled')
  .reduce<Record<string, number>>((acc, o) => {
    acc[o.date] = (acc[o.date] ?? 0) + o.total
    return acc
  }, {})

const revenueByDay = Object.entries(dailyRevenue).sort(([a], [b]) => a.localeCompare(b))
const maxRevenue = Math.max(...revenueByDay.map(([, v]) => v))

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
        <p className="text-sm text-slate-500 mt-1">Store performance overview</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Revenue', value: `$${revenue.toLocaleString()}` },
          { label: 'Orders', value: orders.length },
          { label: 'Delivered', value: `${conversionRate}%`, sub: 'delivery rate' },
          { label: 'Cancelled', value: cancelled, sub: 'orders' },
        ].map(({ label, value, sub }) => (
          <div key={label} className="bg-white rounded-2xl border border-slate-100 p-5">
            <p className="text-xs text-slate-500 mb-1">{label}</p>
            <p className="text-2xl font-bold text-slate-900">{value}</p>
            {sub && <p className="text-xs text-slate-400 mt-0.5">{sub}</p>}
          </div>
        ))}
      </div>

      {/* Revenue chart (bar) */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6">
        <h2 className="font-semibold text-slate-900 mb-6">Revenue by Day</h2>
        <div className="flex items-end gap-3 h-40">
          {revenueByDay.map(([date, amount]) => (
            <div key={date} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">${amount}</span>
              <div
                className="w-full bg-accent rounded-t-md transition-all"
                style={{ height: `${(amount / maxRevenue) * 100}%`, minHeight: '8px' }}
              />
              <span className="text-[10px] text-slate-400 whitespace-nowrap">{date.slice(5)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top products */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6">
          <h2 className="font-semibold text-slate-900 mb-4">Top Products by Price</h2>
          <div className="flex flex-col gap-3">
            {topProducts.map((p, i) => (
              <div key={p.id} className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-300 w-4">{i + 1}</span>
                <img src={p.image} alt={p.name} className="w-8 h-10 object-cover rounded-md flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">{p.name}</p>
                  <p className="text-xs text-slate-400">{p.category}</p>
                </div>
                <span className="text-sm font-semibold text-slate-900">${p.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top customers */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6">
          <h2 className="font-semibold text-slate-900 mb-4">Top Customers</h2>
          <div className="flex flex-col gap-3">
            {topCustomers.map((c, i) => (
              <div key={c.id} className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-300 w-4">{i + 1}</span>
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-accent">{c.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">{c.name}</p>
                  <p className="text-xs text-slate-400">{c.orders} orders</p>
                </div>
                <span className="text-sm font-semibold text-slate-900">${c.spent.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
