import { orders, customers, products } from './data'
import { DollarSign, ShoppingBag, Users, Package, TrendingUp, Clock } from 'lucide-react'

const revenue = orders.filter(o => o.status !== 'cancelled').reduce((s, o) => s + o.total, 0)
const pendingOrders = orders.filter(o => o.status === 'pending' || o.status === 'processing').length
const lowStock = products.filter(p => p.stock < 40)

const statusColor: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  processing: 'bg-blue-100 text-blue-700',
  shipped: 'bg-purple-100 text-purple-700',
  delivered: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
}

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Welcome back. Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Revenue', value: `$${revenue.toLocaleString()}`, icon: DollarSign, color: 'text-green-600 bg-green-50' },
          { label: 'Total Orders', value: orders.length, icon: ShoppingBag, color: 'text-blue-600 bg-blue-50' },
          { label: 'Customers', value: customers.length, icon: Users, color: 'text-purple-600 bg-purple-50' },
          { label: 'Products', value: products.length, icon: Package, color: 'text-orange-600 bg-orange-50' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500">{label}</p>
              <p className="text-xl font-bold text-slate-900">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-slate-900">Recent Orders</h2>
            <a href="/admin/orders" className="text-xs text-accent hover:underline">View all</a>
          </div>
          <div className="flex flex-col gap-3">
            {orders.slice(0, 5).map((order) => (
              <div key={order.id} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                <div>
                  <p className="text-sm font-medium text-slate-900">{order.customer}</p>
                  <p className="text-xs text-slate-400">{order.id} · {order.items} item{order.items > 1 ? 's' : ''}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColor[order.status]}`}>{order.status}</span>
                  <span className="text-sm font-semibold text-slate-900">${order.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {/* Pending */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-yellow-50 rounded-xl flex items-center justify-center">
                <Clock className="w-4 h-4 text-yellow-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Needs Attention</p>
                <p className="text-xl font-bold text-slate-900">{pendingOrders} orders</p>
              </div>
            </div>
            <p className="text-xs text-slate-400">Pending or processing orders awaiting action</p>
          </div>

          {/* Low stock */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-slate-900">Low Stock</h2>
              <TrendingUp className="w-4 h-4 text-slate-300" />
            </div>
            <div className="flex flex-col gap-3">
              {lowStock.map((p) => (
                <div key={p.id} className="flex items-center justify-between">
                  <p className="text-sm text-slate-700 truncate">{p.name}</p>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.stock < 30 ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-700'}`}>{p.stock} left</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
