function Sale() {
	return (
	  <div className="relative ">
		<img src="sale.png" alt="Sale Banner" className="w-full lg:h-auto h-[400px]  " />
		<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
		  <h1 className="  mb-2 font-thin lg:text-[72px]">Big Summer <span className="font-medium lg:text-[72px]">Sale</span></h1>
		  <p className="text-lg mb-4">Grab your cards ASAP</p>
		  <button className="lg:px-12 lg:py-4 px-6 py-2  border-2 border-white text-white rounded-md ">Shop Now</button>
		</div>
	  </div>
	);
  }
  
  export default Sale;
  