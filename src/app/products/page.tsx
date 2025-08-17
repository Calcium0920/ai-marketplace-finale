// src/app/products/page.tsx
import Header from '@/components/layout/Header'

// 🎯 サンプル商品データ
const sampleProducts = [
  {
    id: 1,
    title: "高性能ChatBot「AI Assistant Pro」",
    description: "自然言語処理に特化した最先端ChatBot。カスタマーサポートや営業支援に最適。",
    price: 29800,
    category: "ChatBot",
    image: "🤖",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    title: "AI画像生成ツール「ArtMaker」",
    description: "プロ級の画像を瞬時に生成。マーケティング素材やSNS投稿画像に。",
    price: 19800,
    category: "画像生成",
    image: "🎨",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    title: "音声合成「Voice AI Studio」",
    description: "自然で高品質な音声合成。ナレーション、アナウンス制作に。",
    price: 39800,
    category: "音声合成",
    image: "🎙️",
    rating: 4.7,
    reviews: 234
  },
  {
    id: 4,
    title: "自動化スクリプト「TaskBot」",
    description: "業務を自動化するスマートボット。データ処理や定型作業を効率化。",
    price: 24800,
    category: "自動化",
    image: "⚡",
    rating: 4.6,
    reviews: 67
  },
  {
    id: 5,
    title: "AIライティング「TextGenius」",
    description: "高品質な記事やコピーを自動生成。SEO対策済みコンテンツ作成に。",
    price: 15800,
    category: "ライティング",
    image: "✍️",
    rating: 4.8,
    reviews: 198
  },
  {
    id: 6,
    title: "データ分析AI「Analytics Pro」",
    description: "ビッグデータを瞬時に分析。ビジネス洞察とレポート生成を自動化。",
    price: 49800,
    category: "データ分析",
    image: "📊",
    rating: 4.9,
    reviews: 145
  }
]

// 🎯 商品カードコンポーネント
function ProductCard({ product }: { product: typeof sampleProducts[0] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover border border-gray-100">
      {/* 商品画像エリア */}
      <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <span className="text-6xl">{product.image}</span>
      </div>
      
      {/* 商品情報 */}
      <div className="p-6">
        {/* カテゴリバッジ */}
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-3">
          {product.category}
        </div>
        
        {/* タイトル */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>
        
        {/* 説明 */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {product.description}
        </p>
        
        {/* 評価 */}
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 mr-2">
            {'★'.repeat(Math.floor(product.rating))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews}件のレビュー)
          </span>
        </div>
        
        {/* 価格とボタン */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black text-blue-600">
            ¥{product.price.toLocaleString()}
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover-glow">
            詳細を見る
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* 🎯 ヘッダースペーサー */}
      <div className="h-16"></div>
      
      {/* 🎨 ページヘッダー */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            AIツール一覧
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            最先端のAIツールを発見して、あなたのビジネスを次のレベルへ
          </p>
        </div>
      </section>

      {/* 🔍 検索・フィルターエリア */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* 検索バー */}
            <div className="flex-1 max-w-md">
              <input 
                type="text" 
                placeholder="AIツールを検索..." 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* カテゴリフィルター */}
            <div className="flex gap-2 flex-wrap">
              {['すべて', 'ChatBot', '画像生成', '音声合成', '自動化', 'ライティング', 'データ分析'].map((category) => (
                <button 
                  key={category}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🛍️ 商品一覧 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 📄 ページネーション */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">前へ</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">次へ</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}