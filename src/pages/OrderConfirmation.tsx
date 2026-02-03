import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface Order {
  id: number;
  items: CartItem[];
  total: number;
  address: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
  };
  paymentMethod: string;
  date: string;
}

export default function OrderConfirmation() {
  const { orderId } = useParams();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder");
    if (savedOrder) {
      const parsed = JSON.parse(savedOrder);
      if (parsed.id.toString() === orderId) {
        setOrder(parsed);
      }
    }
  }, [orderId]);

  if (!order)
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-semibold mb-4">
          No order found for ID #{orderId}
        </h2>
        <Link
          to="/Sarees"
          className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-pink-600">
          🎉 Order Confirmed!
        </h1>
        <p className="text-gray-600 mb-2">
          Thank you for your purchase, <b>{order.address.name}</b>!
        </p>
        <p className="text-gray-600 mb-6">
          Your order <b>#{order.id}</b> has been placed successfully.
        </p>

        <div className="text-left space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
            <p>
              {order.address.address}, {order.address.city},{" "}
              {order.address.postalCode}
            </p>
            <p>Phone: {order.address.phone}</p>
            <p>Email: {order.address.email}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
            <p className="capitalize">
              {order.paymentMethod === "cod"
                ? "Cash on Delivery"
                : "Online Payment"}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Order Summary</h2>
            <div className="space-y-2 text-sm">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>₹{order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center space-x-4">
          <Link
            to="/Sarees"
            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
          >
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
