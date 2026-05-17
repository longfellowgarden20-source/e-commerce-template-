'use client'

import Link from 'next/link'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { useCart } from '../context/CartContext'
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react'

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal } = useCart()

  const shipping = subtotal >= 75 ? 0 : 8.99
  const total = subtotal + shipping

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 mb-8">Your Cart</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <ShoppingBag className="w-16 h-16 text-slate-200 mb-4" />
            <h2 className="text-xl font-semibold text-slate-700 mb-2">Your cart is empty</h2>
            <p className="text-slate-400 mb-6">Add some products from the shop to get started.</p>
            <Link href="/shop" className="px-6 py-3 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border border-slate-100 rounded-2xl bg-white">
                  <img src={item.image} alt={item.name} className="w-24 h-28 object-cover rounded-xl flex-shrink-0" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">{item.name}</h3>
                        <p className="text-sm text-slate-400 mt-0.5">${item.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-slate-300 hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 border border-slate-200 rounded-lg">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="p-1.5 text-slate-500 hover:text-slate-900 disabled:opacity-30 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium text-slate-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 sticky top-24">
                <h2 className="text-lg font-display font-bold text-slate-900 mb-4">Order Summary</h2>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? <span className="text-green-600 font-medium">Free</span> : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-slate-400">Add ${(75 - subtotal).toFixed(2)} more for free shipping</p>
                  )}
                  <div className="border-t border-slate-200 pt-3 flex justify-between font-semibold text-slate-900 text-base">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="mt-6 block w-full py-3 px-4 bg-accent text-white text-sm font-semibold text-center rounded-lg hover:bg-accent-dark active:scale-[0.98] transition-all"
                >
                  Proceed to Checkout
                </Link>
                <Link href="/shop" className="mt-3 block text-center text-sm text-slate-500 hover:text-slate-700 transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
