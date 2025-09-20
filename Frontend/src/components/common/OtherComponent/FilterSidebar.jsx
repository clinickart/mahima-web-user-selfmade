import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";

const FilterSidebar = () => {
  const [showBrands, setShowBrands] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showRatings, setShowRatings] = useState(true);

  return (
    <div className="w-full md:w-64 p-4 space-y-6 border border-gray-200 rounded-md h-fit bg-white">
      <div>
        <h4
          className="font-semibold mb-2 flex justify-between items-center cursor-pointer border-b border-gray-200"
          onClick={() => setShowBrands(!showBrands)}
        >
          <span>Brands</span>
          <Icon
            icon="material-symbols:chevron-right-rounded"
            className={`text-gray-400 w-4 h-4 transition-transform ${
              showBrands ? "rotate-90" : ""
            }`}
          />
        </h4>
        {showBrands && (
          <>
            {["Agni", "Indian", "Unicorn Denmart", "Waldent", "Fona"].map(
              (brand) => (
                <div key={brand} className="flex items-center space-x-2 mb-1">
                  <input type="checkbox" id={brand} />
                  <label htmlFor={brand} className="text-sm">
                    {brand}
                  </label>
                </div>
              )
            )}
            <button className="text-blue-600 text-sm mt-1 cursor-pointer">
              See all
            </button>
          </>
        )}
      </div>

      <div>
        <h4
          className="font-semibold mb-2 flex justify-between items-center cursor-pointer border-b border-gray-200"
          onClick={() => setShowPrice(!showPrice)}
        >
          <span>Price range</span>
          <Icon
            icon="material-symbols:chevron-right-rounded"
            className={`text-gray-400 w-4 h-4 transition-transform ${
              showPrice ? "rotate-90" : ""
            }`}
          />
        </h4>
        {showPrice && (
          <>
            <input
              type="range"
              min="0"
              max="100000"
              className="w-full mb-2 accent-blue-500"
            />
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full border px-2 py-1 text-sm rounded"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full border px-2 py-1 text-sm rounded"
              />
            </div>
            <button className="mt-2 text-sm bg-blue-600 text-white px-3 py-1 rounded w-full">
              Apply
            </button>
          </>
        )}
      </div>

      <div>
        <h4
          className="font-semibold mb-2 flex justify-between items-center cursor-pointer"
          onClick={() => setShowRatings(!showRatings)}
        >
          <span>Ratings</span>
          <Icon
            icon="material-symbols:chevron-right-rounded"
            className={`text-gray-400 w-4 h-4 transition-transform ${
              showRatings ? "rotate-90" : ""
            }`}
          />
        </h4>
        {showRatings && (
          <>
            {[5, 4, 3, 2].map((stars) => (
              <div key={stars} className="flex items-center space-x-2">
                <input type="checkbox" />
                <div className="text-yellow-400">
                  {"★".repeat(stars)}
                  {"☆".repeat(5 - stars)}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
