export type Product = {
  id: string
  name: string
  category: string
  price: number
  stock: number
  badge: string | null
  image: string
}

export type Order = {
  id: string
  customer: string
  email: string
  date: string
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  items: number
}

export type Customer = {
  id: string
  name: string
  email: string
  joined: string
  orders: number
  spent: number
}

export const products: Product[] = [
  { id: 'classic-crew-tee', name: 'Classic Crew Tee', category: 'T-Shirts', price: 49, stock: 142, badge: 'New', image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Classic+Tee' },
  { id: 'washed-canvas-jacket', name: 'Washed Canvas Jacket', category: 'Outerwear', price: 159, stock: 38, badge: 'Bestseller', image: 'https://placehold.co/600x700/2d2d4a/ffffff?text=Canvas+Jacket' },
  { id: 'slim-cargo-pants', name: 'Slim Cargo Pants', category: 'Pants', price: 99, stock: 75, badge: null, image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Cargo+Pants' },
  { id: 'leather-crossbody-bag', name: 'Leather Crossbody Bag', category: 'Accessories', price: 89, stock: 54, badge: 'New', image: 'https://placehold.co/600x700/2d2d4a/ffffff?text=Crossbody+Bag' },
  { id: 'minimal-sneakers', name: 'Minimal Sneakers', category: 'Footwear', price: 139, stock: 29, badge: null, image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Sneakers' },
  { id: 'fleece-pullover', name: 'Fleece Pullover', category: 'Hoodies', price: 79, stock: 91, badge: 'Sale', image: 'https://placehold.co/600x700/2d2d4a/ffffff?text=Fleece+Pullover' },
  { id: 'structured-cap', name: 'Structured Cap', category: 'Hats', price: 39, stock: 200, badge: null, image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Structured+Cap' },
  { id: 'overshirt-jacket', name: 'Overshirt Jacket', category: 'Outerwear', price: 129, stock: 47, badge: 'Bestseller', image: 'https://placehold.co/600x700/2d2d4a/ffffff?text=Overshirt' },
  { id: 'essential-hoodie', name: 'Essential Hoodie', category: 'Hoodies', price: 89, stock: 63, badge: null, image: 'https://placehold.co/600x700/1a1a2e/ffffff?text=Essential+Hoodie' },
]

export const orders: Order[] = [
  { id: 'ORD-1001', customer: 'James Carter', email: 'james@example.com', date: '2026-05-16', total: 248, status: 'delivered', items: 2 },
  { id: 'ORD-1002', customer: 'Sofia Reyes', email: 'sofia@example.com', date: '2026-05-15', total: 139, status: 'shipped', items: 1 },
  { id: 'ORD-1003', customer: 'Marcus Lin', email: 'marcus@example.com', date: '2026-05-15', total: 317, status: 'processing', items: 3 },
  { id: 'ORD-1004', customer: 'Priya Nair', email: 'priya@example.com', date: '2026-05-14', total: 89, status: 'pending', items: 1 },
  { id: 'ORD-1005', customer: 'Tom Bennett', email: 'tom@example.com', date: '2026-05-14', total: 188, status: 'delivered', items: 2 },
  { id: 'ORD-1006', customer: 'Aisha Osman', email: 'aisha@example.com', date: '2026-05-13', total: 49, status: 'cancelled', items: 1 },
  { id: 'ORD-1007', customer: 'Leo Fontaine', email: 'leo@example.com', date: '2026-05-13', total: 427, status: 'delivered', items: 4 },
  { id: 'ORD-1008', customer: 'Nina Patel', email: 'nina@example.com', date: '2026-05-12', total: 99, status: 'shipped', items: 1 },
]

export const customers: Customer[] = [
  { id: 'CUS-001', name: 'James Carter', email: 'james@example.com', joined: '2026-01-12', orders: 5, spent: 842 },
  { id: 'CUS-002', name: 'Sofia Reyes', email: 'sofia@example.com', joined: '2026-02-03', orders: 3, spent: 417 },
  { id: 'CUS-003', name: 'Marcus Lin', email: 'marcus@example.com', joined: '2026-02-18', orders: 7, spent: 1243 },
  { id: 'CUS-004', name: 'Priya Nair', email: 'priya@example.com', joined: '2026-03-05', orders: 2, spent: 228 },
  { id: 'CUS-005', name: 'Tom Bennett', email: 'tom@example.com', joined: '2026-03-20', orders: 4, spent: 676 },
  { id: 'CUS-006', name: 'Aisha Osman', email: 'aisha@example.com', joined: '2026-04-01', orders: 1, spent: 49 },
  { id: 'CUS-007', name: 'Leo Fontaine', email: 'leo@example.com', joined: '2026-04-14', orders: 6, spent: 1891 },
  { id: 'CUS-008', name: 'Nina Patel', email: 'nina@example.com', joined: '2026-05-02', orders: 2, spent: 238 },
]
