import React from 'react'

export function FilterPanel() {
  return (
    <section className="bg-white rounded-2xl shadow-lg border border-primary-200 p-6">
      <div className="flex flex-col gap-6">
        {/* Search Bar */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-800 mb-2">
            Search Listings
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search by keyword, VIN, or location..."
            className="w-full px-4 py-3 border border-primary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
          />
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-800 mb-2">
              Year
            </label>
            <select id="year" className="w-full px-3 py-2 border border-primary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-400">
              <option value="">All Years</option>
              <option value="1992-1995">1992-1995</option>
              <option value="1996-2002">1996-2002</option>
              <option value="2003-2010">2003-2010</option>
              <option value="2013-2017">2013-2017</option>
            </select>
          </div>

          <div>
            <label htmlFor="generation" className="block text-sm font-medium text-gray-800 mb-2">
              Generation
            </label>
            <select id="generation" className="w-full px-3 py-2 border border-primary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-400">
              <option value="">All Gens</option>
              <option value="gen1">Gen I</option>
              <option value="gen2">Gen II</option>
              <option value="gen3">Gen III</option>
              <option value="gen4">Gen IV</option>
              <option value="gen5">Gen V</option>
            </select>
          </div>

          <div>
            <label htmlFor="color" className="block text-sm font-medium text-gray-800 mb-2">
              Color
            </label>
            <select id="color" className="w-full px-3 py-2 border border-primary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-400">
              <option value="">All Colors</option>
              <option value="red">Viper Red</option>
              <option value="blue">Viper Blue</option>
              <option value="black">Viper Black</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
            </select>
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-800 mb-2">
              Price Range
            </label>
            <select id="price" className="w-full px-3 py-2 border border-primary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-400">
              <option value="">Any Price</option>
              <option value="0-50000">Under $50k</option>
              <option value="50000-100000">$50k - $100k</option>
              <option value="100000-150000">$100k - $150k</option>
              <option value="150000+">$150k+</option>
            </select>
          </div>

          <div>
            <label htmlFor="mileage" className="block text-sm font-medium text-gray-800 mb-2">
              Mileage
            </label>
            <select id="mileage" className="w-full px-3 py-2 border border-primary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-400">
              <option value="">Any Mileage</option>
              <option value="0-25000">Under 25k</option>
              <option value="25000-50000">25k - 50k</option>
              <option value="50000-75000">50k - 75k</option>
              <option value="75000+">75k+</option>
            </select>
          </div>

          <div>
            <label htmlFor="source" className="block text-sm font-medium text-gray-800 mb-2">
              Source
            </label>
            <select id="source" className="w-full px-3 py-2 border border-primary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-400">
              <option value="">All Sources</option>
              <option value="ebay">eBay Motors</option>
              <option value="bat">Bring a Trailer</option>
              <option value="craigslist">Craigslist</option>
              <option value="viperclub">Viper Club</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-primary-200">
          <button className="bg-accent-400 text-primary-900 font-bold py-3 px-6 rounded-xl hover:bg-accent-500 transition-colors">
            Apply Filters
          </button>
          <button className="bg-primary-100 text-gray-800 font-medium py-3 px-6 rounded-xl hover:bg-primary-200 transition-colors">
            Clear All
          </button>
          <button className="bg-primary-900 text-white font-medium py-3 px-6 rounded-xl hover:bg-primary-800 transition-colors">
            Save Search
          </button>
        </div>
      </div>
    </section>
  )
}
