import { useState } from "react";
import { Filter, SortAsc } from "lucide-react"; // Optional: use lucide icons

// Bottom Sheet Modal Component
const BottomSheet: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/50">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-white rounded-t-2xl max-h-[90vh] overflow-hidden animate-slide-up">
        {/* Handle Bar */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-300 rounded-full" />

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-gray-800"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto pb-8">{children}</div>
      </div>
    </div>
  );
};

// Main Component
const MobileFilterSortBar: React.FC = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string>("relevance");

  const sortOptions = [
    { value: "relevance", label: "Relevance" },
    { value: "popularity", label: "Popularity" },
    { value: "newest", label: "Newest First" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "discount", label: "Discount" },
    { value: "rating", label: "Customer Rating" },
  ];

  return (
    <>
      {/* Fixed Bottom Bar - Visible only on mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden z-40">
        <div className="flex">
          {/* Filter Button */}
          <button
            onClick={() => setFilterOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium border-r"
          >
            <Filter className="w-5 h-5" />
            Filter
          </button>

          {/* Sort Button */}
          <button
            onClick={() => setSortOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium"
          >
            <SortAsc className="w-5 h-5" />
            Sort
            {selectedSort !== "relevance" && (
              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                1
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Add bottom padding to page content to avoid overlap */}
      <div className="pb-16 md:pb-0" />

      {/* Filter Bottom Sheet */}
      <BottomSheet
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        title="Filters"
      >
        <div className="p-4 space-y-6">
          {/* Example Filter Sections */}
          <div>
            <h3 className="font-medium mb-3">Category</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 rounded" />
                Silk Sarees
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 rounded" />
                Banarasi Sarees
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 rounded" />
                Kanjeevaram
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="radio" name="price" className="mr-3" />
                Under ₹2000
              </label>
              <label className="flex items-center">
                <input type="radio" name="price" className="mr-3" />
                ₹2000 - ₹5000
              </label>
              <label className="flex items-center">
                <input type="radio" name="price" className="mr-3" />
                Above ₹5000
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Discount</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 rounded" />
                50% or more
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 rounded" />
                30% - 50%
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 py-3 border border-gray-300 rounded-lg font-medium">
              Clear All
            </button>
            <button className="flex-1 py-3 bg-orange-500 text-white rounded-lg font-medium">
              Apply Filters
            </button>
          </div>
        </div>
      </BottomSheet>

      {/* Sort Bottom Sheet */}
      <BottomSheet
        isOpen={sortOpen}
        onClose={() => setSortOpen(false)}
        title="Sort By"
      >
        <div className="p-4">
          {sortOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center justify-between py-4 border-b last:border-0 cursor-pointer"
            >
              <span className="text-base">{option.label}</span>
              <input
                type="radio"
                name="sort"
                value={option.value}
                checked={selectedSort === option.value}
                onChange={(e) => {
                  setSelectedSort(e.target.value);
                  setSortOpen(false); // Auto-close on selection
                }}
                className="w-5 h-5 text-orange-500"
              />
            </label>
          ))}
        </div>
      </BottomSheet>

      {/* Custom Animation */}
      <style >{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default MobileFilterSortBar;