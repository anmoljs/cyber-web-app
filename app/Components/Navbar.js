'use client';

import Link from "next/link";
import { useState } from "react";
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-6 max-w-6xl mx-auto py-6 md:px-12  flex justify-between items-center relative">
      {/* Logo */}
      <div className="w-[65px]">
        <img src="/Logo.png" alt="Logo" />
      </div>

      {/* Search Bar */}
      <div className="hidden lg:block relative">
        <input
          type="text"
          placeholder="Search"
          className="px-8 py-2 w-[372px] h-[56px] rounded-[8px]  bg-gray-200  pl-10 "
        />
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-black" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {/* Navigation Links & Icons (Desktop) */}
      <div className="hidden lg:flex items-center space-x-12">
        <Link href="/" className="text-gray-400 hover:text-black">Home</Link>
        <Link href="/about" className="text-gray-400 hover:text-black">About</Link>
        <Link href="/contact" className="text-gray-400 hover:text-black">Contact</Link>
        <Link href="/blog" className="text-gray-400 hover:text-black">Blog</Link>

        <div className="flex items-center space-x-8">
          <img src="/wishlist.png" alt="Wishlist" className="w-6 h-6 cursor-pointer" />
          <img src="/cart.png" alt="Cart" className="w-6 h-6 cursor-pointer" />
          <img src="/user.png" alt="User" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white z-10 flex flex-col items-center gap-6 py-6 shadow-md lg:hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-8 py-2 w-[90%] rounded-[8px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 pl-10"
          />
          <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-black">About</Link>
          <Link href="/contact-us" className="text-gray-700 hover:text-black">Contact</Link>
          <Link href="/blog" className="text-gray-700 hover:text-black">Blog</Link>
          <div className="flex items-center space-x-6 mt-2">
          <Link href="/wishlist" prefetch={true}>
            <img src="/wishlist.png" alt="Wishlist" className="w-6 h-6 cursor-pointer" />
            </Link>
            <Link href="/cart" prefetch={true}>
            <img src="/cart.png" alt="Cart" className="w-6 h-6 cursor-pointer" />
            </Link>
            <Link href="/profile" prefetch={true}>
            <img src="/user.png" alt="User" className="w-6 h-6 cursor-pointer" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
