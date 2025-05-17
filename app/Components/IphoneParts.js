import React from "react";

const IphoneParts = () => {
  const partsDetails = [
    { part: "Screen Diagonal", detail: "6.7" },
    { part: "Screen Resolution", detail: "2796 × 1234" },
    { part: "Screen Refresh Rate", detail: "120 Hz" },
    { part: "Pixel Density", detail: "460 ppi" },
    { part: "Screen Type", detail: "OLED" },
    {
      part: "Storage",
      detail: "NAND Flash (64GB, 128GB, 256GB, 512GB, 1TB) - Used for saving photos, apps, videos.",
    },
    { part: "CPU", detail: "A16 Bionic" },
    { part: "Number of Cores", detail: "6" },
  ];

  return (
    <div className="bg-[#FAFAFA] h-[1144px] py-24">
    <div className=" p-6 max-w-4xl mx-auto bg-[#FFFFFF]   ">
      <h2 className="text-[24px] leading-[32px] font-medium mb-4 capitalize">details</h2>
      <p className="text-[14px] leading-[24px] font-medium text-[#9D9D9D] ">Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>
      <h1 className="text-[20px] leading-[24px] font-medium py-6 ml-2 capitalize">screen</h1>
      <div className="space-y-4">
        {partsDetails.map((part, index) => (
          <div
            key={index}
            className="flex justify-between items-start bg-white p-4 border-b-2 border-gray-200"
          >
            <span className="text-gray-700 font-medium">{part.part}</span>
            <span className="text-gray-600 text-right max-w-xs">{part.detail}</span>
            
          </div>
        ))}
        <div className="flex  justify-center">
        <button className="  px-8 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-200">
  View more
</button>
</div>

      </div>
    </div>
    </div>
  );
};

export default IphoneParts;
