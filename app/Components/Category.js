'use client'
import { useRef } from "react";
import { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DevicePhoneMobileIcon,
  CameraIcon,
  ComputerDesktopIcon,
  MusicalNoteIcon,
  
  ClockIcon,
  TvIcon,
 DeviceTabletIcon,
  SpeakerWaveIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

function Category() {
  
  const scrollRef = useRef(null);

  const categories = [
    { name: "Phone", icon: <DevicePhoneMobileIcon className="h-10 w-23 " /> },
    { name: "Smartwatches", icon: <ClockIcon className="h-10 w-23 " /> },
    { name: "Cameras", icon: <CameraIcon className="h-10 w-23 " /> },
    { name: "Headphone", icon: <MusicalNoteIcon className="h-10 w-23 " /> },
    { name: "Computer", icon: <ComputerDesktopIcon className="h-10 w-23 " /> },
   
    { name: "Tablet", icon: <DeviceTabletIcon className="h-10 w-23 " /> },
    { name: "TV", icon: <TvIcon className="h-10 w-23 " /> },
    { name: "Laptop", icon: <CpuChipIcon className="h-10 w-23 " /> },
    { name: "Speaker", icon: <SpeakerWaveIcon className="h-10 w-23 " /> },
  ];

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({ left: -480, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({ left: 480, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#FAFAFA]">
      {/* Header */}
      <div className="lg:flex justify-between items-center lg:mb-8 mx-auto max-w-5xl ">
        <h2 className="text-2xl font-semibold text-center px-8 lg:px-0 ">Browse by Category</h2>
        <div className="lg:flex   ">
          <button onClick={scrollLeft} className="p-2   hover:bg-gray-100 ">
            <ChevronLeftIcon className="h-[32px] w-[32px] text-gray-600" />
          </button>
          <button onClick={scrollRight} className="p-2  hover:bg-gray-100">
            <ChevronRightIcon className="h-[32px] w-[32px] text-gray-600" />
          </button>
        </div>
      </div>

      {/* Category Items */}
      <div
        ref={scrollRef}
        className="lg:flex overflow-hidden max-w-6xl lg:gap-2 lg:mx-auto grid grid-cols-2  px-8 py-8 gap-8  lg:py-0"
        style={{ scrollBehavior: "smooth" }}
      >
        {categories.map((item, i) => (
          <div
            key={i}
            className="w-full lg:min-w-[160px] mr-4 h-[128px] flex flex-col items-center lg:gap-8 justify-center bg-gray-200 rounded-[15px] text-center font-medium text-gray-800"
          >
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Category;   