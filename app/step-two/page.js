"use client";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { useRouter } from "next/navigation";

function StepTwoPage() {
  const router =useRouter();
  return (
    <div>
      <Navbar />
      <hr className="border-t border-gray-300 mb-4 h-[1px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-18">
        {/* Step Progress Section */}
        <div className="flex flex-col-3 lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
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


          {/* Step 2 - Active */}
          <div className="step-section group flex items-start space-x-3 text-gray-400 hover:text-black">
  {/* Icon with gray background and white icon, hover turns bg black */}
  <div className="bg-gray-300 group-hover:bg-black p-2 rounded-[18px] transition-colors duration-200">
    <img src="/vector.png" className="h-3 w-3 " />
  </div>

  <div>
    <button onClick={() => router.back("/step-two")}  className="text-[14px] lg:leading-[16px] font-medium">Step 2</button>
    <h1 className="lg:text-[19px] font-medium leading-[24px]">shipping</h1>
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

        {/* Main Content: Summary & Payment */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Summary Section */}
          <div className="w-full lg:w-1/2 border border-gray-300 p-6 rounded space-y-6">
            <h2 className="text-xl font-semibold">Summary</h2>

            {/* Items */}
            <div className="space-y-4">
              {/* Reusable Item */}
              {[
                { img: "14 pro.png", name: "Apple iPhone 14 Pro Max", price: "$3300" },
                { img: "airpods.png", name: "AirPods Max Silver", price: "$112" },
                { img: "applewatch.png", name: "Apple Watch Series", price: "$223" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded">
                  <div className="flex items-center space-x-4">
                    <img src={item.img} alt={item.name} className="h-14 w-14 object-contain" />
                    <p className="font-medium text-sm">{item.name}</p>
                  </div>
                  <p className="font-semibold">{item.price}</p>
                </div>
              ))}
            </div>

            {/* Address */}
            <div>
              <h3 className="font-semibold mt-4">Address</h3>
              <p>1131 Dusty Townline, Jacksonville, TX 40322</p>

              <h3 className="font-semibold mt-4">Shipping Method</h3>
              <p>Free</p>
            </div>

            {/* Totals */}
            <div className="pt-4 border-t mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <p>Subtotal</p>
                <p>$3635</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Estimated Tax</p>
                <p>$50</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Shipping & Handling</p>
                <p>$0</p>
              </div>
              <div className="flex justify-between font-semibold text-base">
                <p>Total</p>
                <p>$3685</p>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded space-y-6 ">
            <h2 className="text-xl font-semibold">Payment Method</h2>

            <div className="flex space-x-6 text-gray-400">
              <span className="cursor-pointer hover:text-black hover:underline">Credit Card</span>
              <span className="cursor-pointer hover:text-black hover:underline">PayPal</span>
              <span className="cursor-pointer hover:text-black hover:underline">PayPal Credit</span>
            </div>

            <img src="card.png" alt="Card options" className="w-full max-w-md h-auto" />

            <div className="space-y-4">
              <input type="text" placeholder="Cardholder Name" className="w-full py-4 px-3 border border-gray-300 rounded" />
              <input type="text" placeholder="Card Number" className="w-full py-4 px-3 border border-gray-300 rounded" />
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Expiration Date (MM/YY)" className="w-full py-4 px-3 border border-gray-300 rounded" />
                <input type="text" placeholder="CVV" className="w-full py-4 px-3 border border-gray-300 rounded" />
              </div>
            </div>

            <label className="inline-flex items-center">
              <input type="checkbox" className="mr-2 accent-black" /> Same as billing address
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 p-4">
          <button onClick={() => router.back()}  className="px-16 py-3 border text-gray-800 rounded">Back</button>
          <button  onClick={() => router.push("/step-two")} className="px-16 py-3 bg-black text-white rounded">Pay</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default StepTwoPage;
