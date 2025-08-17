// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Marketplace - 次世代AIツール売買プラットフォーム',
  description: 'カスタムChatBot、AI画像生成ツール、自動化スクリプトなど、あらゆるAIツールを簡単に売買できる次世代プラットフォーム。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
          {/* 🌟 背景装飾 */}
          <div className="fixed inset-0 -z-50 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float animate-delay-1000" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float animate-delay-2000" />
          </div>
          
          {/* 🎨 メインコンテンツ */}
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}