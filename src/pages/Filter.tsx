// Filter.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Filter as FilterIcon, X } from "lucide-react";
import MobileFilterSortBar from "../components/MobileFilterSortBar";

interface PriceRange {
  label: string;
  min: number;
  max: number | null;
}

const Filter = () => {
  const [openSections, setOpenSections] = useState<string[]>(["PRICE", "CATEGORY"]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string>("RECOMMENDED");

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  const sortOptions = [
    { value: "RECOMMENDED", label: "Recommended" },
    { value: "NEWEST", label: "What's New" },
    { value: "BESTSELLER", label: "Best Seller" },
    { value: "PRICE_HIGH", label: "Price - High To Low" },
    { value: "PRICE_LOW", label: "Price - Low To High" },
  ];

  const priceRanges: PriceRange[] = [
    { label: "Under ₹2,000", min: 0, max: 2000 },
    { label: "₹2,000 - ₹5,000", min: 2000, max: 5000 },
    { label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
    { label: "₹10,000 - ₹20,000", min: 10000, max: 20000 },
    { label: "Over ₹20,000", min: 20000, max: null },
  ];

  const categories = ["Silk Sarees", "Cotton Sarees", "Banarasi", "Kanjivaram", "Designer", "Handloom", "Chiffon", "Georgette"];

  const sizes = ["Free Size", "XS", "S", "M", "L", "XL", "XXL", "Custom"];

  const colors = [
    { name: "Red", hex: "#dc2626" },
    { name: "Blue", hex: "#2563eb" },
    { name: "Green", hex: "#16a34a" },
    { name: "Gold", hex: "#fbbf24" },
    { name: "Pink", hex: "#ec4899" },
    { name: "Black", hex: "#1f2937" },
    { name: "White", hex: "#f3f4f6" },
    { name: "Purple", hex: "#9333ea" },
    { name: "Maroon", hex: "#7c2d12" },
    { name: "Yellow", hex: "#eab308" },
  ];

  const discounts = ["10% and above", "20% and above", "30% and above", "40% and above", "50% and above"];

  const fabrics = ["Silk", "Cotton", "Georgette", "Chiffon", "Banarasi Silk", "Kanjivaram Silk", "Organza", "Linen", "Tussar", "Crepe"];

  const lengths = ["5.5 meters", "6 meters", "6.5 meters", "9 meters (with blouse)", "Full Saree"];

  const fits = ["Regular Fit", "Slim Fit", "Relaxed Fit"];

  const patterns = ["Plain", "Printed", "Embroidered", "Zari Work", "Thread Work", "Sequins", "Mirror Work", "Block Print"];

  const collections = ["Bridal Collection", "Festive Wear", "Party Wear", "Daily Wear", "Designer Exclusive", "Summer Collection", "Winter Collection"];

  const occasions = ["Wedding", "Party Wear", "Festive", "Daily Wear", "Bridal", "Reception", "Engagement", "Casual"];

  const sleeves = ["Sleeveless", "Short Sleeve", "3/4 Sleeve", "Full Sleeve", "Cap Sleeve"];

  const filterSections = [
    { key: "PRICE", title: "Price", content: priceRanges.map((range) => (
      <label key={range.label} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 py-2 px-1 rounded">
        <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
        <span className="text-sm text-gray-700">{range.label}</span>
      </label>
    ))},
    { key: "CATEGORY", title: "Category", content: categories.map((cat) => (
      <label key={cat} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 py-2 px-1 rounded">
        <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
        <span className="text-sm text-gray-700">{cat}</span>
      </label>
    ))},
    { key: "SIZE", title: "Size", content: sizes.map((size) => (
      <label key={size} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 py-2 px-1 rounded">
        <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
        <span className="text-sm text-gray-700">{size}</span>
      </label>
    ))},
    { key: "COLOUR", title: "Colour", content: (
      <div className="grid grid-cols-5 gap-3 mt-2">
        {colors.map((color) => (
          <div key={color.name} className="flex flex-col items-center group cursor-pointer">
            <div
              className="w-9 h-9 rounded-full border-2 border-gray-300 hover:border-gray-600 transition-all shadow-sm"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
            <span className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition">{color.name}</span>
          </div>
        ))}
      </div>
    )},
    { key: "DISCOUNT", title: "Discount", content: discounts.map((disc) => (
      <label key={disc} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 py-2 px-1 rounded">
        <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
        <span className="text-sm text-gray-700">{disc}</span>
      </label>
    ))},
    { key: "FABRIC", title: "Fabric", content: fabrics.map((fabric) => (
      <label key={fabric} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 py-2 px-1 rounded">
        <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
        <span className="text-sm text-gray-700">{fabric}</span>
      </label>
    ))},
    { key: "LENGTH", title: "Length", content: lengths.map((len) => (
      <label key={len} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 py-2 px-1 rounded">
        <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
        <span className="text-sm text-gray-700">{len}</span>
      </label>
    ))},
    { key: "FIT", title: "Fit", content: fits.map((fit) => (
      <label key={fit} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 py-2 px-1 rounded">
        <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
        <span className="text-sm text-gray-700">{fit}</span>
      </label>
    ))},
    { key: "PATTERN", title: "Pattern", content: patterns.map((pattern) => (
      <label key={pattern} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 py-2 px-1 rounded">
        <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
        <span className="text-sm text-gray-700">{pattern}</span>
      </label>
    ))},
    { key: "COLLECTIONS", title: "Collections", content: collections.map((col) => (
      <label key={col} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 py-2 px-1 rounded">
        <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
        <span className="text-sm text-gray-700">{col}</span>
      </label>
    ))},
    { key: "OCCASION", title: "Occasion", content: occasions.map((occ) => (
      <label key={occ} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 py-2 px-1 rounded">
        <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
        <span className="text-sm text-gray-700">{occ}</span>
      </label>
    ))},
    { key: "SLEEVE", title: "Sleeve", content: sleeves.map((sleeve) => (
      <label key={sleeve} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 py-2 px-1 rounded">
        <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
        <span className="text-sm text-gray-700">{sleeve}</span>
      </label>
    ))},
  ];

  const filterContent = (
    <>
      {/* Header with Close Button */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
        <button
          onClick={toggleMobileFilter}
          className="lg:hidden text-gray-700 hover:text-gray-900"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Sort By Section */}
      <div className="px-6 pt-6 pb-4 ">
        <h3 className="text-base font-semibold text-gray-900 uppercase tracking-wider mb-4">
          Sort By
        </h3>
        <select
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2C1810] focus:border-[#2C1810]"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Filter Sections */}
      <div className="space-y-6 px-6 pb-8 overflow-y-auto flex-1">
        {filterSections.map((section) => (
          <div key={section.key} className="border-b border-gray-200 pb-6 last:border-0">
            <button
              onClick={() => toggleSection(section.key)}
              className="w-full flex items-center justify-between text-left group"
            >
              <h3 className="text-base font-semibold text-gray-900 uppercase tracking-wider">
                {section.title}
              </h3>
              {openSections.includes(section.key) ? (
                <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
              )}
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openSections.includes(section.key) ? "auto" : 0,
                opacity: openSections.includes(section.key) ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden mt-4"
            >
              <div className="space-y-1">
                {section.content}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Apply Button */}
      <div className="px-6 pb-6 border-t border-gray-200">
        <button className="w-full bg-[#2C1810] text-white py-3 rounded-lg font-medium hover:bg-[#3d2418] transition shadow-md">
          Apply Filters
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Controls - Sort By + Filter Button (stacked on very small screens) */}
       <div className="hidden lg:block">
      <div className="lg:hidden mb-6 px-4 space-y-3">
        {/* Sort By */}
        <div>
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2C1810] focus:border-[#2C1810]"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Button */}
        <button
          onClick={toggleMobileFilter}
          className="w-full flex items-center justify-center gap-2 bg-[#2C1810] text-white py-3 rounded-lg font-medium hover:bg-[#3d2418] transition"
        >
          <FilterIcon className="w-5 h-5" />
          Filters
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="w-72 lg:w-80 border-r border-gray-200 pr-6 py-8 hidden lg:block overflow-y-auto max-h-screen sticky top-20">
        {filterContent}
      </aside>

      </div>
      <MobileFilterSortBar/>



     
    </>
  );
};

export default Filter;