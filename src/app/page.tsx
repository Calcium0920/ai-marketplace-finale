// src/app/page.tsx - プロ級美しいデザイン
import Header from '@/components/layout/Header'

export default function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      
      {/* 🎯 ヒーローセクション - 完全中央配置 */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden force-center">
        {/* 🌟 背景装飾 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* 📦 メインコンテンツ - 強制完全中央 */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center force-center">
          {/* ✨ メインタイトル */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 gradient-text leading-tight text-center w-full text-force-center">
            AI Marketplace
          </h1>
          
          {/* 📝 サブタイトル */}
          <p className="text-xl md:text-3xl lg:text-4xl text-gray-600 mb-8 font-light leading-relaxed text-center w-full max-w-5xl text-force-center" style={{textAlign: 'center', margin: '0 auto'}}>
            次世代AIツールの革新的売買プラットフォーム
          </p>
          
          {/* 🔸 説明文 */}
          <p className="text-lg md:text-xl text-gray-500 mb-12 leading-relaxed font-medium text-center w-full max-w-4xl px-4 text-force-center" style={{textAlign: 'center', margin: '0 auto 3rem auto'}}>
            ChatBot、AI画像生成、音声合成、自動化スクリプト - あらゆるAIツールが簡単に売買できる、まったく新しいマーケットプレイス体験
          </p>
          
          {/* 🔘 アクションボタン - 強制中央配置 */}
          <div className="w-full flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-xl hover-glow shadow-2xl transform hover:scale-105 transition-all duration-300">
              🚀 今すぐ始める
            </button>
            <button className="px-12 py-5 border-3 border-blue-600 text-blue-600 rounded-2xl font-bold text-xl hover:bg-blue-600 hover:text-white transition-all duration-300 bg-white shadow-lg">
              📖 詳細を見る
            </button>
          </div>
          
          {/* 📊 統計情報 - 強制中央配置 */}
          <div className="w-full flex justify-center mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">AIツール</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-indigo-600 mb-2">50k+</div>
                <div className="text-gray-600 font-medium">ユーザー</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-purple-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">満足度</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎨 特徴セクション - 完全中央配置 */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          {/* セクションタイトル */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              なぜ選ばれるのか？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AI Marketplaceが業界をリードする3つの理由
            </p>
          </div>
          
          {/* 特徴カード - 完全中央グリッド */}
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center p-10 rounded-3xl bg-white shadow-2xl card-hover border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-8 pulse-glow">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="text-2xl font-black mb-6 text-gray-900">豊富なAIツール</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                最新のChatBot、高品質画像生成、音声合成まで。1000以上の厳選されたAIツールが揃っています。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-10 rounded-3xl bg-white shadow-2xl card-hover border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 pulse-glow">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-black mb-6 text-gray-900">瞬間売買</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                革新的なワンクリック売買システム。面倒な手続きは一切なし、今すぐAIツールの取引を始められます。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-10 rounded-3xl bg-white shadow-2xl card-hover border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 pulse-glow">
                <span className="text-4xl">🔒</span>
              </div>
              <h3 className="text-2xl font-black mb-6 text-gray-900">銀行級セキュリティ</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Stripe決済と独自暗号化技術で、あなたの取引を完全保護。安心・安全な決済環境を提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 CTA セクション - 完全中央配置 */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
        <div className="absolute inset-0 wave-bg opacity-20"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight">
            AI革命に参加しよう
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            無料でアカウントを作成して、あなたのAI体験を今すぐ始めましょう
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xl hover:scale-105 transition-all duration-300 shadow-2xl">
              🚀 無料で始める
            </button>
            <button className="px-12 py-6 border-3 border-white text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
              📞 お問い合わせ
            </button>
          </div>
          
          <p className="text-blue-200 mt-8 text-sm">
            クレジットカード不要 • 無料トライアル • いつでもキャンセル可能
          </p>
        </div>
      </section>
    </div>
  )
}