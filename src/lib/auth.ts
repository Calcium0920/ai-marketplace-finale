// src/lib/auth.ts - NextAuth設定（修正版）
import { NextAuthOptions } from 'next-auth'
import { SupabaseAdapter } from '@auth/supabase-adapter'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { supabase } from '@/lib/supabase'

export const authOptions: NextAuthOptions = {
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  providers: [
    // 🔐 メール/パスワードログイン
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
          })

          if (error || !data.user) {
            return null
          }

          return {
            id: data.user.id,
            email: data.user.email!,
            name: data.user.user_metadata?.full_name || data.user.email,
            image: data.user.user_metadata?.avatar_url,
          }
        } catch (authError) {
          console.error('Auth error:', authError)
          return null
        }
      }
    }),

    // 🌐 Googleログイン（環境変数がある場合のみ）
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET ? [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      })
    ] : []),

    // 🐙 GitHubログイン（環境変数がある場合のみ）
    ...(process.env.GITHUB_ID && process.env.GITHUB_SECRET ? [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      })
    ] : []),
  ],

  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
        
        // Supabaseからユーザープロファイル取得
        try {
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', token.sub)
            .single()

          if (profile) {
            session.user.profile = profile
          }
        } catch (error) {
          console.error('Profile fetch error:', error)
        }
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id
      }
      return token
    },
    async signIn({ user, account }) {
      if (account?.provider === 'google' || account?.provider === 'github') {
        try {
          // プロファイル自動作成
          const { error } = await supabase
            .from('profiles')
            .upsert({
              id: user.id,
              full_name: user.name,
              avatar_url: user.image,
              username: user.email?.split('@')[0],
            })
          
          if (error) {
            console.error('Profile creation error:', error)
          }
        } catch (signInError) {
          console.error('Sign in error:', signInError)
        }
      }
      return true
    },
  },

  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30日
  },

  secret: process.env.NEXTAUTH_SECRET,
}