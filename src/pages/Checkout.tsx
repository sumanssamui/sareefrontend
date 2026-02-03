import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface Address {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

export default function Checkout() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [address, setAddress] = useState<Address>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !address.name ||
      !address.email ||
      !address.phone ||
      !address.address ||
      !address.city ||
      !address.postalCode
    ) {
      alert("Please fill all address fields.");
      return;
    }

    // Simulate placing order
    const order = {
      id: Math.floor(Math.random() * 100000),
      items: cartItems,
      address,
      paymentMethod,
      total,
      date: new Date().toISOString(),
    };

    localStorage.removeItem("cart");
    localStorage.setItem("lastOrder", JSON.stringify(order));

    navigate(`/order-confirmation/${order.id}`);
  };

  if (cartItems.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link
          to="/Sarees"
          className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Address Form */}
        <form
          onSubmit={handlePlaceOrder}
          className="bg-white shadow rounded-lg p-6 space-y-4"
        >
          <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={address.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={address.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={address.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={address.address}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={address.postalCode}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-lg font-semibold mt-4 mb-2">Payment Method</h3>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                  className="mr-2"
                />
                Online Payment (Coming soon)
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white shadow rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-2 mb-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-sm"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
