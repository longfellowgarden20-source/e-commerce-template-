'use client'

import { useState } from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { useCart } from '../context/CartContext'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { CheckCircle, ChevronRight, CreditCard, Lock } from 'lucide-react'

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null

type ShippingInfo = {
  firstName: string
  lastName: string
  email: string
  address: string
  city: string
  state: string
  zip: string
  country: string
}

const STEPS = ['Cart Review', 'Shipping', 'Payment', 'Confirmation']

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2 mb-10">
      {STEPS.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-colors ${i < current ? 'bg-accent text-white' : i === current ? 'bg-accent text-white ring-4 ring-accent/20' : 'bg-slate-100 text-slate-400'}`}>
            {i < current ? <CheckCircle className="w-4 h-4" /> : i + 1}
          </div>
          <span className={`text-sm hidden sm:inline ${i === current ? 'font-semibold text-slate-900' : 'text-slate-400'}`}>{label}</span>
          {i < STEPS.length - 1 && <ChevronRight className="w-4 h-4 text-slate-300 mx-1" />}
        </div>
      ))}
    </div>
  )
}

function CartReview({ onNext }: { onNext: () => void }) {
  const { items, subtotal } = useCart()
  const shipping = subtotal >= 75 ? 0 : 8.99

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 mb-4">Your cart is empty.</p>
        <a href="/shop" className="text-accent font-medium hover:underline">Back to shop</a>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-display font-bold text-slate-900 mb-6">Review your order</h2>
      <div className="flex flex-col gap-3 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-3 border border-slate-100 rounded-xl">
            <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded-lg flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-400 mt-0.5">Qty: {item.quantity}</p>
            </div>
            <p className="text-sm font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100 pt-4 flex flex-col gap-2 text-sm mb-8">
        <div className="flex justify-between text-slate-600"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between text-slate-600"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
        <div className="flex justify-between font-bold text-slate-900 text-base pt-2 border-t border-slate-100"><span>Total</span><span>${(subtotal + shipping).toFixed(2)}</span></div>
      </div>
      <button onClick={onNext} className="w-full py-3 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark active:scale-[0.98] transition-all">
        Continue to Shipping
      </button>
    </div>
  )
}

function ShippingForm({ onNext, onBack }: { onNext: (info: ShippingInfo) => void; onBack: () => void }) {
  const [form, setForm] = useState<ShippingInfo>({ firstName: '', lastName: '', email: '', address: '', city: '', state: '', zip: '', country: 'US' })
  const [errors, setErrors] = useState<Partial<ShippingInfo>>({})

  const set = (field: keyof ShippingInfo) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((err) => ({ ...err, [field]: '' }))
  }

  const validate = (): boolean => {
    const e: Partial<ShippingInfo> = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim()) e.lastName = 'Last name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.address.trim()) e.address = 'Address is required'
    if (!form.city.trim()) e.city = 'City is required'
    if (!form.state.trim()) e.state = 'State is required'
    if (!form.zip.trim()) e.zip = 'ZIP code is required'
    else if (!/^\d{4,10}$/.test(form.zip.replace(/\s/g, ''))) e.zip = 'Enter a valid ZIP / postal code'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) onNext(form)
  }

  const inputClass = (field: keyof ShippingInfo) =>
    `w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 transition-colors placeholder:text-slate-400 ${
      errors[field]
        ? 'border-red-400 focus:ring-red-200 focus:border-red-400'
        : 'border-slate-200 focus:ring-accent/40 focus:border-accent'
    }`

  const Field = ({ label, field, placeholder, type = 'text' }: { label: string; field: keyof ShippingInfo; placeholder: string; type?: string }) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-slate-600">{label}</label>
      <input
        type={type}
        value={form[field]}
        onChange={set(field)}
        placeholder={placeholder}
        className={inputClass(field)}
      />
      {errors[field] && <p className="text-xs text-red-500">{errors[field]}</p>}
    </div>
  )

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="text-xl font-display font-bold text-slate-900 mb-6">Shipping information</h2>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Field label="First name" field="firstName" placeholder="Jane" />
          <Field label="Last name" field="lastName" placeholder="Doe" />
        </div>
        <Field label="Email" field="email" placeholder="jane@example.com" type="email" />
        <Field label="Address" field="address" placeholder="123 Main St" />
        <div className="grid grid-cols-2 gap-4">
          <Field label="City" field="city" placeholder="New York" />
          <Field label="State / Province" field="state" placeholder="NY" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="ZIP / Postal code" field="zip" placeholder="10001" />
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-slate-600">Country</label>
            <select value={form.country} onChange={set('country')} className={inputClass('country')}>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="AU">Australia</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-8">
        <button type="button" onClick={onBack} className="flex-1 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
          Back
        </button>
        <button type="submit" className="flex-1 py-3 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark active:scale-[0.98] transition-all">
          Continue to Payment
        </button>
      </div>
    </form>
  )
}

function StripePaymentForm({ onBack, onSuccess }: { onBack: () => void; onSuccess: () => void }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return
    setLoading(true)
    setError('')

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin + '/checkout?confirmed=1' },
      redirect: 'if_required',
    })

    if (stripeError) {
      setError(stripeError.message ?? 'Payment failed. Please try again.')
      setLoading(false)
    } else {
      onSuccess()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-display font-bold text-slate-900 mb-6">Payment</h2>
      <div className="p-4 border border-slate-200 rounded-xl mb-4">
        <PaymentElement />
      </div>
      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
        <Lock className="w-3.5 h-3.5" />
        <span>Secured by Stripe. Your payment info is never stored.</span>
      </div>
      <div className="flex gap-3">
        <button type="button" onClick={onBack} className="flex-1 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
          Back
        </button>
        <button
          type="submit"
          disabled={loading || !stripe}
          className="flex-1 py-3 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] transition-all"
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </form>
  )
}

function PaymentPlaceholder({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <h2 className="text-xl font-display font-bold text-slate-900 mb-6">Payment</h2>
      <div className="p-6 border border-dashed border-slate-300 rounded-xl bg-slate-50 text-center mb-4">
        <CreditCard className="w-10 h-10 text-slate-300 mx-auto mb-3" />
        <p className="text-sm font-medium text-slate-600 mb-1">Stripe not configured</p>
        <p className="text-xs text-slate-400">Add your <code className="bg-slate-200 px-1 rounded">STRIPE_SECRET_KEY</code> and <code className="bg-slate-200 px-1 rounded">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> environment variables to enable payments.</p>
      </div>
      <button type="button" onClick={onBack} className="w-full py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
        Back
      </button>
    </div>
  )
}

function Confirmation({ shipping }: { shipping: ShippingInfo | null }) {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">Order Confirmed!</h2>
      <p className="text-slate-500 mb-1">Thank you for your purchase.</p>
      {shipping && (
        <p className="text-slate-500 text-sm mb-6">
          A confirmation will be sent to <span className="font-medium text-slate-700">{shipping.email}</span>
        </p>
      )}
      <a href="/shop" className="inline-block px-6 py-3 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors">
        Continue Shopping
      </a>
    </div>
  )
}

export default function CheckoutPage() {
  const [step, setStep] = useState(0)
  const [shipping, setShipping] = useState<ShippingInfo | null>(null)
  const [clientSecret, setClientSecret] = useState('')
  const { subtotal, clearCart } = useCart()

  const shipping_cost = subtotal >= 75 ? 0 : 8.99
  const total = subtotal + shipping_cost

  const handleShippingNext = async (info: ShippingInfo) => {
    setShipping(info)
    if (stripePromise) {
      try {
        const res = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount: Math.round(total * 100) }),
        })
        const data = await res.json()
        if (data.clientSecret) setClientSecret(data.clientSecret)
      } catch {
        // proceed to step 2 which will show the placeholder
      }
    }
    setStep(2)
  }

  const handleSuccess = () => {
    clearCart()
    setStep(3)
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <StepIndicator current={step} />

        {step === 0 && <CartReview onNext={() => setStep(1)} />}
        {step === 1 && <ShippingForm onNext={handleShippingNext} onBack={() => setStep(0)} />}
        {step === 2 && (
          stripePromise && clientSecret
            ? (
              <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'stripe' } }}>
                <StripePaymentForm onBack={() => setStep(1)} onSuccess={handleSuccess} />
              </Elements>
            )
            : <PaymentPlaceholder onBack={() => setStep(1)} />
        )}
        {step === 3 && <Confirmation shipping={shipping} />}
      </section>

      <Footer />
    </main>
  )
}
