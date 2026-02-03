import { useState } from "react";
import "../components/FeaturedProducts.css";
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
}

const products: Product[] = [
  {
    id: 1,
    name: "Royal Red Bridal Saree",
    price: 9999,
    originalPrice: 14999,
    discount: 33,
    image:
      "https://images.pexels.com/photos/6318922/pexels-photo-6318922.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Premium",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Banarasi Silk Beauty",
    price: 6499,
    originalPrice: 9999,
    discount: 35,
    image:
      "https://images.pexels.com/photos/6593898/pexels-photo-6593898.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Bestseller",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Golden Embroidered Lehenga",
    price: 12999,
    originalPrice: 18999,
    discount: 32,
    image:
      "https://images.pexels.com/photos/18089329/pexels-photo-18089329.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Exclusive",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Regal Kanjivaram Silk",
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    image:
      "https://images.pexels.com/photos/5341865/pexels-photo-5341865.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Classic",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Handcrafted Zari Saree",
    price: 7499,
    originalPrice: 10999,
    discount: 32,
    image:
      "https://images.pexels.com/photos/9226778/pexels-photo-9226778.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "New",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Pearl White Reception Saree",
    price: 6799,
    originalPrice: 9999,
    discount: 32,
    image:
      "https://images.pexels.com/photos/14950358/pexels-photo-14950358.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Trending",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Traditional Handloom Drape",
    price: 4499,
    originalPrice: 6999,
    discount: 36,
    image:
      "https://images.pexels.com/photos/7123306/pexels-photo-7123306.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Elegant",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Vibrant Party Saree",
    price: 3999,
    originalPrice: 6499,
    discount: 38,
    image:
      "https://images.pexels.com/photos/32515968/pexels-photo-32515968.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Popular",
    rating: 4.7,
  },
];

const WeddingSpecial = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => setSelectedProduct(null);

  return (
    <section className="featured-products py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sidebar Filter - Hidden on small screens, visible on lg+ */}
        <Filter />

        {/* Main Product Section */}
        <div className="flex-1 w-full">
          <div className="section-header text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              WEDDING SPECIAL
            </h2>
            <p className="mt-3 text-base md:text-lg text-gray-600">
              Timeless sarees and lehengas crafted for your grand day
            </p>
          </div>

          {/* Responsive Product Grid */}
          <div className="products-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper relative overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="product-tags absolute top-2 left-2 flex flex-col gap-2">
                    <span
                      className={`product-tag ${product.tag.toLowerCase()} px-3 py-1 text-xs font-medium rounded-full text-white`}
                    >
                      {product.tag}
                    </span>
                    {product.discount > 0 && (
                      <span className="product-discount bg-red-600 px-3 py-1 text-xs font-bold rounded-full text-white">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                  <button
                    className={`wishlist-btn absolute top-2 right-2 ${
                      wishlist.includes(product.id) ? "active" : ""
                    }`}
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Add to wishlist"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                  <div className="product-overlay absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center">
                    <button
                      className="quick-view-btn opacity-0 hover:opacity-100 translate-y-4 hover:translate-y-0 transition-all bg-white text-black px-6 py-3 font-medium rounded-md"
                      onClick={() => handleQuickView(product)}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="product-info mt-4 text-center">
                  <div className="product-rating flex items-center justify-center gap-1 text-sm">
                    <span className="star text-yellow-500">★</span>
                    <span>{product.rating}</span>
                  </div>
                  <h3 className="product-name mt-2 text-base font-medium line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="product-price mt-2 flex items-center justify-center gap-2">
                    <span className="current-price text-lg font-bold">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="original-price text-sm line-through text-gray-500">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <button className="add-to-cart-btn mt-4 w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all-wrapper text-center mt-12">
            <button className="view-all-btn inline-block px-8 py-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition">
              View All Products
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div
          className="modal-overlay fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="modal-content bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn absolute top-4 right-4 text-3xl z-10"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="modal-body grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="modal-image w-full h-full object-cover rounded-lg"
              />
              <div className="modal-details flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {selectedProduct.name}
                </h2>
                <div className="modal-rating mt-3 flex items-center gap-2 text-lg">
                  <span className="text-yellow-500">★</span>
                  <span>{selectedProduct.rating}</span>
                </div>
                <p className="modal-price mt-4 text-2xl font-bold">
                  ₹{selectedProduct.price.toLocaleString()}{" "}
                  <span className="modal-original-price text-lg line-through text-gray-500 ml-2">
                    ₹{selectedProduct.originalPrice.toLocaleString()}
                  </span>
                  <span className="modal-discount text-red-600 ml-3">
                    ({selectedProduct.discount}% OFF)
                  </span>
                </p>
                <p className="modal-desc mt-6 text-gray-700 leading-relaxed">
                  Step into your wedding day with unmatched elegance. Our{" "}
                  {selectedProduct.name} is designed with rich fabrics,
                  intricate detailing, and the perfect bridal glow. Ideal for
                  your big day or any grand celebration.
                </p>
                <button className="add-to-cart-btn modal-cart-btn mt-8 bg-black text-white py-4 rounded-md font-medium hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WeddingSpecial;