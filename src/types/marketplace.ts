// src/types/marketplace.ts - マーケットプレイス用型定義

// 🏪 基本的な型定義
export interface User {
  id: string
  username?: string
  full_name?: string
  avatar_url?: string
  bio?: string
  website?: string
  location?: string
  is_seller: boolean
  seller_rating: number
  seller_reviews_count: number
  total_sales: number
  is_verified: boolean
  is_premium: boolean
  account_status: 'active' | 'suspended' | 'banned'
  created_at: string
  updated_at: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  icon?: string
  color?: string
  parent_id?: string
  sort_order: number
  is_active: boolean
  created_at: string
  children?: Category[]
}

export interface Product {
  id: string
  seller_id: string
  category_id: string
  title: string
  description: string
  short_description?: string
  price: number
  original_price?: number
  currency: string
  tags?: string[]
  features?: string[]
  demo_url?: string
  documentation_url?: string
  support_email?: string
  main_image_url?: string
  gallery_images?: string[]
  files?: string[]
  status: 'draft' | 'published' | 'suspended' | 'sold_out'
  is_featured: boolean
  is_digital: boolean
  stock_quantity: number
  seo_title?: string
  seo_description?: string
  slug?: string
  view_count: number
  download_count: number
  sale_count: number
  rating: number
  review_count: number
  created_at: string
  updated_at: string
  published_at?: string
  
  // リレーション
  seller?: User
  category?: Category
  reviews?: Review[]
}

export interface Order {
  id: string
  buyer_id: string
  order_number: string
  status: 'pending' | 'processing' | 'completed' | 'cancelled' | 'refunded'
  subtotal: number
  tax_amount: number
  discount_amount: number
  total_amount: number
  currency: string
  payment_method?: string
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
  stripe_payment_intent_id?: string
  stripe_session_id?: string
  billing_address?: BillingAddress
  shipping_address?: ShippingAddress
  created_at: string
  updated_at: string
  completed_at?: string
  
  // リレーション
  buyer?: User
  order_items?: OrderItem[]
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  seller_id: string
  quantity: number
  unit_price: number
  total_price: number
  product_title: string
  product_description?: string
  product_image_url?: string
  download_urls?: string[]
  download_expires_at?: string
  download_count: number
  max_download_count: number
  created_at: string
  
  // リレーション
  product?: Product
  seller?: User
}

export interface Review {
  id: string
  product_id: string
  buyer_id: string
  order_item_id: string
  rating: number
  title?: string
  content: string
  is_verified_purchase: boolean
  is_featured: boolean
  helpful_count: number
  reply_content?: string
  reply_created_at?: string
  created_at: string
  updated_at: string
  
  // リレーション
  buyer?: User
  product?: Product
}

export interface Earnings {
  id: string
  seller_id: string
  order_item_id: string
  product_id: string
  gross_amount: number
  platform_fee: number
  net_amount: number
  status: 'pending' | 'available' | 'paid'
  payout_date?: string
  created_at: string
  
  // リレーション
  seller?: User
  product?: Product
  order_item?: OrderItem
}

// 🛒 カート関連
export interface CartItem {
  product_id: string
  quantity: number
  product?: Product
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  tax_amount: number
  total_amount: number
}

// 📝 フォーム関連
export interface ProductFormData {
  title: string
  description: string
  short_description?: string
  category_id: string
  price: number
  original_price?: number
  tags?: string[]
  features?: string[]
  demo_url?: string
  documentation_url?: string
  support_email?: string
  main_image?: File
  gallery_images?: File[]
  files?: File[]
  is_digital: boolean
  stock_quantity?: number
}

export interface UserProfileFormData {
  username?: string
  full_name?: string
  bio?: string
  website?: string
  location?: string
  avatar?: File
}

// 📍 住所関連
export interface BillingAddress {
  first_name: string
  last_name: string
  company?: string
  address_line_1: string
  address_line_2?: string
  city: string
  state: string
  postal_code: string
  country: string
}

export interface ShippingAddress extends BillingAddress {
  phone?: string
}

// 🔍 検索・フィルター関連
export interface SearchFilters {
  query?: string
  category_id?: string
  min_price?: number
  max_price?: number
  rating_min?: number
  sort_by?: 'newest' | 'oldest' | 'price_asc' | 'price_desc' | 'rating' | 'popular'
  is_featured?: boolean
  tags?: string[]
}

export interface SearchResult {
  products: Product[]
  total_count: number
  page: number
  per_page: number
  total_pages: number
}

// 📊 統計・分析関連
export interface SellerStats {
  total_products: number
  total_sales: number
  total_revenue: number
  average_rating: number
  total_reviews: number
  pending_earnings: number
  available_earnings: number
}

export interface PlatformStats {
  total_users: number
  total_sellers: number
  total_products: number
  total_orders: number
  total_revenue: number
  growth_rate: number
}

// 🔔 通知関連
export interface Notification {
  id: string
  user_id: string
  type: 'order' | 'review' | 'payout' | 'system'
  title: string
  message: string
  is_read: boolean
  action_url?: string
  created_at: string
}

// 🎯 API レスポンス関連
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T = unknown> {
  data: T[]
  pagination: {
    page: number
    per_page: number
    total_count: number
    total_pages: number
  }
}

// 🔐 認証関連
export interface AuthUser {
  id: string
  email: string
  email_verified: boolean
  user_metadata: Record<string, unknown>
  app_metadata: Record<string, unknown>
  created_at: string
  updated_at: string
}

export interface Session {
  access_token: string
  refresh_token: string
  user: AuthUser
  expires_at: number
}

// 💳 決済関連
export interface PaymentIntent {
  id: string
  amount: number
  currency: string
  status: string
  client_secret: string
}

export interface StripeSession {
  id: string
  url: string
  payment_status: string
}

// 📁 ファイルアップロード関連
export interface UploadedFile {
  id: string
  filename: string
  original_name: string
  mime_type: string
  size: number
  url: string
  created_at: string
}

// 🎨 UI コンポーネント関連
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

// 🔄 状態管理関連
export interface AppState {
  user: User | null
  cart: Cart
  notifications: Notification[]
  loading: boolean
  error: string | null
}

export interface ProductsState {
  products: Product[]
  featured_products: Product[]
  categories: Category[]
  search_results: SearchResult | null
  loading: boolean
  error: string | null
}

export interface OrdersState {
  orders: Order[]
  current_order: Order | null
  loading: boolean
  error: string | null
}