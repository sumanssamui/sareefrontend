import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import NewArrivals from "./pages/NewArrivals";
import "./App.css";
import DesignerCollection from "./pages/DesignerCollection";
import FestiveCollection from "./pages/FestiveCollection";
import WeddingSpecial from "./pages/WeddingSpecial";
import Sarees from "./pages/Sarees";
import Sale from "./pages/Sale";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Wishlist from "./pages/wishlist";
import ShippingInfo from "./pages/shipping-info";
import ContactUs from "./pages/contact";
import ReturnPolicy from "./pages/return";
import TermsAndConditions from "./pages/terms_conditions";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Categories />
                  <FeaturedProducts />
                </>
              }
            />

            {/* New Arrivals Page */}
            <Route path="/newarrivals" element={<NewArrivals />} />
            <Route
              path="/DesignerCollection"
              element={<DesignerCollection />}
            />
            <Route path="/FestiveCollection" element={<FestiveCollection />} />
            <Route path="/WeddingSpecial" element={<WeddingSpecial />} />
            <Route path="/Sarees" element={<Sarees />} />
            <Route path="/Sale" element={<Sale />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/profile-track" element={<Profile />} />
            <Route path="/help" element={<Help />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/shipping" element={<ShippingInfo />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
