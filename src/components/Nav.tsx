"use client"; // Add this at the top of the file

import { useState } from 'react';
import Image from 'next/image'; // Next.js image optimization
import dynamic from 'next/dynamic';

// Dynamically import Hamburger for client-side rendering
const Hamburger = dynamic(() => import('hamburger-react'), { ssr: false });

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:h-20 h-16 flex items-center justify-between shadow-[#1026490F]/10 shadow-md bg-[#ffffff] w-screen">
      {/* Left side: Logo */}
      <div className="flex items-center ml-20">
        <Image src="/assets/logo.jpg" alt="Logo" width={150} height={150} className="w-16 h-16" />
      </div>

      {/* For larger screens: Left-side navigation */}
      <div className="hidden lg:flex items-center ml-6">
        <button className="font-sans font-extralight   text-[#0F1629] mr-12">Menu</button>
        <button className="font-sans font-extralight   text-[#0F1629] mr-12">Home Delivery</button>
        <button className="font-sans font-extralight   text-[#0F1629] mr-12">Locate Us</button>
        <div>
          <button className="font-mono bg-white text-red-700 px-8 py-2 rounded-lg mx-14 hover:bg-black hover:text-white transition-all">
            Explore us
          </button>
        </div>
      </div>

      {/* Right side: Additional nav items */}
      <div className="hidden lg:flex items-center mr-4">
      <button className="font-sans font-extralight   text-[#0F1629] mr-12">Looking for something specific ?</button>

      
      </div>

      {/* For smaller screens */}
      <div className="lg:hidden mr-4">
        <Hamburger toggled={isOpen} toggle={toggleMenu} />
      </div>

      {/* Popup menu for smaller screens */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 right-0 mt-2 mr-2 bg-white rounded-md shadow-md py-5">
          <div className="text-lg font-semibold text-[#0F1629] px-4 py-2">
          <button className="font-sans font-extralight   text-[#0F1629] mr-12">Menu</button>
        <button className="font-sans font-extralight   text-[#0F1629] mr-12">Home Delivery</button>
        <button className="font-sans font-extralight   text-[#0F1629] mr-12">Locate Us</button>
        <div>
          <button className="font-mono bg-white text-red-700 px-8 py-2 rounded-lg mx-14 hover:bg-black hover:text-white transition-all">
            Explore us
          </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
