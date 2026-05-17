import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from './context/CartContext'

export const metadata: Metadata = {
  title: 'ShopCraft - Premium Lifestyle & Apparel',
  description: 'Shop the latest in lifestyle, apparel, and accessories. Free shipping on orders over $75.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🛍️</text></svg>',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
