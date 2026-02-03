// NewArrivals.tsx (Full File)
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, X } from "lucide-react";
import Filter from "../pages/Filter";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  tag: string;
  rating: number;
  description?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Beautiful Green Woven Smooth Satin Silk Banarasi Saree",
    price: 7499,
    originalPrice: 14998,
    discount: 50,
    image: "https://www.twamev.com/dw/image/v2/BJZV_PRD/on/demandware.static/-/Library-Sites-TwamevSharedLibrary/default/dw6c71db2c/Twamev%20Images%20October/54820/Twamev%20Apparel%20-%20Blouse%20Colour%20Ideas%20for%20Green%20Sarees%20Traditional%20to%20Trendy_Blog%201.jpg",
    tag: "New",
    rating: 4.9,
    description: "This soft Banarasi Saree is smooth with engraved designs to enhance the overall appeal of the saree. Rich incredible details...",
  },
  {
    id: 2,
    name: "Elegant Emerald Green Banarasi Silk Saree",
    price: 8999,
    originalPrice: 17999,
    discount: 50,
    image: "https://www.royalexport.in/product-img/luxury-soft-banarasi-silk-sare1-1759573543.jpg",
    tag: "Hot",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Royal Green Gold Banarasi Saree",
    price: 10999,
    originalPrice: 19999,
    discount: 45,
    image: "https://www.taneira.com/on/demandware.static/-/Sites-Taneira-Library/default/dwabcf8b85/images/blog/10-stunning-banarasi-sarees/Blog_03.jpg",
    tag: "Premium",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Classic Red Bridal Banarasi Saree",
    price: 12999,
    originalPrice: 24999,
    discount: 48,
    image: "http://www.mohifashion.com/cdn/shop/articles/Nayantara_1_c59b9f07-3b64-4bd8-b8da-f3d83499ba51.webp?v=1737114268",
    tag: "Bestseller",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Timeless Red Wedding Silk Saree",
    price: 9499,
    originalPrice: 18999,
    discount: 50,
    image: "https://cdn.shopify.com/s/files/1/1027/2035/files/WhatsApp_Image_2025-12-03_at_11.59.00_AM.jpg?v=1764743417",
    tag: "New",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Luxury Red Bridal Kanjivaram Saree",
    price: 11999,
    originalPrice: 22999,
    discount: 48,
    image: "https://anuki.in/cdn/shop/articles/horoscope_77_1024x.webp?v=1740506870",
    tag: "Trending",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Soft Pink Designer Party Wear Saree",
    price: 6999,
    originalPrice: 13999,
    discount: 50,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/1/378223617/UX/BE/GU/109857194/fancy-designer-saree-500x500.jpg",
    tag: "Hot",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Peach Pink Embroidered Festive Saree",
    price: 7999,
    originalPrice: 15999,
    discount: 50,
    image: "https://www.pure-elegance.com/cdn/shop/products/acc30fe6-cebe-4d42-b6f2-62512456e754.jpg?v=1641072921",
    tag: "Trending",
    rating: 4.8,
  },
];

const NewArrivals = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const toggleWishlist = (productId: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleQuickView = (product: Product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <section className="featured-products py-8">
      <div className="container flex gap-6 max-w-7xl mx-auto px-4">
        <Filter />

        <div className="flex-1">
          <div className="section-header mb-8">
            <h2 className="text-3xl font-bold">NEW ARRIVALS</h2>
            <p className="text-gray-600 mt-2">Discover the latest additions to our exquisite collection</p>
          </div>

          <div className="products-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="product-card group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <div className="product-image-wrapper relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded-full">
                      {product.tag}
                    </span>
                    <span className="px-3 py-1 text-xs font-bold text-white bg-orange-600 rounded-full">
                      -{product.discount}%
                    </span>
                  </div>

                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition"
                  >
                    <Heart
                      className={`w-5 h-5 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-700"}`}
                    />
                  </button>

                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <button
                      onClick={() => handleQuickView(product)}
                      className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition"
                    >
                      Quick View
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <span className="text-yellow-500">★</span>
                    <span>{product.rating}</span>
                  </div>
                  <h3 className="font-medium text-gray-800 line-clamp-2 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                  </div>
                  <button className="w-full py-2 bg-[#2C1810] text-white rounded-lg font-medium hover:bg-[#3d2418] transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fully Responsive Quick View Modal */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 top-30 z-50 flex items-center justify-center bg-black/60 px-4 py-8 overflow-y-auto"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl mx-auto overflow-hidden flex flex-col lg:flex-row max-h-full"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-square lg:aspect-auto lg:h-full">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 overflow-y-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
                {selectedProduct.name}
              </h2>

              {/* Pricing */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-1">
                  Regular price{" "}
                  <span className="line-through">MRP ₹{selectedProduct.originalPrice.toLocaleString()}</span>
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-3xl md:text-4xl font-bold text-[#2C1810]">
                    Sale price ₹{selectedProduct.price.toLocaleString()}
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-green-600">
                    {selectedProduct.discount}% OFF
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-3">Price inclusive of all taxes</p>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-8 leading-relaxed text-base">
                {selectedProduct.description ||
                  "This soft Banarasi Saree is smooth with engraved designs to enhance the overall appeal of the saree. Rich incredible details..."}
              </p>

              {/* Variant */}
              <div className="mb-8">
                <div className="p-5 bg-gray-50 rounded-xl text-center">
                  
                  <span className="text-lg font-semibold">
                    Default Title - ₹{selectedProduct.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Offers */}
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-5 p-5 bg-orange-50 border border-orange-200 rounded-xl">
                  <div className="text-3xl">🎉</div>
                  <div>
                    <p className="font-bold text-lg">Instant ₹500 OFF</p>
                    <p className="text-sm text-gray-600">On every product • Use Code: <strong>FESTIVE500</strong></p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 bg-green-50 border border-green-200 rounded-xl">
                  <div className="text-3xl">🎁</div>
                  <div>
                    <p className="font-bold text-lg">Get a Free Saree</p>
                    <p className="text-sm text-gray-600">On orders above ₹10,000 • Auto Applied in Cart</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-5 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="text-3xl">💳</div>
                  <div>
                    <p className="font-bold text-lg">Extra 10% OFF</p>
                    <p className="text-sm text-gray-600">On prepaid orders • Auto Applied at Checkout</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                <div className="p-5 bg-gray-50 rounded-xl text-center">
                  <p className="font-semibold text-base">Free Shipping Across India</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-xl text-center">
                  <p className="font-semibold text-base">Secure Payment Options</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-xl text-center">
                  <p className="font-semibold text-base">Trusted by 2 Lakh customers</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-xl text-center">
                  <p className="font-semibold text-base">Easy Returns/Exchanges</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex-1 py-4 bg-[#2C1810] text-white font-bold rounded-lg hover:bg-[#3d2418] transition text-lg">
                  Add to Cart
                </button>
                <button className="px-8 py-4 border-2 border-[#2C1810] text-[#2C1810] font-bold rounded-lg hover:bg-[#2C1810] hover:text-white transition text-lg">
                  Buy Now
                </button>
              </div>

              {/* Links */}
              <div className="pt-6 border-t text-center space-y-3 text-gray-600">
                <a href="#" className="block hover:text-[#2C1810] font-medium">Description</a>
                <a href="#" className="block hover:text-[#2C1810] font-medium">Shipping & Return Policy</a>
                <a href="#" className="block font-bold text-[#2C1810]">100% Authenticity Guaranteed</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default NewArrivals;