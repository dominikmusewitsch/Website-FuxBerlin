"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 backdrop-blur-md bg-white/70 rounded-xl shadow-lg transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex items-center text-black font-bold text-xl space-x-2">
          <Image src="/favicon.png" alt="sleeping fox" width={40} height={40} />
          <span>@fux_berlin</span>
        </div>

        {/* Navigation */}
        <ul className="flex space-x-6">
          <li className="text-black hover:text-gray-600 cursor-pointer transition">
            About
          </li>
          <li className="text-black hover:text-gray-600 cursor-pointer transition">
            Projects
          </li>
          <li className="text-black hover:text-gray-600 cursor-pointer transition">
            Service
          </li>
          <li className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer transition">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
