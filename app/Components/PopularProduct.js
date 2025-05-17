"use client";

function PopularProduct() {
  const products = [
    {
      image: "rado.png",
      title: "Popular Products",
      subtitle: "iPad combines a beautiful 10.2-inch Retina display and tremendous capability with unmatched versatility and ease of use.",
    },
    {
      image: "3phones.png",
      title: "iPad Pro",
      subtitle: "iPad combines a beautiful 10.2-inch Retina display and tremendous capability with unmatched versatility and ease of use.",
    },
    {
      image: "foldable.png",
      title: "samsung galaxy",
      subtitle: "iPad combines a beautiful 10.2-inch Retina display and tremendous capability with unmatched versatility and ease of use.",
    },
    {
      image: "Macbook 1.png",
      title: "Macbook pro",
      subtitle: "iPad combines a beautiful 10.2-inch Retina display and tremendous capability with unmatched versatility and ease of use.",
    },
  ];

  return (
    <div className=" py-4 lg:min-w-7xl lg:mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:min-w-[260px] lg:gap-0 gap-2 ">
	  
        {products.map((product, i) => (
          <div key={i} className=" bg-[#F9F9F9] lg:text-center h-[640px]  ">
			
            <img
              src={product.image}
              alt={product.title}
              className="w-[360px] h-[366px] object-contain mb-4"
            />
            <h3 className="font-light text-[33px] mb-2 capitalize lg:flex lg:items-start px-8">{product.title}</h3>
            <p className="text-gray-600 text-[14px] font-medium lg:px-4 px-8">{product.subtitle}</p>
            <button className="mt-4 border-2 border-black text-black rounded-[8px] px-12 py-4 ml-8 lg:ml-0">shop Now</button>
          </div>
        ))}
      </div>
      
	  </div>
  );
}

export default PopularProduct;