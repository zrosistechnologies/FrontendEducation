'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LogIn, UserPlus, Search } from "lucide-react";


export default function NavMenu() {
  const [dropdown, setDropdown] = useState("");
  const handleMouseEnter = (menu: string) => setDropdown(menu);
  const handleMouseLeave = () => setDropdown("");
  
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className=" mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logologin.jpeg" // ✅ replace with your logo path (e.g., /logo.png in public folder)
            alt="AI Skills Logo"
            width={100}
            height={40}
            className="mr-2"
          />
         </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-black relative">

          {/* Courses Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("courses")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-blue-600 transition text-gray-700 text-base">
              Courses ▾
            </button>
            {dropdown === "courses" && (
              <div className="absolute top-full left-0 w-48 bg-white border rounded shadow-md z-50">
                <Link href="/courses/ai" className="block px-4 py-2 hover:bg-gray-100">
                  AI Course
                </Link>
                <Link href="/courses/ml" className="block px-4 py-2 hover:bg-gray-100">
                  Machine Learning
                </Link>
                <Link href="/courses/ds" className="block px-4 py-2 hover:bg-gray-100">
                  Data Science
                </Link>
              </div>
            )}
          </div>

          {/* Certifications Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("certifications")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-blue-600 transition text-gray-700 text-base">
              Certifications ▾
            </button>
            {dropdown === "certifications" && (
              <div className="absolute top-full left-0 w-56 bg-white border rounded shadow-md z-50">
                <Link href="/certifications/ai" className="block px-4 py-2 hover:bg-gray-100">
                  AI Certification
                </Link>
                <Link href="/certifications/cloud" className="block px-4 py-2 hover:bg-gray-100">
                  Cloud Certification
                </Link>
              </div>
            )}
          </div>

          {/* Masters Program Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("masters")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-blue-600 transition text-gray-700 text-base">
              Masters Program ▾
            </button>
            {dropdown === "masters" && (
              <div className="absolute top-full left-0 w-60 bg-white border rounded shadow-md z-50">
                <Link href="/masters/data-science" className="block px-4 py-2 hover:bg-gray-100">
                  Master in Data Science
                </Link>
                <Link href="/masters/ai" className="block px-4 py-2 hover:bg-gray-100">
                  Master in AI & ML
                </Link>
              </div>
            )}
          </div>

          {/* Static Links */}
          <Link href="/blog" className="hover:text-blue-600 text-gray-700 text-base transition">
            Blog
          </Link>
          <Link href="/about" className="hover:text-blue-600 text-gray-700 text-base transition ">
            About
          </Link>
        </nav>
        {/* Input with icon on the right */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="pl-4 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
          <Search className="absolute right-3 top-3 text-gray-400 w-4 h-4" />
        </div>

        {/* CTA Button */}

        {/* CRM & Register with Icons */}
        <div className="hidden md:flex gap-4">
          <Link href="/crm" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <LogIn size={18} /> Login to CRM
          </Link>
          <Link href="/register" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <UserPlus size={18} /> Register
          </Link>
        </div>
        <button className="bg-gradient-to-br from-[#931b27] via-[#b02e45] to-[#7d226b] text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </header>
  );
}
