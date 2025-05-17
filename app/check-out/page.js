"use client";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { useRouter } from "next/navigation";


function CheckOutPage() {
  
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <hr className="border-t border-gray-300 mb-4 h-[1px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Steps Section */}
        <div className="flex flex-cols-3 md:flex-row items-start md:items-center justify-between gap-4">
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
    <img src="/vector.png" className="h-3 w-3 " />
  </div>

  <div>
    <button onClick={() => router.push("/check-out")} className="text-[14px] leading-[16px] font-medium">Step 2</button>
    <h1 className="lg:text-[19px] font-medium leading-[24px]">delivery</h1>
  </div>
</div>

          {/* Step 3 */}
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

        {/* Existing Addresses */}
        <div className="address-section py-8">
          <h1 className="text-xl font-semibold mb-4">Select Address</h1>

          {/* Address Card 1 */}
          <div className="address-card my-4 p-4 py-6 bg-[#F6F6F6] flex flex-col-1 sm:flex-row justify-between items-start gap-4">
            <input type="radio" className="h-[24px] w-[24px] accent-black" />
            <div className="lg:flex flex-col flex-grow flex">
              <div className="flex items-center flex-wrap gap-2">
                <h2 className="text-lg font-medium text-[#17183B]">2118 Thornridge</h2>
                <span className="px-2 py-[2px] text-xs bg-black text-white rounded-[4px]">Home</span>
              </div>
              <p className="text-[#17183B]">
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </p>
              <h3 className="text-sm text-[#17183B]">(209) 555-0104</h3>
            </div>
            

            <div className="flex space-x-2 self-start">
              <img
                src="pencil.png"
                alt="Edit"
                className="h-[18px] w-[18px] cursor-pointer hover:scale-110 transition-transform"
              />
              <img
                src="close.png"
                alt="Delete"
                className="h-[18px] w-[18px] cursor-pointer hover:scale-110 transition-transform"
              />
            </div>
          </div>

          {/* Address Card 2 */}
          <div className="address-card my-4 p-4 py-6 bg-[#F6F6F6] flex flex-col-1 sm:flex-row justify-between items-start gap-4">
            <input type="radio" className="h-[24px] w-[24px] accent-black" />
            <div className="flex flex-col flex-grow">
              <div className="flex items-center flex-wrap gap-2">
                <h2 className="text-lg font-medium text-[#17183B]">2118 Thornridge</h2>
                <span className="px-2 py-[2px] text-xs bg-black text-white rounded-[4px]">Office</span>
              </div>
              <p className="text-[#17183B]">
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </p>
              <h3 className="text-sm text-[#17183B]">(209) 555-0104</h3>
            </div>

            <div className="flex space-x-2 self-start">
              <img
                src="pencil.png"
                alt="Edit"
                className="h-[18px] w-[18px] cursor-pointer hover:scale-110 transition-transform"
              />
              <img
                src="close.png"
                alt="Delete"
                className="h-[18px] w-[18px] cursor-pointer hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Add New Address Button */}
        <div className="flex items-center justify-center">
  {/* Left dotted line */}
  <div className="flex-1 border-t border-dotted  bg-gradient-to-r from-black to-white "></div>

  {/* Plus Sign */}
  <div className="text-xl font-bold  text-white bg-black w-8 h-8 flex items-center justify-center rounded-full">
    +
  </div>

  {/* Right dotted line */}
  <div className="flex-1 border-t border-dotted  bg-gradient-to-r from-black to-gray-900  "></div>
</div>

        <div className="add-address-section flex justify-center">
          <button className="text-base font-medium text-black">Add New Address</button>
        </div>

        {/* Navigation Buttons */}
        <div className="button-group flex flex-col sm:flex-row justify-end items-center gap-4 lg:mt-12">
          <button onClick={() => router.back()} className="w-full sm:w-auto px-18 py-3 border-2 text-gray-800 rounded-[6px]">Back</button>
          <button onClick={() => router.push("/step-one")} className="w-full sm:w-auto px-18 py-3 bg-black text-white rounded-[6px]">Next</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CheckOutPage;
