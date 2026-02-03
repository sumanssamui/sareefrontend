import { useState } from "react";
import { Mail, Phone, Clock, ChevronDown, ChevronUp, Send } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the fabric quality of your sarees?",
    answer: "We source only premium pure silk (Banarasi, Kanjivaram, Paithani) and handwoven fabrics directly from master weavers across India. Every saree comes with authenticity details and care instructions.",
  },
  {
    question: "Do you offer customization or blouse stitching?",
    answer: "Yes! We provide custom blouse stitching (with measurements) and minor alterations. Select the option at checkout or contact us with your requirements.",
  },
  {
    question: "What is your shipping and delivery timeline?",
    answer: "Free shipping across India. Standard delivery: 5-7 business days. Express option: 2-3 days. International shipping available to select countries.",
  },
  {
    question: "What is the return/exchange policy?",
    answer: "Easy 15-day return or exchange policy. Sarees must be unworn with original tags. We offer free return pickup in India.",
  },
  {
    question: "How do I care for my silk saree?",
    answer: "Dry clean only for the first few washes. Store in a muslin cloth, away from direct sunlight. Avoid spraying perfume directly on the saree.",
  },
  {
    question: "Do you have physical stores?",
    answer: "Currently we are an online-only boutique for the finest curated collection. We plan to open flagship stores in major cities soon.",
  },
];

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent. We'll respond within 24 hours.");
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscribed successfully! Welcome to the Saree Elegance family.");
    setNewsletterEmail("");
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col"> {/* Cream background for warmth */}
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-amber-100 to-amber-50 py-16 border-b border-amber-200">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-[#8b4513] tracking-wider">
                SAREE ELEGANCE
              </h1>
              <p className="text-xl text-[#d4af37] mt-2 font-medium">Timeless Beauty</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
              We're here to help you find the perfect saree for every occasion.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-amber-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-5 py-4 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-[#8b4513] transition"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-5 py-4 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-[#8b4513] transition"
                />
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we assist you today?"
                  className="w-full px-5 py-4 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-[#8b4513] transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#8b4513] hover:bg-[#6b3a0d] text-white font-semibold py-4 rounded-lg transition flex items-center justify-center gap-2 shadow-md"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info + Newsletter */}
            <div className="space-y-12">
              {/* Contact Details */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#8b4513] mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-700">support@sareeelegance.com</p>
                      <p className="text-gray-700">orders@sareeelegance.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#8b4513] mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-700">+91 1800-123-4567</p>
                      <p className="text-gray-700">WhatsApp: +91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#8b4513] mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Working Hours</p>
                      <p className="text-gray-700">Mon-Sat: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-amber-100 rounded-2xl p-8 border border-amber-200">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Newsletter</h4>
                <p className="text-gray-700 mb-6">
                  Subscribe to receive updates, access to exclusive deals, and more.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b4513]"
                  />
                  <button
                    type="submit"
                    className="bg-[#8b4513] hover:bg-[#6b3a0d] text-white font-medium px-6 py-3 rounded-lg transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex gap-5">
                  <a href="#facebook" aria-label="Facebook" className="text-[#8b4513] hover:text-[#6b3a0d] transition">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#instagram" aria-label="Instagram" className="text-[#8b4513] hover:text-[#6b3a0d] transition">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#pinterest" aria-label="Pinterest" className="text-[#8b4513] hover:text-[#6b3a0d] transition">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#youtube" aria-label="YouTube" className="text-[#8b4513] hover:text-[#6b3a0d] transition">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-amber-200 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-amber-50 transition"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-[#8b4513]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#8b4513]" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#6b3a0d] text-white mt-auto"> {/* Darker brown footer */}
        <div className="border-t border-amber-900 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
              <p>&copy; 2025 Saree Elegance. All rights reserved.</p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#privacy" className="hover:text-[#d4af37] transition">Privacy Policy</a>
                <span className="text-amber-800">|</span>
                <a href="#terms" className="hover:text-[#d4af37] transition">Terms of Service</a>
                <span className="text-amber-800">|</span>
                <a href="#cookies" className="hover:text-[#d4af37] transition">Cookie Policy</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm">We Accept:</span>
                <div className="flex gap-3 text-2xl">
                  <span>💳</span>
                  <span>💰</span>
                  <span>📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}