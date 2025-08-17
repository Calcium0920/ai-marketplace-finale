// src/components/layout/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 🎯 ロゴ */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">AI</span>
            </div>
            <span className="text-xl font-black gradient-text">Marketplace</span>
          </Link>

          {/* 🧭 デスクトップナビ */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              商品一覧
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              カテゴリ
            </Link>
            <Link href="/sell" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              出品する
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* 🔘 アクションボタン */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              ログイン
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover-glow">
              無料登録
            </button>
          </div>

          {/* 📱 モバイルメニューボタン */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* 📱 モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link href="/products" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">
                商品一覧
              </Link>
              <Link href="/categories" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">
                カテゴリ
              </Link>
              <Link href="/sell" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">
                出品する
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">
                About
              </Link>
              <div className="border-t border-gray-200 pt-4">
                <Link href="/login" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">
                  ログイン
                </Link>
                <Link href="/register" className="block px-3 py-2 text-blue-600 font-semibold">
                  無料登録
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}