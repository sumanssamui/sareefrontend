
import { 
  RefreshCcw, 
  ShieldCheck, 
  AlertCircle, 
  
  Mail, 
  MessageCircle,
  Clock,
  CheckCircle2
} from "lucide-react";

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-amber-100">
      {/* Hero Section */}
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <span className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-4 block">
            Customer Care
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 font-serif tracking-tight">
            Return & Refund Policy
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            At Loreal India, we treat every saree as a piece of art. 
            If your purchase doesn't meet your expectations, we're here to help.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <HighlightCard 
            icon={<Clock className="w-6 h-6 text-amber-700" />}
            title="15-Day Window"
            desc="Easy returns within 15 days of delivery for eligible items."
          />
          <HighlightCard 
            icon={<ShieldCheck className="w-6 h-6 text-amber-700" />}
            title="Quality Guarantee"
            desc="Full protection against manufacturing defects or transit damage."
          />
          <HighlightCard 
            icon={<RefreshCcw className="w-6 h-6 text-amber-700" />}
            title="Easy Exchange"
            desc="Seamless size/color swaps or instant store credit."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-2">
                <span className="text-amber-200 text-3xl font-sans">01.</span> Eligibility
              </h2>
              <div className="space-y-4">
                <PolicyItem text="Saree must be unwashed, unworn, and in original condition." />
                <PolicyItem text="All original tags, labels, and packaging must be intact." />
                <PolicyItem text="Proof of issue (clear photos/unboxing video) required for damage claims." />
                <PolicyItem text="Requests must be initiated within 15 days of receipt." />
              </div>
            </section>

            <section className="bg-stone-100 p-8 rounded-2xl border border-stone-200">
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-amber-800" /> Non-Returnable Items
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-600">
                <li className="flex gap-2"><span>•</span> Customized/Personalized sarees</li>
                <li className="flex gap-2"><span>•</span> Sarees with Fall & Pico done</li>
                <li className="flex gap-2"><span>•</span> Pre-stitched / Ready-to-wear items</li>
                <li className="flex gap-2"><span>•</span> Final Sale items</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">Return Process</h2>
              <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-stone-200">
                <Step number={1} title="Request" desc="Email or WhatsApp us with Order ID and images of the concern." />
                <Step number={2} title="Review" desc="Our quality team will review the request within 24-48 hours." />
                <Step number={3} title="Pickup" desc="We arrange a free reverse pickup for approved defect cases." />
                <Step number={4} title="Inspection" desc="Once received, we inspect the item to process your credit." />
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-amber-900 text-amber-50 p-8 rounded-2xl sticky top-8">
              <h3 className="text-xl font-bold mb-4 font-serif">Need Help?</h3>
              <p className="text-amber-100/80 mb-6 text-sm leading-relaxed">
                Our support team is available Mon-Sat, 10 AM – 7 PM IST to assist with your returns.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:support@earthlyelegance.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">Email Support</span>
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">+91 9090331296</span>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-amber-800">
                <p className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">
                  Last Updated
                </p>
                <p className="text-sm">January 06, 2026</p>
              </div>
            </div>
            
            <div className="p-6 border border-stone-200 rounded-2xl text-stone-500 text-xs leading-relaxed">
              <strong>Note:</strong> Handwoven silks often have slight irregularities in weave or color. These are not defects but signs of authentic craftsmanship.
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-stone-200 text-center">
        <p className="text-stone-400 text-sm">
          &copy; 2026 Loreal India. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

// Helper Components
function HighlightCard({ icon, title, desc }: HighlightCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-stone-800 mb-2">{title}</h3>
      <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function PolicyItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-start">
      <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
      <span className="text-stone-600 leading-relaxed">{text}</span>
    </div>
  );
}

interface StepProps {
  number: number;
  title: string;
  desc: string;
}

function Step({ number, title, desc }: StepProps) {

  return (
    <div className="relative pl-10">
      <div className="absolute left-0 w-6 h-6 bg-white border-2 border-amber-700 rounded-full flex items-center justify-center text-[10px] font-bold text-amber-700 z-10">
        {number}
      </div>
      <h4 className="font-bold text-stone-800">{title}</h4>
      <p className="text-stone-500 text-sm">{desc}</p>
    </div>
  );
}