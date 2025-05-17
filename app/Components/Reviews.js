import React from "react";

const reviews = [
  {
    name: "Grace Carey",
    rating: 5,
    comment:
      "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
  },
  {
    name: "Ronald Richards",
    rating: 4,
    comment:
      "This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! So if you want a phone that’s going to last, grab an iPhone 14 Pro Max and get several cords and plugs.",
  },
  {
    name: "Darcy King",
    rating: 4,
    comment:
      "I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update. Otherwise, love this phone! Came in great condition.",
  },
];

const pollData = [
  { label: "Excellent", percentage: 65 },
  { label: "Good", percentage: 25 },
  { label: "Average", percentage: 13 },
  { label: "Below Average", percentage: 11 },
  { label: "Poor", percentage: 10 },
];

const Reviews = () => {
  return (
    <div className="max-w-6xl mx-auto p-12 space-y-10 mt-12">
      <h1 className="capitalize font-medium text-[24px] px-4">Reviews</h1>

      {/* Rating Summary & Poll */}
      <div className="flex flex-col md:flex-row justify-center gap-10  mx-auto">
  {/* Rating Summary Box */}
  <div className="bg-gray-200 rounded-[25px] h-[192px] w-full max-w-[200px] text-center space-y-1">
    <h1 className="text-[56px] font-medium">4.8</h1>
    <h2 className="text-[16px]">of 125 reviews</h2>
    <div className="flex justify-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.264 3.89a1 1 0 00.95.69h4.084c.969 0 1.371 1.24.588 1.81l-3.305 2.4a1 1 0 00-.364 1.118l1.264 3.89c.3.921-.755 1.688-1.538 1.118l-3.305-2.4a1 1 0 00-1.176 0l-3.305 2.4c-.783.57-1.838-.197-1.538-1.118l1.264-3.89a1 1 0 00-.364-1.118L2.88 9.317c-.783-.57-.38-1.81.588-1.81h4.084a1 1 0 00.95-.69l1.264-3.89z" />
        </svg>
      ))}
    </div>
  </div>

  {/* Poll Section */}
  <div className="w-full max-w-[876px] space-y-4">
    {pollData.map((item, index) => (
      <div key={index}>
        <div className="flex justify-between mb-1">
          <span className="text-[15px] leading-[24px] font-medium text-gray-700">
            {item.label}
          </span>
          <span className="text-[15px] leading-[24px] font-medium text-gray-700">
            {item.percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-yellow-400 h-3 rounded-full"
            style={{ width: `${item.percentage}%` }}
          />
        </div>
      </div>
    ))}
    <div className=" mt-4 max-w-[876px] w-full">
      <button className=" w-full border border-gray-200 rounded-[7px] capitalize py-4">
        Leave a comment
      </button>
    </div>
  </div>
</div>


      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-100 rounded-[10px] p-4">
            <div className="flex items-start gap-3 mb-2">
              {/* User Image */}
              <img src="user pic.png" alt="User" className="w-10 h-10 rounded-full" />
              {/* Name and Stars */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {review.name}
                </h4>
                <div className="flex mt-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.264 3.89a1 1 0 00.95.69h4.084c.969 0 1.371 1.24.588 1.81l-3.305 2.4a1 1 0 00-.364 1.118l1.264 3.89c.3.921-.755 1.688-1.538 1.118l-3.305-2.4a1 1 0 00-1.176 0l-3.305 2.4c-.783.57-1.838-.197-1.538-1.118l1.264-3.89a1 1 0 00-.364-1.118l-3.305-2.4c-.783-.57-.38-1.81.588-1.81h4.084a1 1 0 00.95-.69l1.264-3.89z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[#7E7E7E] text-[15px] font-medium px-12">
              {review.comment}
            </p>
          </div>
        ))}

        {/* Extra Images */}
        <div className="flex flex-col-2 md:flex-row gap-2">
          <img src="reviewone.png" alt="review img 1" className="rounded-md h-[88px] w-[118px]" />
          <img src="reviewtwo.png" alt="review img 2" className="rounded-md h-[88px] w-[118px]" />
        </div>
      </div>
    </div>
    
  );
};

export default Reviews;
