"use client";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { useRouter } from "next/navigation";

function StepOnePage() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <hr className="border-t border-gray-300 mb-4 h-[1px]" />

      {/* Step Progress Section */}
      <div className="max-w-5xl mx-auto p-4 space-y-2">
        <div className="flex flex-cols-3 md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          {/* Step 1 */}
          <div className="step-section group flex items-start space-x-3 text-gray-400 hover:text-black">
  {/* Icon with gray background and white icon, hover turns bg black */}
  <div className="bg-gray-300 group-hover:bg-black p-2 rounded-[18px] transition-colors duration-200">
    <img src="/address.png" className="h-3 w-3 " />
  </div>

  <div>
    <h2 className="text-[14px] leading-[16px] font-medium">Step 1</h2>
    <h1 className="lg:text-[19px] font-medium leading-[24px]">address</h1>
  </div>
</div>

          {/* Step 2 */}
          <div className="step-section group flex items-start space-x-3 text-gray-400 hover:text-black">
  {/* Icon with gray background and white icon, hover turns bg black */}
  <div className="bg-gray-300 group-hover:bg-black p-2 rounded-[18px] transition-colors duration-200">
    <img src="/vector.png" className="h-4 w-4 " />
  </div>

  <div>
    <h2 className="text-[14px] leading-[16px] font-medium">Step 2</h2>
    <h1 className="lg:text-[19px] font-medium leading-[24px]">Shipping</h1>
  </div>
</div>
<div className="step-section group flex items-start space-x-3 text-gray-400 hover:text-black">
  {/* Icon with gray background and white icon, hover turns bg black */}
  <div className="bg-gray-300 group-hover:bg-black p-2 rounded-[18px] transition-colors duration-200">
    <img src="/dollar.png" className="h-3 w-3 " />
  </div>

  <div>
    <h2 className="text-[14px] leading-[16px] font-medium">Step 3</h2>
    <h1 className="lg:text-[19px] font-medium leading-[24px]">payments</h1>
  </div>
</div>
</div>
      </div>

      {/* Shipment Section */}
      <div className="px-4 mt-32 py-8 mx-auto max-w-5xl">
        <h1 className="text-xl font-semibold">Shipment Method</h1>
      </div>

      {/* Shipment Options */}
      <div className="mx-auto space-y-4 mb-8 px-4 max-w-5xl">
        {/* Option 1 */}
        <label className="flex flex-col-1 sm:flex-row text-gray-400 hover:text-black items-start sm:items-center justify-between border border-[#D1D1D8] p-4 gap-2">
          <div className="flex items-center space-x-4">
            <input type="radio" name="shipment" className="h-[20px] w-[20px] accent-black " />
            <h2 className="lg:font-semibold lg:text-lg ">Free Regular Shipment</h2>
          </div>
          <h3 className="text-sm  ">17 Oct 2023</h3>
        </label>

        {/* Option 2 */}
        <label className="flex flex-col-1 sm:flex-row items-start text-gray-400 hover:text-black sm:items-center justify-between border border-[#D1D1D8] p-4 gap-2">
          <div className="flex items-center space-x-4">
            <input type="radio" name="shipment" className="h-[20px] w-[20px] accent-black" />
            <h2 className="lg:font-semibold lg:text-lg">Get your delivery as soon as possible</h2>
          </div>
          <h3 className="text-sm text-nowrap">15 Oct 2023</h3>
        </label>

        {/* Option 3 */}
        <label className="flex flex-col-1 sm:flex-row items-start text-gray-400 hover:text-black sm:items-center justify-between border border-[#D1D1D8] p-4 gap-4">
          <div className="flex items-center space-x-4">
            <input type="radio" name="shipment" className="h-[20px] w-[20px] accent-black" />
            <h2 className="lg:font-semibold lg:text-lg ">Pick a date when you want to get your delivery</h2>
          </div>
          <select id="date" className=" px-3 py-2 rounded mt-2 sm:mt-0 ">
            <option value="">Select date</option>
            <option value="oct15">15 Oct</option>
            <option value="oct16">16 Oct</option>
            <option value="oct17">17 Oct</option>
          </select>
        </label>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-end px-4 sm:pr-16 gap-4 mb-12 lg:mt-40 lg:max-w-7xl">
        <button onClick={() => router.back()}  className="w-full sm:w-auto px-18 py-3 border-2 text-gray-800 rounded-[6px]">Back</button>
        <button  onClick={() => router.push("/step-two")} className="w-full sm:w-auto px-18 py-3 bg-black text-white rounded-[6px]">Next</button>
      </div>

      <Footer />
    </div>
  );
}

export default StepOnePage;
