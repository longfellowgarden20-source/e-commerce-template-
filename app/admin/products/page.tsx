'use client'

import { useState } from 'react'
import { products as initialProducts, Product } from '../data'
import { Plus, Pencil, Trash2, X, Check } from 'lucide-react'

const categories = ['T-Shirts', 'Outerwear', 'Pants', 'Hoodies', 'Footwear', 'Accessories', 'Hats']
const badges = ['', 'New', 'Bestseller', 'Sale']

const empty: Omit<Product, 'id'> = { name: '', category: 'T-Shirts', price: 0, stock: 0, badge: null, image: '' }

export default function ProductsPage() {
  const [items, setItems] = useState<Product[]>(initialProducts)
  const [editing, setEditing] = useState<Product | null>(null)
  const [adding, setAdding] = useState(false)
  const [form, setForm] = useState<Omit<Product, 'id'>>(empty)

  const set = (field: keyof Omit<Product, 'id'>) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const val = field === 'price' || field === 'stock' ? Number(e.target.value) : e.target.value === '' ? null : e.target.value
    setForm(f => ({ ...f, [field]: val }))
  }

  const saveNew = () => {
    const id = form.name.toLowerCase().replace(/\s+/g, '-')
    setItems(prev => [...prev, { ...form, id }])
    setAdding(false)
    setForm(empty)
  }

  const saveEdit = () => {
    if (!editing) return
    setItems(prev => prev.map(p => p.id === editing.id ? { ...editing, ...form } : p))
    setEditing(null)
    setForm(empty)
  }

  const startEdit = (p: Product) => {
    setEditing(p)
    setAdding(false)
    setForm({ name: p.name, category: p.category, price: p.price, stock: p.stock, badge: p.badge, image: p.image })
  }

  const remove = (id: string) => setItems(prev => prev.filter(p => p.id !== id))

  const inputClass = "w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"

  const FormRow = () => (
    <tr className="bg-accent/5">
      <td className="px-4 py-3"><input className={inputClass} placeholder="Product name" value={form.name} onChange={set('name')} /></td>
      <td className="px-4 py-3">
        <select className={inputClass} value={form.category} onChange={set('category')}>
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
      </td>
      <td className="px-4 py-3"><input type="number" className={inputClass} placeholder="0" value={form.price || ''} onChange={set('price')} /></td>
      <td className="px-4 py-3"><input type="number" className={inputClass} placeholder="0" value={form.stock || ''} onChange={set('stock')} /></td>
      <td className="px-4 py-3">
        <select className={inputClass} value={form.badge ?? ''} onChange={set('badge')}>
          {badges.map(b => <option key={b} value={b}>{b || 'None'}</option>)}
        </select>
      </td>
      <td className="px-4 py-3 flex items-center gap-2">
        <button onClick={editing ? saveEdit : saveNew} className="p-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"><Check className="w-4 h-4" /></button>
        <button onClick={() => { setAdding(false); setEditing(null); setForm(empty) }} className="p-1.5 bg-slate-200 text-slate-600 rounded-lg hover:bg-slate-300 transition-colors"><X className="w-4 h-4" /></button>
      </td>
    </tr>
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Products</h1>
          <p className="text-sm text-slate-500 mt-1">{items.length} products total</p>
        </div>
        <button onClick={() => { setAdding(true); setEditing(null) }} className="flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-dark transition-colors">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-left">
                <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Name</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Category</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Price</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Stock</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Badge</th>
                <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {adding && !editing && <FormRow />}
              {items.map(p => (
                editing?.id === p.id ? <FormRow key={p.id} /> : (
                  <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img src={p.image} alt={p.name} className="w-10 h-12 object-cover rounded-lg flex-shrink-0" />
                        <span className="font-medium text-slate-900">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{p.category}</td>
                    <td className="px-4 py-3 font-medium text-slate-900">${p.price}</td>
                    <td className="px-4 py-3">
                      <span className={`font-medium ${p.stock < 40 ? 'text-red-500' : 'text-slate-900'}`}>{p.stock}</span>
                    </td>
                    <td className="px-4 py-3">
                      {p.badge ? <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs">{p.badge}</span> : <span className="text-slate-300">—</span>}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button onClick={() => startEdit(p)} className="p-1.5 text-slate-400 hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"><Pencil className="w-4 h-4" /></button>
                        <button onClick={() => remove(p.id)} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
