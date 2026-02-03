import React from "react";
import { Gavel, Scale, Globe, ShoppingBag, Info, ChevronRight } from "lucide-react";

interface InfoCardProps {
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => (
  <div className="p-5 md:p-6 bg-white border border-stone-200 rounded-xl shadow-sm hover:border-amber-200 transition-colors">
    <h4 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
      {title}
    </h4>
    <p className="text-sm text-stone-500 leading-relaxed">{content}</p>
  </div>
);

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-amber-100">
      {/* Hero Header - Responsive Text Sizes */}
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 text-center">
          <span className="text-amber-700 font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 block">
            Legal Framework
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 font-serif tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed px-2">
            Effective as of January 06, 2026. These terms govern your relationship with Loreal India.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Responsive Navigation */}
          {/* Mobile: Horizontal Scroll | Desktop: Sticky Sidebar */}
          <aside className="lg:w-1/4">
            <div className="lg:sticky lg:top-8">
              <p className="hidden lg:block text-xs uppercase tracking-widest font-bold text-stone-400 mb-4">
                Sections
              </p>
              <nav className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 md:gap-4 no-scrollbar">
                {[
                  { id: "intro", label: "1. Introduction" },
                  { id: "ip", label: "2. Intellectual Property" },
                  { id: "pricing", label: "3. Products & Pricing" },
                  { id: "conduct", label: "4. User Conduct" },
                  { id: "legal", label: "5. Governing Law" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="whitespace-nowrap px-4 py-2 lg:px-0 lg:py-0 rounded-full lg:rounded-none bg-stone-100 lg:bg-transparent text-sm font-medium text-stone-500 hover:text-amber-700 hover:bg-amber-50 lg:hover:bg-transparent transition-all flex items-center group"
                  >
                    <ChevronRight className="hidden lg:block w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 mr-1 transition-all" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Sections */}
          <div className="lg:w-3/4 space-y-12 md:space-y-20">
            <section id="intro" className="scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-3">
                <Info className="text-amber-700 w-5 h-5 md:w-6 md:h-6" /> 1. Introduction
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed text-sm md:text-base">
                <p>
                  Welcome to Loreal India. By accessing this website, we assume you accept these terms and conditions. These terms constitute a legally binding agreement between you and Loreal India regarding your use of our platform.
                </p>
                <p>
                  We reserve the right to change, modify, or remove the contents of the site at any time or for any reason at our sole discretion without notice.
                </p>
              </div>
            </section>

            <section id="ip" className="scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-3">
                <Globe className="text-amber-700 w-5 h-5 md:w-6 md:h-6" /> 2. Intellectual Property
              </h2>
              <div className="text-stone-600 leading-relaxed text-sm md:text-base italic border-l-4 border-amber-700 pl-4 md:pl-6 bg-stone-100 py-6 rounded-r-xl">
                "All digital assets, saree designs, and brand photography displayed on this site are the exclusive property of Loreal India. Reproduction without written consent is strictly prohibited."
              </div>
            </section>

            <section id="pricing" className="scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-3">
                <ShoppingBag className="text-amber-700 w-5 h-5 md:w-6 md:h-6" /> 3. Products & Pricing
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <InfoCard 
                  title="Handcrafted Nature" 
                  content="Every saree is unique. Variations in silk texture or zari work are intrinsic to the hand-looming process." 
                />
                <InfoCard 
                  title="Pricing Policy" 
                  content="Prices are subject to change. In case of a pricing error, we reserve the right to cancel the order and provide a full refund." 
                />
              </div>
            </section>

            <section id="conduct" className="scroll-mt-24">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-3">
                <Scale className="text-amber-700 w-5 h-5 md:w-6 md:h-6" /> 4. User Conduct
              </h2>
              <div className="bg-white border border-stone-200 p-6 md:p-8 rounded-2xl shadow-sm text-sm md:text-base text-stone-600 space-y-4">
                <p>Users are prohibited from:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 list-inside list-disc">
                  <li>Automated use of the system (bots/scripts)</li>
                  <li>Attempting to bypass security measures</li>
                  <li>Unauthorized commercial use of brand assets</li>
                  <li>Harassing or threatening our support staff</li>
                </ul>
              </div>
            </section>

            <section id="legal" className="scroll-mt-24 pb-10">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-3">
                <Gavel className="text-amber-700 w-5 h-5 md:w-6 md:h-6" /> 5. Governing Law
              </h2>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                These Terms and Conditions and your use of the Site are governed by and construed in accordance with the laws of India. Any legal action shall be brought in the courts located in [Your City], and you hereby consent to the exclusive jurisdiction of such courts.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs md:text-sm tracking-wide">
            &copy; 2026 Loreal India Handlooms Pvt. Ltd.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Returns</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}