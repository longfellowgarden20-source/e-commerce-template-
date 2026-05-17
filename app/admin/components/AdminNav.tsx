'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Package, ShoppingBag, Users, BarChart3, ExternalLink, X, Menu } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/orders', label: 'Orders', icon: ShoppingBag },
  { href: '/admin/customers', label: 'Customers', icon: Users },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
]

export function AdminNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <>
      {links.map(({ href, label, icon: Icon }) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-accent text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            {label}
          </Link>
        )
      })}
    </>
  )

  return (
    <>
      {/* Sidebar — desktop */}
      <aside className="hidden md:flex flex-col w-56 bg-white border-r border-slate-200 min-h-screen p-4 gap-1 fixed top-0 left-0">
        <div className="flex items-center gap-2 px-3 py-3 mb-4 border-b border-slate-100">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">🛍️</div>
          <div>
            <p className="text-sm font-bold text-slate-900">ShopCraft</p>
            <p className="text-xs text-slate-400">Admin Panel</p>
          </div>
        </div>
        <NavLinks />
        <div className="mt-auto pt-4 border-t border-slate-100">
          <Link href="/" target="_blank" className="flex items-center gap-2 px-3 py-2 text-xs text-slate-400 hover:text-slate-600 transition-colors">
            <ExternalLink className="w-3.5 h-3.5" />
            View Store
          </Link>
        </div>
      </aside>

      {/* Top bar — mobile */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center text-white text-xs">🛍️</div>
          <span className="text-sm font-bold text-slate-900">Admin</span>
        </div>
        <button onClick={() => setOpen(!open)} className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/30" onClick={() => setOpen(false)}>
          <div className="bg-white w-56 min-h-full p-4 flex flex-col gap-1" onClick={(e) => e.stopPropagation()}>
            <NavLinks />
          </div>
        </div>
      )}
    </>
  )
}
