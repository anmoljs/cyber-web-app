"use client";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Products() {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const router = useRouter();

  const items = [
    {
      id: "1",
      image: "/14 pro.png",
      title: "iPhone 14 Pro Max",
      subtile: "128GB Deep Purple",
      price: "$900",
    },
    {
      id: "2",
      image: "/camera.png",
      title: "Blackmagic Pocket Cinema",
      subtile: "Camera 6K",
      price: "$2535",
    },
    {
      id: "3",
      image: "/applewatch.png",
      title: "Apple Watch Series 9",
      subtile: "41mm Starlight Aluminium",
      price: "$399",
    },
    {
      id: "4",
      image: "/airpods.png",
      title: "AirPods Max Silver",
      subtile: "Starlight Aluminium",
      price: "$549",
    },
    {
      id: "5",
      image: "/headset.png",
      title: "Samsung Galaxy Watch6",
      subtile: "Classic 44mm Black",
      price: "$369",
    },
    {
      id: "6",
      image: "/applewatch.png",
      title: "Galaxy Z Fold5 Unlock",
      subtile: "256GB | Phantom Black",
      price: "$900",
    },
    {
      id: "7",
      image: "/samsung.png",
      title: "Galaxy Buds FC",
      subtile: "Graphite",
      price: "$900",
    },
    {
      id: "8",
      image: "/tab.png",
      title: "Apple iPad 9 10.2” 64GB Wi-Fi",
      subtile: "Silver (MK2L3) 2021",
      price: "$900",
    },
  ];

  return (
    <section className="mx-auto lg:max-w-7xl py-24 px-4">
      {/* Section Header */}
      <div className="flex items-start text-nowrap  mb-6 max-w-7xl mx-auto text-gray-400  lg:px-8 lg:gap-8 gap-4 sm:gap-2 ">
        <h2 className="lg:text-xl lg:font-semibold cursor-pointer hover:underline hover:text-black">
          New Arrivals
        </h2>
        <h2 className="lg:text-xl lg:font-semibold cursor-pointer hover:underline hover:text-black">
          Best Sellers
        </h2>
        <h2 className="lg:text-xl lg:font-semibold cursor-pointer hover:underline hover:text-black">
          Featured Products
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative shadow-md rounded-[9px] lg:p-12  py-12  text-center bg-[#F6F6F6] h-[432px]"
          >
            <HeartIcon
              onClick={() => toggleLike(item.id)}
              className={`h-6 w-6 absolute top-4 right-4 cursor-pointer z-10 ${
                likedItems[item.id] ? "text-red-500" : "text-black"
              }`}
            />

            <img
              src={item.image}
              alt={item.title}
              className="w-[160px] h-[160px] object-contain mx-auto mb-4"
            />
            <h3 className="font-medium text-[16px] line-clamp-1">
              {item.title}
            </h3>
            <p className="text-[16px] text-gray-600 line-clamp-1">
              {item.subtile}
            </p>
            <p className="font-semibold text-[24px] mt-2">{item.price}</p>
            <button
              onClick={() => router.push("/buy-now")}
              className="mt-4 lg:px-12 py-3 px-8 bg-black text-white rounded-[8px]"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
