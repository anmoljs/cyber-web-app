"use client";

import { useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import FilterSidebar from "@/Components/FiltersSidebar";
import Pagination from "@/Components/Pagination";
import { useRouter } from "next/navigation";
import { HeartIcon } from "@heroicons/react/24/solid";

const PRODUCTS_PER_PAGE = 9;

const generateProducts = () => {
  const baseProducts = [
    {
      image: "/14 pro.png",
      title: "iPhone 14 Pro Max",
      subtitle: "128GB Deep Purple",
      price: "$999",
      brand: "Apple",
    },
    {
      image: "/applewatch.png",
      title: "Blackmagic Cinema",
      subtitle: "Camera 6K",
      price: "$2399",
      brand: "Blackmagic",
    },
    {
      image: "/headset.png",
      title: "Apple Watch 9",
      subtitle: "41mm Starlight",
      price: "$399",
      brand: "Apple",
    },
    {
      image: "/airpods.png",
      title: "AirPods Max",
      subtitle: "Starlight Aluminium",
      price: "$549",
      brand: "Apple",
    },
    {
      image: "/rado.png",
      title: "Samsung Watch6",
      subtitle: "44mm Black",
      price: "$369",
      brand: "Samsung",
    },
    {
      image: "/tab.png",
      title: "Galaxy Tab S8",
      subtitle: "256GB Phantom Black",
      price: "$1799",
      brand: "Samsung",
    },
    {
      image: "/image1.png",
      title: "Oppo X5",
      subtitle: "5G 8GB RAM",
      price: "$499",
      brand: "Oppo",
    },
    {
      image: "/image2.png",
      title: "Motorola Edge",
      subtitle: "Snapdragon 778G",
      price: "$399",
      brand: "Motorola",
    },
    {
      image: "/image3.png",
      title: "Honor Magic 5",
      subtitle: "Snapdragon 8 Gen 2",
      price: "$799",
      brand: "Honor",
    },
    {
      image: "/image4.png",
      title: "Xiaomi 12 Pro",
      subtitle: "12GB + 256GB",
      price: "$899",
      brand: "Xiaomi",
    },
  ];

  // 108 products bananay ke liye repeat kar rahe hain
  return Array.from({ length: 108 }, (_, i) => {
    const base = baseProducts[i % 10];
    return {
      ...base,
      id: i + 1,
      
    };
  });
};

export default function ShopNowPage() {
  const allProducts = generateProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [likedItems, setLikedItems] = useState({});

  const router = useRouter();
  const uniqueBrands = [...new Set(allProducts.map((p) => p.brand))];

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
    setCurrentPage(1);
  };

  const filteredProducts =
    selectedBrands.length === 0
      ? allProducts
      : allProducts.filter((p) => selectedBrands.includes(p.brand));

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <Navbar />
      <hr className="border-t border-gray-300 mb-4 h-[1px]" />

      <div className="lg:flex lg:mx-auto lg:max-w-6xl gap-6">
        <FilterSidebar
          uniqueBrands={uniqueBrands}
          selectedBrands={selectedBrands}
          handleBrandChange={handleBrandChange}
          search={search}
          setSearch={setSearch}
        />

        <div className="lg:w-2/3">
          <div className="pt-12 mt-12 mb-4 flex flex-col md:flex-row justify-between items-center px-4 lg:px-0 gap-4">
  <h1 className="text-base font-medium text-[#6C6C6C]">
    Selected Products: {filteredProducts.length}
  </h1>
  <select className="px-8 py-2 border border-gray-300 rounded-[8px] text-sm">
    <option value="1">By Rating</option>
    <option value="2">2 Stars</option>
    <option value="3">3 Stars</option>
    <option value="4">4 Stars</option>
    <option value="5">5 Stars</option>
  </select>
</div>
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 lg:gap-x-24 gap-y-6 px-4 gap-4 lg:px-0">
            {paginatedProducts.map((item) => (
              <div
                key={item.id}
                className="relative shadow-md rounded-[9px] lg:py-18 py-16 px-2 lg:px-12 text-center bg-[#F6F6F6] lg:h-[432px] lg:w-[268px] transition duration-300"
              >
                <HeartIcon
                  onClick={() => toggleLike(item.id)}
                  className={`h-6 w-6 absolute ${
                    likedItems[item.id] ? "text-red-500" : "text-black"
                  } top-4 right-4 cursor-pointer z-10`}
                />
                <img
                  src={item.image}
                  alt={item.title}
                  className="lg:w-[160px] lg:h-[160px] object-contain mb-2"
                />
                <h3 className="font-medium text-[16px] mt-4">{item.title}</h3>
                <p className="text-[16px]">{item.subtitle}</p>
                <p className="font-semibold text-[24px] mt-2">{item.price}</p>
                <button
                  onClick={() => router.push("/buy-now")}
                  className="mt-2 lg:px-12 lg:py-4 py-2 px-8 bg-black text-white rounded-[8px]"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
