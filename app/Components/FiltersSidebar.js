'use client'
import {
	ChevronDownIcon,
	ChevronUpIcon,
  } from "@heroicons/react/24/solid";
  import { useState } from "react";
  
  export default function FiltersSidebar() {
	const [showBrands, setShowBrands] = useState(true);
	const [showCategories, setShowCategories] = useState(true);
	const [showPrices, setShowPrices] = useState(true);
	const [showRatings, setShowRatings] = useState(true);
  
	const [search, setSearch] = useState("");
	const [selectedBrands, setSelectedBrands] = useState([]);
  
	const allBrands = [
	  "Apple iPhone",
	  "Samsung",
	  "Oppo",
	  "Motorola",
	  "Honor",
	  "Xiaomi",
	];
  
	const filteredBrands = allBrands.filter((b) =>
		b.toLowerCase().includes(search.toLowerCase())
	  );
  
	const handleBrandChange = (brand) => {
	  setSelectedBrands((prev) =>
		prev.includes(brand)
		  ? prev.filter((b) => b !== brand)
		  : [...prev, brand]
	  );
	};
  
	return (
	  <div className="lg:w-1/4  pr-6 lg:space-y-12 my-8 px-8 lg:px-0">
		{/* Brands */}
		<div>
		  <div
			className="flex justify-between items-center cursor-pointer  border-b border-b-gray-200 pb-2 mb-4 "
			onClick={() => setShowBrands(!showBrands)}
		  >
		
			<h2 className="text-[18px] leading-[24px] font-medium ">Brands</h2>
			
			{showBrands ? (
			  <ChevronUpIcon className="w-5 h-5 text-gray-600" />
			) : (
			  <ChevronDownIcon className="w-5 h-5 text-gray-600" />
			)}
		  </div>
  
		  {showBrands && (
			<>
			  <input
				type="text"
				placeholder="Search brands..."
				className="w-[256px] h-[40px] mb-4 px-3 py-2  rounded-[8px] bg-gray-200"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			  />
			  <div className="space-y-2 max-h-[180px] overflow-y-auto pl-2">
				{filteredBrands.map((brand) => (
				  <label
					key={brand}
					className="flex items-center space-x-2 font-medium text-[15px] "
				  >
					<input
					  type="checkbox"
					  className="accent-black"
					  checked={selectedBrands.includes(brand)}
					  onChange={() => handleBrandChange(brand)}
					/>
					<span>{brand}</span>
				  </label>
				))}
				{filteredBrands.length === 0 && (
				  <p className="text-sm text-gray-500">No brands found.</p>
				)}
			  </div>
			</>
		  )}
		</div>
  
		{/* Categories */}
		<div>
		  <div
			className="flex justify-between items-center cursor-pointer border-b border-b-gray-200 pb-2 mb-4"
			onClick={() => setShowCategories(!showCategories)}
		  >
			<h2 className="text-[18px] font-medium leading-[24px]">Battery capacity</h2>
			{showCategories ? (
			  <ChevronUpIcon className="w-5 h-5 text-gray-600" />
			) : (
			  <ChevronDownIcon className="w-5 h-5 text-gray-600" />
			)}
		  </div>
  
		  {showCategories && (
			<div className="space-y-2">
			  {[].map((cat) => (
				<label key={cat} className="flex items-center space-x-2">
				  <input type="checkbox" className="accent-black" />
				  <span>{cat}</span>
				</label>
			  ))}
			</div>
		  )}
		</div>
  
		{/* Price Range */}
		<div>
		  <div
			className="flex justify-between items-center cursor-pointer  border-b border-b-gray-200 pb-2 mb-4"
			onClick={() => setShowPrices(!showPrices)}
		  >
			<h2 className="text-[18px] font-medium leading-[24px]">Screen type</h2>
			{showPrices ? (
			  <ChevronUpIcon className="w-5 h-5 text-gray-600" />
			) : (
			  <ChevronDownIcon className="w-5 h-5 text-gray-600" />
			)}
		  </div>
  
		  {showPrices && (
			<div className="space-y-2">
			  {[].map(
				(range) => (
				  <label key={range} className="flex items-center space-x-2">
					<input type="checkbox" className="accent-black" />
					<span>{range}</span>
				  </label>
				)
			  )}
			</div>
		  )}
		</div>
  
		{/* Ratings */}
		<div>
		  <div
			className="flex justify-between items-center cursor-pointer  border-b border-b-gray-200 pb-2 mb-4 "
			onClick={() => setShowRatings(!showRatings)}
		  >
			<h2 className="text-[18px] font-medium leading-[24px]">Screen diagonal</h2>
			{showRatings ? (
			  <ChevronUpIcon className="w-5 h-5 text-gray-600" />
			) : (
			  <ChevronDownIcon className="w-5 h-5 text-gray-600" />
			)}
		  </div>
  
		  {showRatings && (
			<div className="space-y-2">
			  {[].map((rating) => (
				<label key={rating} className="flex items-center space-x-2">
				  <input type="checkbox" className="accent-black" />
				  <span>{"★".repeat(rating)}+</span>
				</label>
			  ))}
			</div>
		  )}
		</div>
		<div>
		  <div
			className="flex justify-between items-center cursor-pointer pb-2 mb-4 border-b border-b-gray-200 "
			onClick={() => setShowCategories(!showCategories)}
		  >
			<h2 className="text-[18px] font-medium leading-[24px]">Protection class</h2>
			{showCategories ? (
			  <ChevronUpIcon className="w-5 h-5 text-gray-600" />
			) : (
			  <ChevronDownIcon className="w-5 h-5 text-gray-600" />
			)}
		  </div>
  
		  {showCategories && (
			<div className="space-y-2">
			  {[].map((cat) => (
				<label key={cat} className="flex items-center space-x-2">
				  <input type="checkbox" className="accent-black" />
				  <span>{cat}</span>
				</label>
			  ))}
			</div>
		  )}
		</div>
		<div>
		  <div
			className="flex justify-between items-center cursor-pointer pb-2 mb-4 border-b border-b-gray-200"
			onClick={() => setShowCategories(!showCategories)}
		  >
			<h2 className="text-[18px] font-medium leading-[24px] ">Built-in memory</h2>
			{showCategories ? (
			  <ChevronUpIcon className="w-5 h-5 text-gray-600" />
			) : (
			  <ChevronDownIcon className="w-5 h-5 text-gray-600" />
			)}
		  </div>
  
		  {showCategories && (
			<div className="space-y-2">
			  {[].map((cat) => (
				<label key={cat} className="flex items-center space-x-2">
				  <input type="checkbox" className="accent-black" />
				  <span>{cat}</span>
				</label>
			  ))}
			</div>
		  )}
		</div>
  
  
	  </div>
	);
  }
  