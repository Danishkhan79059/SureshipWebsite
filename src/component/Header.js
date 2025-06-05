"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { IoCalculatorOutline } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [Hovered, setHovered] = useState(false);
  const [isopen, setisopen] = useState(false);
  const [hovered, sethovered] = useState(false);
  const [isopens, setisopens] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isservicesOpen, setisServicesOpen] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const [opens, setopens] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <Link href="/">
            <div className="flex-shrink-0 flex items-center gap-2  ml-5">
              <Image
                src="/image/e (1).png"
                alt="Delivery Guy"
                width={2400} // Increased width
                height={1600} // Increased height
                className="object-contain w-[230px] h-auto rounded-xl" // You can adjust width here as well
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="text-gray-700 hover:text-blue-600  flex items-center  px-4 py-2 hover:bg-white rounded-md text-sm font-semibold">
                Services
              </span>

              {/* Dropdown content */}
              {isHovered && (
                <div className="absolute left-0  w-44 bg-white rounded-md shadow-lg z-10">
                  <ul className="py-2 text-sm text-black ">
                    <li>
                      <Link
                        href="/Services/Express-parcel"
                        className="block px-4 py-2 hover:bg-gray-100  dark:hover:text-black"
                      >
                        Express parcel
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Services/warehousing"
                        className="block px-4 py-2 hover:bg-gray-100  dark:hover:text-black"
                      >
                        Warehousing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Services/Truckload"
                        className="block px-4 py-2 hover:bg-gray-100  dark:hover:text-black"
                      >
                        Part Truckload
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Services/Crossborder"
                        className="block px-4 py-2 hover:bg-gray-100  dark:hover:text-black"
                      >
                        Cross Border
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* <div
              className="relative inline-block text-left"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span className="text-gray-700 hover:text-blue-600  px-4 py-2 text-sm font-semibold">
                Solution
              </span>

           
              {Hovered && (
                <div className="absolute left-0  w-44 bg-white rounded-md shadow-lg z-10">
                  <ul className="py-2 text-sm text-black">
                    <li>
                      <a
                        href="/Solution/D2cbrand"
                        className="block px-4 py-2 hover:bg-gray-100  dark:hover:text-black"
                      >
                        D2C
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Solution/B2bbrand"
                        className="block px-4 py-2 hover:bg-gray-100  dark:hover:text-black"
                      >
                        B2B
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Solution/Personal"
                        className="block px-4 py-2 hover:bg-gray-100  dark:hover:text-black"
                      >
                        Personal
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Solution/Courier"
                        className="block px-4 py-2 hover:bg-gray-100  dark:hover:text-black"
                      >
                        Courier
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setisopen(true)}
              onMouseLeave={() => setisopen(false)}
            >
              <span className="text-gray-700 hover:text-blue-600  px-4 py-2 text-sm font-semibold">
                Partner
              </span>

            
              {isopen && (
                <div className="absolute left-0  w-56 bg-white rounded-md shadow-lg z-10 ">
                  <ul className="py-2 text-sm text-black ">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
                      >
                        Franchise Opportunities
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
                      >
                        Delivery Partner
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
                      >
                        Fleet Owner
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div> */}
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => sethovered(true)}
              onMouseLeave={() => sethovered(false)}
            >
              <span className="text-gray-700 hover:text-blue-600  px-4 py-2 text-sm font-semibold">
                company
              </span>

              {hovered && (
                <div className="absolute left-0  w-56 bg-white rounded-md shadow-lg z-10 ">
                  <ul className="py-2 text-sm text-black ">
                    <li>
                      <a
                        href="/aboutus"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/careers"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
                      >
                        Careers
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="/Pressrelease"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
                      >
                        Press release
                      </a>
                    </li> */}
                  </ul>
                </div>
              )}
            </div>
            <Link
              href="/track"
              className="text-gray-700 hover:text-blue-600 text-sm font-semibold"
            >
              Track
            </Link>
            <Link
              href="/support"
              className="text-gray-700 hover:text-blue-600 text-sm font-semibold"
            >
              Support
            </Link>
            <a
              href="https://demo.vizta.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-5 py-2 rounded-md text-sm font-semibold flex items-center gap-2 transition-all hover:opacity-90"
            >
              <FaSignInAlt /> Login/Register
            </a>

            <Link
              href="/RateCalculator"
              className="bg-blue-900 text-white px-5 py-2 rounded-md text-sm font-semibold flex items-center gap-2 transition-all hover:opacity-90"
            >
              <IoCalculatorOutline /> Rate Calculator
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-blue-700"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 bg-white shadow-inner animate-slideDown">
          {/* Services with dropdown toggle */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between text-gray-600 font-medium"
            >
              <span className="flex items-center gap-2">Services</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {servicesOpen && (
              <ul className="mt-2 space-y-1 pl-6 text-gray-700">
                <li>
                  <Link
                    href="/Services/Express-parcel"
                    className="block px-2 py-1 hover:text-blue-600"
                  >
                    Express parcel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Services/warehousing"
                    className="block px-2 py-1 hover:text-blue-600"
                  >
                    Warehousing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Services/Truckload"
                    className="block px-2 py-1 hover:text-blue-600"
                  >
                    Part Truckload
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Services/Crossborder"
                    className="block px-2 py-1 hover:text-blue-600"
                  >
                    Cross Border
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* <div>
            <button
              onClick={() => setisServicesOpen(!isservicesOpen)}
              className="w-full flex items-center justify-between text-gray-600 font-medium"
            >
              <span className="flex items-center gap-2">Solution</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

         
            {isservicesOpen && (
              <ul className="mt-2 space-y-1 pl-6 text-gray-700">
                <li>
                  <a href="#" className="block px-2 py-1 hover:text-blue-600">
                    D2C
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-2 py-1 hover:text-blue-600">
                    B2B
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-2 py-1 hover:text-blue-600">
                    Personal
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-2 py-1 hover:text-blue-600">
                    Courier
                  </a>
                </li>
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => setisOpen(!isOpen)}
              className="w-full flex items-center justify-between text-gray-600 font-medium"
            >
              <span className="flex items-center gap-2">Partner</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

         
            {isOpen && (
              <ul className="mt-2 space-y-1 pl-6 text-gray-700">
                <li>
                  <a href="#" className="block px-2 py-1 hover:text-blue-600">
                    Franchise Opportunities
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-2 py-1 hover:text-blue-600">
                    Delivery Partner
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-2 py-1 hover:text-blue-600">
                    Fleet Owner
                  </a>
                </li>
              </ul>
            )}
          </div> */}
          <div>
            <button
              onClick={() => setOpen(!Open)}
              className="w-full flex items-center justify-between text-gray-600 font-medium"
            >
              <span className="flex items-center gap-2">Company</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {Open && (
              <ul className="mt-2 space-y-1 pl-6 text-gray-700">
                <li>
                  <a
                    href="/aboutus"
                    className="block px-2 py-1 hover:text-blue-600"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="block px-2 py-1 hover:text-blue-600"
                  >
                    Careers
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/Pressrelease"
                    className="block px-2 py-1 hover:text-blue-600"
                  >
                    Press release
                  </a>
                </li> */}
              </ul>
            )}
          </div>
          <Link
            href="/track"
            className="block text-gray-700 hover:text-blue-600"
          >
            Track
          </Link>
          <Link
            href="/support"
            className="block text-gray-700 hover:text-blue-600"
          >
            Support
          </Link>
          <a
            href="https://demo.vizta.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 w-1/2 text-white px-5 py-2 rounded-md text-sm font-semibold flex items-center gap-2 transition-all hover:opacity-90"
          >
            <FaSignInAlt /> Login/Register
          </a>

          <Link
            href="/RateCalculator"
            className="block w-1/2 bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-semibold text-center transition-all hover:opacity-90"
          >
            <IoCalculatorOutline className="inline mr-2" />
            Rate calculator
          </Link>
        </div>
      )}
    </nav>
  );
}
