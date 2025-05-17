function NewSection() {
	return (
	  <div className="lg:flex">
		{/* Left Section */}
		<div className="lg:flex flex-col">
		  {/* PlayStation Banner */}
		  <div className=" relative group flex flex-col lg:flex-row items-center lg:items-start lg:h-[328px] lg:w-[780px] ">
		  <img
		  src="other.png"
		  className="block lg:hidden max-w-[200px] h-[200px] object-contain"
/>
			<img
			  src="/PlayStation.png"
			  className="hidden lg:block lg:w-[360px]  lg:h-[328px] lg:object-cover"
			  alt="PlayStation 5"
			/>
			<div className="lg:flex flex-col lg:justify-center lg:py-24 p-4 lg:p-0">
			  <h1 className="text-4xl mb-2 font-medium text-center lg:text-left">PlayStation 5</h1>
			  <p className="text-gray-600 text-lg lg:leading-8 text-center lg:text-left">
				Powerful CPUs, GPUs and integrated SSD redefine playstation experience.
			  </p>
			</div>
			<div className="absolute  bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 z-10" />
		  </div>
  
		  {/* Headphone + Remote in Row */}
		  <div className="lg:flex">
			{/* Headphone */}
			<div className="relative group flex flex-col lg:flex-row items-center lg:items-start lg:h-[272px] lg:w-[360px] bg-gray-200 ">
			<img
  src="copy.png"
  className="block lg:hidden w-[192px] h-[200px] object-contain"
/>
			  <img
				src="headphone.png"
				className="lg:w-[104px]  lg:h-[273px] object-cover hidden lg:block "
				alt="AirPods Max"
			  />
			  
			  <div className="p-8 lg:flex flex-col justify-center">
				<h1 className="font-light lg:text-5xl text-4xl text-center lg:text-left">Apple AirPods <span className="font-medium">Max</span></h1>
				<p className="text-gray-600 text-lg text-center lg:text-left">
				  Computational audio.listen its powerfull.
				</p>
			  </div>
			  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 z-10" />
			</div>
  
			{/* Remote */}
			<div className=" relative group flex flex-col lg:flex-row items-center lg:items-start lg:h-[272px] lg:w-[420px]">
			<img
  src="import.png"
  className="block lg:hidden max-w-[200px] min-h-[200px] object-contain"
/>
			  <img
				src="remote.png"
				className="w-[130px]  lg:h-[190px] hidden lg:block lg:object-cover"
				alt="Vision Pro"
			  />
			  <div className="p-6  lg:flex flex-col justify-center">
				<h1 className="font-light text-4xl text-center lg:text-left">Apple Vision <span className="font-medium">Pro</span></h1>
				<p className="text-gray-600 text-lg text-center lg:text-left">
				  Immersive way to experience entertainment.
				</p>
			  </div>
			  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 z-10" />
			</div>
		  </div>
		</div>
  
		{/* Right Side - MacBook */}
		<div className=" relative group flex flex-col lg:flex-row items-center lg:py-12 lg:items-start bg-gray-200 lg:h-[600px]  lg:max-w-[750px]  ">
		  <div className="lg:flex">
		  <img
  src="each.png"
  className="block lg:hidden  min-h-[200px] min-w-[380px] object-contain ml-4 md:mx-48 "
/>
			{/* Text Left */}
			<div className="lg:w-1/2 lg:p-12 lg:flex flex-col justify-center ">
			  <h1 className="font-thin text-6xl mb-2 text-center lg:text-left">MacBook <span className="font-medium">Air</span></h1>
			  <p className="text-gray-600 lg:text-xl font-bold mb-4 lg:leading-8 text-center lg:text-left">
				The new 15-inch MacBook Air makes room for more of what you love
				with a spacious Liquid Retina display.
			  </p>
			  
			  <button className="mt-6 px-8 py-3  text-black border-2 border-black rounded-[8px] lg:px-0 m-28 lg:m-0  md:px-24 ">
				Shop Now
			  </button>
			</div>
  
			{/* Image Right */}
			<div className="flex justify-center items-center">
			  <img
				src="macbook.png"
				className=" lg:h-[502px] w-[292px] lg:object-cover   hidden lg:block"
				alt="MacBook Air"
			  />
			</div>
		  </div>
		  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 z-10" />
		</div>
	  </div>
	);
}
  
export default NewSection;