"use client"
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenu = () => {
    setToggle((prev) => !prev); 
  };
  return (
    <>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded-lg text-white">
              <Link href="/" className="text-lg font-bold">
                Sadaf Portfolio
              </Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link
                href="/"
                className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium duration-300"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium duration-300"
              >
                Blog
              </Link>
              <Link
                href="/services"
                className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium duration-300"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium duration-300"
              >
                Portfolio
              </Link>
              <Link
                href="/testimonial"
                className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium duration-300"
              >
                Testimonial
              </Link>
              <Link
                href="/contact"
                className=" text-sm font-bold duration-300 bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 rounded-lg"
              >
                Contact
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden cursor-pointer " onClick={handleMenu}>
              <AlignJustify />
            </div>
          </div>
        </div>

        {toggle && (<div id="mobile-menu" className="md:hidden block">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center w-full mx-auto">
            <Link
              href="/"
              className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/testimonial"
              className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Testimonial
            </Link>
            <Link
              href="/contact"
              className="block text-base bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 rounded-lg font-bold "
            >
              Contact
            </Link>
          </div>
        </div>)}
      </nav>
    </>
  );
};

export default Navbar;
