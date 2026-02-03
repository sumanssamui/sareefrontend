import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Address {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

interface Order {
  id: number;
  total: number;
  date: string;
  paymentMethod: string;
  items: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
}

export default function Profile() {
  const [profile, setProfile] = useState<Address>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [orders, setOrders] = useState<Order[]>([]);

  // Load saved user & order data
  useEffect(() => {
    const savedUser = localStorage.getItem("userProfile");
    if (savedUser) setProfile(JSON.parse(savedUser));

    const lastOrder = localStorage.getItem("lastOrder");
    if (lastOrder) setOrders([JSON.parse(lastOrder)]);

    const allOrders = localStorage.getItem("allOrders");
    if (allOrders) setOrders(JSON.parse(allOrders));
  }, []);

  // Save user data automatically
  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
  }, [profile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-pink-600">My Account</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Profile Information */}
        <div className="bg-white p-6 shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="space-y-3">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border rounded-lg px-4 py-2"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                name="postalCode"
                value={profile.postalCode}
                onChange={handleChange}
                placeholder="Postal Code"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Your details are saved automatically.
          </p>
        </div>

        {/* Order History */}
        <div className="bg-white p-6 shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-4">My Orders</h2>

          {orders.length === 0 ? (
            <p className="text-gray-500">You haven't placed any orders yet.</p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border rounded-lg p-4 hover:shadow transition"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">
                      Order #{order.id}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {new Date(order.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Payment:{" "}
                    <span className="capitalize">{order.paymentMethod}</span>
                  </p>
                  <p className="text-gray-700 font-semibold">
                    Total: ₹{order.total.toFixed(2)}
                  </p>

                  <Link
                    to={`/order-confirmation/${order.id}`}
                    className="text-pink-600 hover:underline text-sm mt-2 inline-block"
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
