
export default function ShippingInfo() {
  return (
    <div className="min-h-screen bg-[#faf7f2] py-12 px-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-800 mb-3">
          Shipping Information
        </h1>
        <p className="text-gray-600">
          Learn more about our delivery process, timelines, and international
          shipping policies.
        </p>
      </div>

      {/* Domestic Shipping */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Domestic Shipping (India)
        </h2>
        <p className="text-gray-600 mb-4">
          We offer reliable and fast delivery across India through our trusted
          courier partners.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>Free standard shipping for all prepaid orders.</li>
          <li>
            Standard delivery time is <b>5–7 business days</b> (metro cities may
            be faster).
          </li>
          <li>
            COD (Cash on Delivery) orders may take <b>1–2 extra days</b> for
            processing.
          </li>
          <li>Tracking details are shared via email and SMS after dispatch.</li>
        </ul>
      </div>

      {/* International Shipping */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          International Shipping
        </h2>
        <p className="text-gray-600 mb-4">
          We proudly ship worldwide so you can enjoy Indian elegance wherever
          you are.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>
            International delivery time: <b>10–15 business days</b> (subject to
            customs clearance).
          </li>
          <li>
            Shipping charges are calculated at checkout based on weight and
            destination.
          </li>
          <li>
            Customs duties and import taxes (if any) are the buyer’s
            responsibility.
          </li>
          <li>
            Orders are shipped via DHL, FedEx, or other premium global couriers.
          </li>
        </ul>
      </div>

      {/* Order Tracking */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Order Tracking
        </h2>
        <p className="text-gray-600 mb-4">
          Once your order is shipped, you’ll receive a tracking link via email
          and SMS. You can also track it anytime using your order ID.
        </p>

        <div className="bg-[#faf7f2] border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <input
            type="text"
            placeholder="Enter your order ID"
            className="w-full sm:w-auto flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
          <button className="bg-yellow-600 text-white px-5 py-2 rounded-xl hover:bg-yellow-700 transition">
            Track Order
          </button>
        </div>
      </div>

      {/* Returns & Exchanges */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 text-gray-700">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Returns & Exchanges
        </h2>
        <p className="text-gray-600 mb-6">
          We want you to love your purchase! In case you need to return or
          exchange an item:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-600">
          <li>
            Returns are accepted within <b>7 days of delivery</b> for unused and
            unwashed items.
          </li>
          <li>
            Customized or altered products are <b>not eligible</b> for return.
          </li>
          <li>Refunds will be issued as store credit or original payment.</li>
          <li>Pickup for returns is available in most pin codes.</li>
        </ul>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto text-center text-gray-600 mt-10">
        <p>
          For further assistance, contact our support team at{" "}
          <a
            href="mailto:support@ethnicthreads.in"
            className="text-yellow-700 underline hover:text-yellow-800"
          >
            support@ethnicthreads.in
          </a>
        </p>
      </div>
    </div>
  );
}
