"use client";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const cartItems = [
  { img: "14 pro.png", name: "iPhone 14 Pro Max", title: "128 GB Deep Purple", quantity: 1, price: 1200 },
  { img: "applewatch.png", name: "AirPods Pro", title: "128 GB Deep Purple", quantity: 2, price: 250 },
  { img: "airpods.png", name: "Apple Watch", title: "128 GB Deep Purple", quantity: 2, price: 450 },
];

const AddCartPage = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:py-24 flex flex-col md:flex-row gap-6">
        {/* Shopping Cart */}
        <div className="w-full md:w-1/2 bg-white p-4 sm:p-6 space-y-12">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

          {cartItems.map((cartitem, index) => (
            <div key={index} className="flex flex-cols-2 sm:flex-row sm:justify-between items-start sm:items-center border-b border-gray-200 pb-6">
              {/* Product Information */}
              <div className="flex items-start sm:items-center mb-4 sm:mb-0">
                <img src={cartitem.img} alt={cartitem.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h4 className="font-semibold text-lg">{cartitem.name}</h4>
                  <h5 className="text-sm text-gray-500">{cartitem.title}</h5>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center mb-4 sm:mb-0">
                <button onClick={decrementCount} className="w-8 h-8 flex items-center justify-center text-xl">-</button>
                <span className="text-lg font-medium border-2 border-gray-300 h-[32px] w-[40px] text-center flex items-center justify-center">
                  {count}
                </span>
                <button onClick={incrementCount} className="w-8 h-8 flex items-center justify-center text-xl">+</button>
              </div>

              {/* Price and Close Icon */}
              <div className="flex items-center space-x-2">
                <p className="text-[20px] font-medium text-gray-500">${cartitem.price}</p>
                <img src="close.png" alt="Close" className="h-4 w-4 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/2 border-2 border-gray-200 p-4 sm:p-6 rounded-lg bg-white">
          <h2 className="text-[20px] leading-[16px] font-bold py-8">Order Summary</h2>

          <h3 className="capitalize mb-2 text-[14px] leading-[16px] font-medium">Discount Code / Promo Code</h3>
          <button className="text-start capitalize px-4 py-5 border-[#9F9F9F] border-2 mb-4 w-full rounded-[7px]">
            Apply Code
          </button>

          <h3 className="capitalize mb-2 text-[14px] leading-[16px] font-medium">Your Bonus Card Number</h3>
          <button className="text-start capitalize px-4 py-5 border-[#9F9F9F] border-2 mb-4 w-full rounded-[7px]">
            Enter Card Number <span className="ml-4 bg-gray-200 text-black px-2 py-1 rounded">apply</span>
          </button>

          <div className="space-y-8 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$2347</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span>$50</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Estimated Shipping and Handling</span>
              <span>$29</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>$2426</span>
            </div>
          </div>

          <button
            onClick={() => router.push("/check-out")}
            className="mt-12 w-full bg-black text-white py-4 rounded-lg"
          >
            Checkout
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddCartPage;
