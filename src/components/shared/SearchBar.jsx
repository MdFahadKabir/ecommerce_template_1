import Search from "@/assets/images/svg/Search";
import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form className="flex items-center max-w-lg mx-auto">
        <div className="relative w-80">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full rounded-full p-2.5  "
            placeholder="Search Phone, Tablet, Speakers..."
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <span className="">
              <Search />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
