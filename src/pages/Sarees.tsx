// Updated saree.tsx
import { useState } from "react";
import "../components/FeaturedProducts.css";
// import { motion } from "framer-motion";
import Filter from "../pages/Filter"; // Adjust the import path as needed

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
    name: "Elegant Silk Saree",
    price: 4999,
    originalPrice: 7999,
    discount: 38,
    image:
      "https://images.pexels.com/photos/5341865/pexels-photo-5341865.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Bestseller",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Banarasi Silk Beauty",
    price: 6499,
    originalPrice: 9999,
    discount: 35,
    image:
      "https://images.pexels.com/photos/6593898/pexels-photo-6593898.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "New",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Designer Wedding Saree",
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    image:
      "https://images.pexels.com/photos/6318922/pexels-photo-6318922.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Premium",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Soft Cotton Drape",
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    image:
      "https://images.pexels.com/photos/32515968/pexels-photo-32515968.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Trending",
    rating: 4.7,
  },
];

const Sarees = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleQuickView = (product: Product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <section className="featured-products">
      <div className="container flex gap-6">
        {/* Sidebar Filters */}
        <Filter />

        {/* Product Section */}
        <div className="flex-1">
          <div className="section-header">
            <h2>SAREES</h2>
            <p>Handpicked sarees that define elegance and grace</p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div className="product-tags">
                    <span className={`product-tag ${product.tag.toLowerCase()}`}>
                      {product.tag}
                    </span>
                    {product.discount > 0 && (
                      <span className="product-discount">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                  <button
                    className={`wishlist-btn ${
                      wishlist.includes(product.id) ? "active" : ""
                    }`}
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                  <div className="product-overlay">
                    <button
                      className="quick-view-btn"
                      onClick={() => handleQuickView(product)}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-rating">
                    <span className="star">★</span>
                    <span>{product.rating}</span>
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">
                    <span className="current-price">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="original-price">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all-wrapper">
            <button className="view-all-btn">View All Products</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>
            <div className="modal-body">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="modal-image"
              />
              <div className="modal-details">
                <h2>{selectedProduct.name}</h2>
                <p className="modal-price">
                  ₹{selectedProduct.price.toLocaleString()}{" "}
                  <span className="modal-original-price">
                    ₹{selectedProduct.originalPrice.toLocaleString()}
                  </span>
                  <span className="modal-discount">
                    ({selectedProduct.discount}% OFF)
                  </span>
                </p>
                <button className="add-to-cart-btn modal-cart-btn">
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

export default Sarees;