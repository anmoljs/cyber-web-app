"use client";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Discount() {
const [likedItems, setLikedItems] = useState({ 1: true, 2: false}); // Object to track likes by ID

  const toggleLike = (id) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id] // toggle the liked state for this item
    }));
  };
  const card = [
    {
      id:"1",
      image: "14 pro.png",
      title: "iPhone 14 Pro",
      subtitle: "128GB, Deep Purple",
      price: "$899",
    },
    {
      id:"2",
      image: "airpods.png",
      title: "AirPods Max",
      subtitle: "Silver, Noise Cancellation",
      price: "$549",
    },
    {
      id:'3',
      image: "14 pro.png",
      title: "iPhone 14 Pro",
      subtitle: "256GB, Space Black",
      price: "$999",
    },
    {
      id:"4",
      image: "applewatch.png",
      title: "Apple Watch",
      subtitle: "Series 9, 41mm",
      price: "$399",
    },
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto   ">
 
      <h2 className="text-[24px] font-medium lg:text-start text-center mb-8">Discounts up to -50%</h2>

      {/* Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 lg:gap-6 gap-6   lg:p-0 lg:m-0 m-4">
        {card.map((item, index) => (
          <div
            key={index}
            className=" relative bg-[#F6F6F6] shadow-md rounded-[9px] lg:h-[432px] lg:w-[268px]  py-12 p-8 text-center flex flex-col justify-center lg:px-12 ">
          <HeartIcon onClick={() => toggleLike(item.id)} className={`h-[32px] w-[32px] ${likedItems[item.id] ? "text-red-500" : "text-black"} absolute top-4 right-4 cursor-pointer z-10`} />
            <img
              src={item.image}
              alt={item.title}
              className="w-[160px] h-[160px] object-contain lg:mb-6    "
            />
            <h3 className="lg:text-[16px] font-medium text-nowrap  ">{item.title}</h3>
            <p className="text-gray-500 lg:text-[16px] font-medium lg:text-nowrap line-clamp-1">{item.subtitle}</p>
            <p className="text-black font-semibold lg:text-[24px] mb-4 ">{item.price}</p>
            <button className="lg:px-12 lg:py-4 py-2 px- bg-black text-white rounded-md text-nowrap  ">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Discount;
