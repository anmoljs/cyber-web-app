'use client'

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-16">
      <div className="lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-32 gap-8 md:gap-6 sm:gap-2 ">

        {/* Logo & Description */}
        <div>
          <img src="Logo.png" alt="Logo" className="invert mb-4" />
          <p className="text-sm text-gray-400 mb-6">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than...
          </p>

          {/* Social Icons */}
          <div className="flex space-x-8 lg:mt-24">
            <a href="#"><FaFacebookF className="w-6 h-6 text-white hover:text-gray-300" /></a>
            <a href="#"><FaInstagram className="w-6 h-6 text-white hover:text-gray-300" /></a>
            <a href="#"><FaTwitter className="w-6 h-6 text-white hover:text-gray-300" /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-8 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Bonus Program</a></li>
            <li><a href="#" className="hover:text-white">Gift Cards</a></li>
            <li><a href="#" className="hover:text-white">Credit and Payments</a></li>
            <li><a href="#" className="hover:text-white">Service and Contract</a></li>
            <li><a href="#" className="hover:text-white">Non-Cash Account</a></li>
            <li><a href="#" className="hover:text-white">Payments</a></li>
          </ul>
        </div>

        {/* Assistance */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Assistance to the Buyer</h3>
          <ul className="space-y-8 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Find and Order</a></li>
            <li><a href="#" className="hover:text-white">Terms of Delivery</a></li>
            <li><a href="#" className="hover:text-white">Exchange and Returns of Goods</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
