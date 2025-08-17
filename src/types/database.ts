// src/types/database.ts - Supabaseデータベース型定義

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          website: string | null
          location: string | null
          created_at: string
          updated_at: string
          is_seller: boolean
          seller_rating: number
          seller_reviews_count: number
          total_sales: number
          is_verified: boolean
          is_premium: boolean
          account_status: 'active' | 'suspended' | 'banned'
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          website?: string | null
          location?: string | null
          created_at?: string
          updated_at?: string
          is_seller?: boolean
          seller_rating?: number
          seller_reviews_count?: number
          total_sales?: number
          is_verified?: boolean
          is_premium?: boolean
          account_status?: 'active' | 'suspended' | 'banned'
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          website?: string | null
          location?: string | null
          created_at?: string
          updated_at?: string
          is_seller?: boolean
          seller_rating?: number
          seller_reviews_count?: number
          total_sales?: number
          is_verified?: boolean
          is_premium?: boolean
          account_status?: 'active' | 'suspended' | 'banned'
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          icon: string | null
          color: string | null
          parent_id: string | null
          sort_order: number
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          icon?: string | null
          color?: string | null
          parent_id?: string | null
          sort_order?: number
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          icon?: string | null
          color?: string | null
          parent_id?: string | null
          sort_order?: number
          is_active?: boolean
          created_at?: string
        }
      }
      products: {
        Row: {
          id: string
          seller_id: string
          category_id: string
          title: string
          description: string
          short_description: string | null
          price: number
          original_price: number | null
          currency: string
          tags: string[] | null
          features: string[] | null
          demo_url: string | null
          documentation_url: string | null
          support_email: string | null
          main_image_url: string | null
          gallery_images: string[] | null
          files: string[] | null
          status: 'draft' | 'published' | 'suspended' | 'sold_out'
          is_featured: boolean
          is_digital: boolean
          stock_quantity: number
          seo_title: string | null
          seo_description: string | null
          slug: string | null
          view_count: number
          download_count: number
          sale_count: number
          rating: number
          review_count: number
          created_at: string
          updated_at: string
          published_at: string | null
        }
        Insert: {
          id?: string
          seller_id: string
          category_id: string
          title: string
          description: string
          short_description?: string | null
          price: number
          original_price?: number | null
          currency?: string
          tags?: string[] | null
          features?: string[] | null
          demo_url?: string | null
          documentation_url?: string | null
          support_email?: string | null
          main_image_url?: string | null
          gallery_images?: string[] | null
          files?: string[] | null
          status?: 'draft' | 'published' | 'suspended' | 'sold_out'
          is_featured?: boolean
          is_digital?: boolean
          stock_quantity?: number
          seo_title?: string | null
          seo_description?: string | null
          slug?: string | null
          view_count?: number
          download_count?: number
          sale_count?: number
          rating?: number
          review_count?: number
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
        Update: {
          id?: string
          seller_id?: string
          category_id?: string
          title?: string
          description?: string
          short_description?: string | null
          price?: number
          original_price?: number | null
          currency?: string
          tags?: string[] | null
          features?: string[] | null
          demo_url?: string | null
          documentation_url?: string | null
          support_email?: string | null
          main_image_url?: string | null
          gallery_images?: string[] | null
          files?: string[] | null
          status?: 'draft' | 'published' | 'suspended' | 'sold_out'
          is_featured?: boolean
          is_digital?: boolean
          stock_quantity?: number
          seo_title?: string | null
          seo_description?: string | null
          slug?: string | null
          view_count?: number
          download_count?: number
          sale_count?: number
          rating?: number
          review_count?: number
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
      }
      orders: {
        Row: {
          id: string
          buyer_id: string
          order_number: string
          status: 'pending' | 'processing' | 'completed' | 'cancelled' | 'refunded'
          subtotal: number
          tax_amount: number
          discount_amount: number
          total_amount: number
          currency: string
          payment_method: string | null
          payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
          stripe_payment_intent_id: string | null
          stripe_session_id: string | null
          billing_address: Json | null
          shipping_address: Json | null
          created_at: string
          updated_at: string
          completed_at: string | null
        }
        Insert: {
          id?: string
          buyer_id: string
          order_number: string
          status?: 'pending' | 'processing' | 'completed' | 'cancelled' | 'refunded'
          subtotal: number
          tax_amount?: number
          discount_amount?: number
          total_amount: number
          currency?: string
          payment_method?: string | null
          payment_status?: 'pending' | 'paid' | 'failed' | 'refunded'
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          billing_address?: Json | null
          shipping_address?: Json | null
          created_at?: string
          updated_at?: string
          completed_at?: string | null
        }
        Update: {
          id?: string
          buyer_id?: string
          order_number?: string
          status?: 'pending' | 'processing' | 'completed' | 'cancelled' | 'refunded'
          subtotal?: number
          tax_amount?: number
          discount_amount?: number
          total_amount?: number
          currency?: string
          payment_method?: string | null
          payment_status?: 'pending' | 'paid' | 'failed' | 'refunded'
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          billing_address?: Json | null
          shipping_address?: Json | null
          created_at?: string
          updated_at?: string
          completed_at?: string | null
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          seller_id: string
          quantity: number
          unit_price: number
          total_price: number
          product_title: string
          product_description: string | null
          product_image_url: string | null
          download_urls: string[] | null
          download_expires_at: string | null
          download_count: number
          max_download_count: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          seller_id: string
          quantity?: number
          unit_price: number
          total_price: number
          product_title: string
          product_description?: string | null
          product_image_url?: string | null
          download_urls?: string[] | null
          download_expires_at?: string | null
          download_count?: number
          max_download_count?: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          seller_id?: string
          quantity?: number
          unit_price?: number
          total_price?: number
          product_title?: string
          product_description?: string | null
          product_image_url?: string | null
          download_urls?: string[] | null
          download_expires_at?: string | null
          download_count?: number
          max_download_count?: number
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          product_id: string
          buyer_id: string
          order_item_id: string
          rating: number
          title: string | null
          content: string
          is_verified_purchase: boolean
          is_featured: boolean
          helpful_count: number
          reply_content: string | null
          reply_created_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          product_id: string
          buyer_id: string
          order_item_id: string
          rating: number
          title?: string | null
          content: string
          is_verified_purchase?: boolean
          is_featured?: boolean
          helpful_count?: number
          reply_content?: string | null
          reply_created_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          buyer_id?: string
          order_item_id?: string
          rating?: number
          title?: string | null
          content?: string
          is_verified_purchase?: boolean
          is_featured?: boolean
          helpful_count?: number
          reply_content?: string | null
          reply_created_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      earnings: {
        Row: {
          id: string
          seller_id: string
          order_item_id: string
          product_id: string
          gross_amount: number
          platform_fee: number
          net_amount: number
          status: 'pending' | 'available' | 'paid'
          payout_date: string | null
          created_at: string
        }
        Insert: {
          id?: string
          seller_id: string
          order_item_id: string
          product_id: string
          gross_amount: number
          platform_fee: number
          net_amount: number
          status?: 'pending' | 'available' | 'paid'
          payout_date?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          seller_id?: string
          order_item_id?: string
          product_id?: string
          gross_amount?: number
          platform_fee?: number
          net_amount?: number
          status?: 'pending' | 'available' | 'paid'
          payout_date?: string | null
          created_at?: string
        }
      }
      search_logs: {
        Row: {
          id: string
          user_id: string | null
          query: string
          results_count: number
          clicked_product_id: string | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          query: string
          results_count?: number
          clicked_product_id?: string | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          query?: string
          results_count?: number
          clicked_product_id?: string | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}