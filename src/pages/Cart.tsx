import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const demoCollection: CartItem[] = [
  {
    id: 1,
    name: "Royal Red & Gold Banarasi Silk Saree",
    price: 21999,
    image: "https://weaverstory.com/cdn/shop/articles/WS44665.jpg?v=1743746137&width=3000",
    quantity: 1,
  },
  {
    id: 2,
    name: "Deep Navy Blue Kanjivaram Silk Saree",
    price: 27999,
    image: "https://www.parisera.com/cdn/shop/files/20250523_183816.jpg?v=1748363630&width=1946",
    quantity: 1,
  },
  {
    id: 3,
    name: "Emerald Green Organza Embroidery Saree",
    price: 15999,
    image: "https://i.etsystatic.com/46567012/r/il/afe1ad/5470113466/il_fullxfull.5470113466_jnbm.jpg",
    quantity: 1,
  }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from local storage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCartItems(JSON.parse(saved));
    }
  }, []);

  // Sync cart to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleLoadDemo = () => {
    setCartItems(demoCollection);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d97706', '#92400e', '#fef3c7']
    });
  };

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + (subtotal * 0.05);

  return (
    <div className="min-h-screen bg-[#faf9f6] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Demo Toggle */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-serif font-bold text-stone-900 tracking-tight">Your Selection</h1>
            <p className="text-stone-500 font-medium italic">Handpicked Elegance</p>
          </div>
          
          <button 
            onClick={handleLoadDemo}
            className="group flex items-center gap-2 px-6 py-3 bg-white border border-amber-200 text-amber-900 rounded-full hover:bg-amber-50 transition-all shadow-sm hover:shadow-md"
          >
            <Sparkles className="w-4 h-4 text-amber-600 group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Load Demo Collection</span>
          </button>
        </header>

        {cartItems.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300">
            <ShoppingBag className="w-16 h-16 text-stone-200 mx-auto mb-4" />
            <p className="text-stone-500 mb-6">Your bag is currently empty.</p>
            <button onClick={handleLoadDemo} className="text-amber-700 font-bold underline underline-offset-4">
              Try the Demo Experience
            </button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Products Column */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 flex flex-col sm:flex-row"
                  >
                    {/* Image Section - Scaled for visibility */}
                    <div className="w-full sm:w-48 h-64 sm:h-auto bg-stone-100 relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-serif font-bold text-stone-800 leading-snug max-w-[200px] md:max-w-none">
                            {item.name}
                          </h3>
                          <p className="text-amber-800 font-bold mt-2 text-xl">
                            ₹{item.price.toLocaleString("en-IN")}
                          </p>
                        </div>
                        <button onClick={() => handleRemove(item.id)} className="p-2 hover:bg-red-50 text-stone-400 hover:text-red-600 rounded-full transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-stone-50 pt-4">
                        <div className="flex items-center bg-stone-100 rounded-full px-2 py-1">
                          <button 
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="p-2 hover:text-amber-700 disabled:opacity-30"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center font-bold text-stone-800">{item.quantity}</span>
                          <button 
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="p-2 hover:text-amber-700"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm font-semibold text-amber-900 uppercase tracking-tighter">
                          Subtotal: <span className="text-stone-800 ml-1">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Checkout Column */}
            <aside className="lg:col-span-1">
              <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 sticky top-8 shadow-2xl">
                <h2 className="text-xl font-serif font-bold mb-8 flex items-center gap-2">
                  Summary <div className="h-px flex-1 bg-stone-700" />
                </h2>

                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-stone-400 text-sm">
                    <span>Retail Value</span>
                    <span>₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-stone-400 text-sm">
                    <span>GST (5%)</span>
                    <span>₹{(subtotal * 0.05).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-400 text-sm">Delivery</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded">Free</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-8">
                  <span className="text-stone-400 text-xs uppercase tracking-widest">Total Payable</span>
                  <span className="text-3xl font-serif font-bold text-amber-400 leading-none">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>

                <button className="w-full group bg-amber-500 hover:bg-amber-400 text-stone-900 font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 overflow-hidden relative">
                  <span className="relative z-10 uppercase tracking-tighter">Proceed to Checkout</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </aside>

          </div>
        )}
      </div>
    </div>
  );
}