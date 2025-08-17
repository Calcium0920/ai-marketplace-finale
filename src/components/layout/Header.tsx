// src/components/layout/Header.tsx
'use client'

import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { data: session, status } = useSession()

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

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

          {/* 🔘 認証エリア */}
          <div className="hidden md:flex items-center space-x-4">
            {status === 'loading' ? (
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            ) : session ? (
              // ログイン済み
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors"
                >
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt="Profile"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {session.user.name?.charAt(0) || session.user.email?.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {session.user.name || session.user.email}
                  </span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* ユーザーメニュー */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      📊 ダッシュボード
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      👤 プロフィール
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      🛒 注文履歴
                    </Link>
                    <Link
                      href="/sell"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      💼 出品管理
                    </Link>
                    <hr className="my-1" />
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      🚪 ログアウト
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // 未ログイン
              <>
                <Link
                  href="/auth/login"
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  ログイン
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover-glow"
                >
                  無料登録
                </Link>
              </>
            )}
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
              
              {/* モバイル認証エリア */}
              <div className="border-t border-gray-200 pt-4">
                {session ? (
                  <>
                    <div className="px-3 py-2 flex items-center space-x-3">
                      {session.user.image ? (
                        <Image
                          src={session.user.image}
                          alt="Profile"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {session.user.name?.charAt(0) || session.user.email?.charAt(0)}
                          </span>
                        </div>
                      )}
                      <span className="text-sm font-medium text-gray-700">
                        {session.user.name || session.user.email}
                      </span>
                    </div>
                    <Link href="/dashboard" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">
                      📊 ダッシュボード
                    </Link>
                    <Link href="/profile" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">
                      👤 プロフィール
                    </Link>
                    <Link href="/orders" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">
                      🛒 注文履歴
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-3 py-2 text-red-600 hover:text-red-700 font-medium"
                    >
                      🚪 ログアウト
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/auth/login" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">
                      ログイン
                    </Link>
                    <Link href="/auth/register" className="block px-3 py-2 text-blue-600 font-semibold">
                      無料登録
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}