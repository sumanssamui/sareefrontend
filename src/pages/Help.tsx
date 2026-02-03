import { useState } from "react";

export default function Help() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields.");
      return;
    }

    // Simulate sending support request
    console.log("Help form submitted:", form);
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-pink-600 text-center">Help & Support</h1>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold">How can I track my order?</h3>
            <p className="text-gray-600 mt-1">
              You can track your order in the <b>Profile → My Orders</b> section after logging in.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold">What is your return policy?</h3>
            <p className="text-gray-600 mt-1">
              Returns are accepted within 7 days of delivery. Items must be unused and in original packaging.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold">Do you offer Cash on Delivery?</h3>
            <p className="text-gray-600 mt-1">
              Yes, we offer Cash on Delivery (COD) for most locations across India.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-semibold">How can I contact customer care?</h3>
            <p className="text-gray-600 mt-1">
              You can use the form below or email us at{" "}
              <a href="mailto:support@saree.com" className="text-pink-600 underline">
                support@saree.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
            🎉 Thank you! Your message has been sent. Our team will contact you soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-lg p-6 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />
            <textarea
              name="message"
              placeholder="How can we help you?"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 h-32 resize-none"
            />
            <button
              type="submit"
              className="bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition"
            >
              Submit Request
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
