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
  {
    id: 5,
    name: "Royal Kanjivaram",
    price: 7999,
    originalPrice: 11999,
    discount: 33,
    image:
      "https://images.pexels.com/photos/18089329/pexels-photo-18089329.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Bestseller",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Festive Gold Saree",
    price: 5499,
    originalPrice: 8499,
    discount: 35,
    image:
      "https://images.pexels.com/photos/9226778/pexels-photo-9226778.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "New",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Classic Handloom",
    price: 3499,
    originalPrice: 5999,
    discount: 42,
    image:
      "https://images.pexels.com/photos/7123306/pexels-photo-7123306.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Sale",
    rating: 4.6,
  },
  {
    id: 8,
    name: "Party Wear Georgette",
    price: 3999,
    originalPrice: 6499,
    discount: 38,
    image:
      "https://images.pexels.com/photos/14950358/pexels-photo-14950358.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Trending",
    rating: 4.7,
  },
];

const DesignerCollection = () => {
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
        {/* Sidebar Filter */}
        <Filter />

        {/* Product Section */}
        <div className="flex-1">
          <div className="section-header">
            <h2>DESIGNER COLLECTION</h2>
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

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
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
                <div className="modal-rating">
                  <span>★ {selectedProduct.rating}</span>
                </div>
                <p className="modal-price">
                  ₹{selectedProduct.price.toLocaleString()}{" "}
                  <span className="modal-original-price">
                    ₹{selectedProduct.originalPrice.toLocaleString()}
                  </span>
                  <span className="modal-discount">
                    ({selectedProduct.discount}% OFF)
                  </span>
                </p>
                <p className="modal-desc">
                  Discover timeless elegance in our {selectedProduct.name},
                  designed for the modern woman who values grace, detail, and
                  luxury. Perfect for festive occasions and weddings.
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

export default DesignerCollection;