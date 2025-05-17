"use client";

import Discount from "@/Components/Discount";
import Footer from "@/Components/Footer";
import IphoneParts from "@/Components/IphoneParts";
import Navbar from "@/Components/Navbar";
import Reviews from "@/Components/Reviews";
import { useState } from "react";
import { useRouter } from "next/navigation";

function BuyNowPage() {
  const router = useRouter();
 
  const [selectedColor, setSelectedColor] = useState("");

  const images = [
    { src: "14 pro.png", width: "74px", height: "93px" },
    { src: "frontside2.png", width: "46px", height: "93px" },
    { src: "neww.png", width: "45px", height: "93px", opacity:"40%" },
    { src: "new2.png", width: "46px", height: "93px" },
  ];

  const colors = [
    { name: "gray", value: "#E8E8E8" },
    { name: "Gray", value: "#808080" },
    { name: "Black", value: "#000000" },
    { name: "orange", value: "#E1B000" },
  ];

  const specs = [
    { img: "cpu.png", title: "Screen Size", subtitle: '6.7"' },
    { img: "cpu.png", title: "CPU", subtitle: "Apple A16 Bionic" },
    { img: "numbers.png", title: "Number of Cores", subtitle: "6" },
    { img: "front camera.png", title: "Front Camera", subtitle: "12MP" },
    { img: "front camera.png", title: "Main Camera", subtitle: "Triple 48MP" },
    { img: "battery.png", title: "Battery", subtitle: "4324 mAh" },
  ];

  return (
    <>
      <Navbar/>

      <div className="min-h-screen max-w-6xl  mx-auto flex flex-col lg:flex-row gap-8 py-12 px-4 md:px-24 lg:px-0">
        {/* Images Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start flex-1">
          {/* Main Image */}
          

          {/* Small Images - below on mobile, side on desktop */}
          <div className="lg:flex hidden  gap-4 mt-4 lg:mt-18 lg:flex-col lg:ml-8  w-full  justify-center lg:w-[100px] space-y-4 lg:space-y-0">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={`Preview ${idx}`}
                className="object-cover rounded-lg cursor-pointer opacity-40"
                style={{ width: img.width, height: img.height }}
              />
        
            ))}
          </div>
          <div className="bg-white  flex justify-center lg:ml-12">
            <img
              src="/14pro maxnew.png"
              alt="iPhone 14 Pro Max"
              className="w-[200px] lg:w-[413px] lg:h-[516px] object-contain"
            />
          </div>
          <div className="flex lg:hidden gap-12 py-8  lg:mt-0 lg:flex-col lg:ml-8 w-full  justify-center lg:w-[100px]  lg:space-y-0">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={`Preview ${idx}`}
                className="object-cover rounded-lg cursor-pointer opacity-40 "
                style={{ width: img.width, height: img.height }}
              />
        
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white w-full lg:w-2/3 max-w-[600px] px-4 md:px-8 space-y-6  ">
          {/* Title & Price */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">APPLE IPHONE 14 PRO MAX</h1>
            <p className="text-gray-600">
              <span className="text-black font-bold text-2xl md:text-3xl">$1399</span>
              <span className="line-through text-gray-300 text-xl md:text-2xl ml-2">$1499</span>
            </p>
          </div>

          {/* Color Selection */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Select color:</h2>
            <div className="flex gap-2">
              {colors.map((color) => (
                <div
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full cursor-pointer ${
                    selectedColor === color.name ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
            {selectedColor && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: <span className="font-semibold">{selectedColor}</span>
              </p>
            )}
          </div>

          {/* Storage Selection */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Select storage:</h2>
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-2 text-sm text-gray-700">
              {["128GB", "256GB", "512GB", "1TB"].map((size) => (
                <span
                  key={size}
                  className="rounded-lg lg:h-[48px] lg:w-[112px] py-4   border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-100"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className="bg-[#F4F4F4] rounded-md w-[168px] h-[64px] p-4 flex items-center"
              >
                <img src={spec.img} alt={spec.title} className="w-4 h-5 mr-3" />
                <div>
                  <strong className="text-xs text-gray-400 block">{spec.title}</strong>
                  <span className="text-sm font-medium text-black text-nowrap">{spec.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm">
            The iPhone 14 Pro and Pro Max feature a Super Retina XDR OLED display with a max brightness of 2,000 nits outdoors. 120Hz LTPO tech for smooth scrolling.
          </p>

          {/* Action Buttons */}
          <div className="lg:flex-row  flex flex-col-reverse gap-4">
            <button className="bg-gray-200 px-12 py-3 rounded hover:bg-gray-300 transition">
              Add to Wishlist
            </button>
            <button
              onClick={() => router.push("/add-cart")}
              className="bg-black text-white px-12 py-3 rounded hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>

          {/* Extra Info */}
          <div className="grid grid-cols-3 sm:grid-cols-3  text-sm text-gray-600 px-12 lg:px-0  ">
  {/* 1 - Delivery */}
  <div className="lg:flex items-center gap-2">
    <div className="bg-gray-200 rounded-[11px] h-[56px] w-[56px] flex items-center justify-center">
      <img src="delivery.png" alt="Delivery" className="w-5 h-5" />
    </div>
    <p>
      Delivery <strong className="block">1-2 days</strong>
    </p>
  </div>

  {/* 2 - In stock */}
  <div className="lg:flex items-center gap-2">
    <div className="bg-gray-200 rounded-[11px] h-[56px] w-[56px] flex items-center justify-center">
      <img src="Vector.png" alt="In stock" className="w-5 h-5" />
    </div>
    <p>
      In stock <strong className="block">today</strong>
    </p>
  </div>

  {/* 3 - Warranty */}
  <div className="lg:flex items-center gap-2">
    <div className="bg-gray-200 rounded-[11px] h-[56px] w-[56px] flex items-center justify-center">
      <img src="verify.png" alt="Warranty" className="w-5 h-5" />
    </div>
    <p>
      Guaranteed <strong className="block">1 year</strong>
    </p>
  </div>
</div>

          </div>
        </div>
      

      <IphoneParts />
      <Reviews />
      <Discount />
      <Footer />
    </>
  );
}

export default BuyNowPage;
