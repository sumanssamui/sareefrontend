import { Heart, ShoppingBag, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  tag?: string;
  rating: number;
}

const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Elegant Coffee Brown Kanjivaram Silk Bridal Saree with Zari Checks",
    price: 58999,
    originalPrice: 74999,
    discount: 21,
    image: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1154086846917086",
    tag: "Bridal Favorite",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Luxurious Golden Brown Banarasi Tissue Silk Saree",
    price: 67999,
    originalPrice: 84999,
    discount: 20,
    image: "https://priyankaraajiv.com/cdn/shop/articles/Wedding_Banarasi_Saree_Guide__How_to_Choose_a_Wedding_Banarasi_Saree_1200x.png?v=1708330173",
    tag: "Wedding Essential",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Rich Chocolate Brown Kanchipuram Silk Saree with Gold Zari",
    price: 72999,
    image: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1560386757397064",
    tag: "Premium",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Sophisticated Beige Golden Banarasi Bridal Saree",
    price: 49999,
    originalPrice: 62999,
    discount: 21,
    image: "https://diademstore.com/cdn/shop/articles/jun_30_fgr.jpg?v=1758702839",
    tag: "Modern Bride",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Timeless Coffee Brown Pure Silk Kanjivaram with Intricate Border",
    price: 64999,
    originalPrice: 81999,
    discount: 21,
    image: "https://singaara.com/cdn/shop/products/s-l1600_147cb07a-0f4e-41ca-957d-b72d7dfba320.jpg?v=1649646163&width=3840",
    tag: "Wedding Special",
    rating: 5.0,
  },
  {
    id: 6,
    name: "Opulent Golden Tissue Banarasi Saree with Kanchi Border",
    price: 55999,
    image: "https://i.etsystatic.com/45210373/r/il/1d7fc1/7176455355/il_fullxfull.7176455355_corq.jpg",
    tag: "Timeless Elegance",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Deep Brown Silk Saree with Heavy Gold Zari Work",
    price: 61999,
    originalPrice: 78999,
    discount: 22,
    image: "https://kantisarees.com/wp-content/uploads/2024/08/kanchipuram-silk-saree19-10.jpeg",
    tag: "Bestseller",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Graceful Golden Brown Soft Tissue Banarasi Saree",
    price: 52999,
    originalPrice: 67999,
    discount: 22,
    image: "https://i.etsystatic.com/61189164/r/il/4fbbbe/7307830851/il_fullxfull.7307830851_1331.jpg",
    tag: "Trending",
    rating: 4.7,
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-12">
      {/* Hero Header - Brown & Gold Theme */}
      <div className="bg-gradient-to-b from-amber-500 to-amber-500 py-16 border-b border-amber-300">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold text-amber-900 mb-3 tracking-wider font-serif">
            Loreal India
          </h1>
          <p className="text-2xl text-amber-700 mb-6 font-medium">Warmth & Grace in Every Fold</p>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Exquisite Brown Wedding Saree Collection</h2>
          <p className="text-xl text-gray-700">Sophisticated coffee, chocolate & golden brown silk sarees – perfect for the modern bride seeking subtle luxury</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-amber-600/50 group"
            >
              {/* Image & Tags */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Tags */}
                <div className="absolute top-4 left-4 space-y-2">
                  {product.tag && (
                    <span className="bg-amber-900/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.tag}
                    </span>
                  )}
                  {product.discount && product.discount > 0 && (
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                {/* Wishlist Heart */}
                <button className="absolute top-4 right-4 bg-white/95 hover:bg-white p-3 rounded-full shadow-lg transition hover:scale-110">
                  <Heart className="w-6 h-6 text-amber-800" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6 text-center bg-gradient-to-b from-white to-amber-50">
                {/* Rating */}
                <div className="flex items-center justify-center mb-3">
                  <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
                  <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                </div>
                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 leading-relaxed">
                  {product.name}
                </h3>
                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl font-bold text-amber-900 block">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <button className="w-full bg-amber-900 hover:bg-amber-800 text-white font-semibold py-3 rounded-xl transition shadow-lg flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className="w-full border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center py-12 bg-amber-50 border-t border-amber-200">
        <button className="bg-amber-900 hover:bg-amber-800 text-white font-semibold px-8 py-4 rounded-xl transition shadow-lg text-lg">
          Explore Full Brown Collection
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;