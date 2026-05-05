import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { X } from "lucide-react";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <header className="header">
      {/* --- Top Bar --- */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <p>
              Free Shipping on Orders Above ₹999 | Easy Returns | COD Available
            </p>
            <div className="header-top-links">
              <a href="/profile-track">Track Order</a>
              <span>|</span>
              <a href="/help">Help</a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Header --- */}
      <div className="header-main">
        <div className="container">
          <div className="header-main-content">
            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="logo">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Saree Elegance Logo"
                  className=" w-30 object-contain "
                />
              </Link>
            </div>

            {/* Navigation Menu */}
            <nav className={`nav relative ${mobileMenuOpen ? "nav-open" : ""}`}>
              <X
                className="close-icon right-2 top-2 md:hidden absolute"
                onClick={toggleMobileMenu}
                size={30}
              />
              <NavLink
                to="/newarrivals"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                New Arrivals
              </NavLink>

              <NavLink
                to="/sarees"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                Sarees
              </NavLink>

              <NavLink
                to="/designercollection"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                Designer Collection
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                Services
              </NavLink>

              <NavLink
                to="/festivecollection"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                Festive Wear
              </NavLink>

              <NavLink
                to="/weddingspecial"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                Wedding Special
              </NavLink>

              <NavLink
                to="/sale"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link sale" : "nav-link sale"}`
                }
              >
                Sale
              </NavLink>
            </nav>

            {/* Header Actions */}
            <div className="header-actions">
              {/* Search */}
              <button
                className="icon-btn"
                onClick={toggleSearch}
                aria-label="Search"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>

              {/* Wishlist */}
              <a href="/wishlist" className="icon-btn" aria-label="Wishlist">
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
              </a>

              {/* Account */}
              <a href="/Login" className="icon-btn" aria-label="Account">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </a>

              {/* Cart */}
              <a href="/cart" className="icon-btn cart-btn" aria-label="Cart">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className="cart-count">0</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Search Overlay --- */}
      {searchOpen && (
        <div className="search-overlay">
          <div className="container">
            <div className="search-box">
              <input
                type="search"
                placeholder="Search for sarees, collections, occasions..."
                autoFocus
              />
              <button
                onClick={toggleSearch}
                className="search-close"
                aria-label="Close search"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="search-suggestions">
              <p>Popular Searches:</p>
              <div className="suggestion-tags">
                <span>Silk Sarees</span>
                <span>Wedding Sarees</span>
                <span>Designer Sarees</span>
                <span>Banarasi</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
