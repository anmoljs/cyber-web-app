'use client'; // Very important for using hooks

import { useRouter } from 'next/navigation';

function Header() {
	const router = useRouter();
	return (
	  <header className="flex flex-col lg:flex-row items-center justify-between   bg-[#211C24]">
		{/* Text Content */}
		<div className=" text-center lg:text-left space-y-4 py-12 mx-auto ">
		  <h2 className="text-xl font-medium text-white">Pro. Beyond.</h2>
		  <h1 className="text-4xl md:text-7xl font-thin text-white">iPhone 14 <span className="font-medium">Pro</span></h1>
		  <p className="text-white max-w-md">
			Created to change everything for the better. For everyone.
		  </p>

		  <button onClick={() => router.push("/home/shop-now")} className="mt-4 px-8 py-3  border-white border-2  text-white rounded-[6px] w-[191px] h-[56px] ">
			Shop Now
		  </button>
		</div>
  
		{/* Image Content */}
		<div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
		  <img src="/phone.png" alt="iPhone 14 Pro" className="w-[300px] md:w-[406px]" />
		</div>
	  </header>
	);
  }
  
  export default Header;
  