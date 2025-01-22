"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    services: false,
    forex: false,
    comex: false,
    combo: false,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicesRef = useRef(null);

  const toggleDropdown = (name: "services" | "forex" | "comex" | "combo") => {
    setDropdowns((prev) => {
      if (name === "services") {
        return {
          ...prev,
          services: !prev.services,
          forex: false,
          comex: false,
          combo: false,
        };
      } else {
        return {
          services: prev.services,
          forex: name === "forex" ? !prev.forex : false,
          comex: name === "comex" ? !prev.comex : false,
          combo: name === "combo" ? !prev.combo : false,
        };
      }
    });
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    // const servicesRef = useRef<HTMLDivElement>(null);
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current && !(servicesRef.current as HTMLDivElement).contains(event.target as Node)) {
        setDropdowns((prev) => ({
          ...prev,
          services: false,
          forex: false,
          comex: false,
          combo: false,
        }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-green-700 shadow-md z-[1000] container mx-auto">
      <div className="container mx-auto px-4 flex items-center justify-evenly py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src="/logo.png" alt="Logo" className="h-10 w-auto" /> */}
          <div>
            <h1 className="md:text-4xl text-2xl font-bold text-white">
              TRADEOXI
            </h1>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white text-2xl lg:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links for Desktop */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex items-center space-x-6 z-[1000] w-full lg:w-auto bg-green-700 lg:bg-transparent absolute lg:static top-16 left-0 lg:top-auto lg:left-auto px-4 lg:px-0 py-4 lg:py-0`}
        >
          <Link
            href="/"
            className="block text-white font-semibold hover:bg-green-500 hover:rounded-full py-2 px-4 hover:transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/AboutUs"
            className="block text-white font-semibold hover:bg-green-500 hover:rounded-full py-2 px-4 hover:transition-all duration-300"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className=" text-white font-semibold hover:bg-green-500 hover:rounded-full py-2 px-4 hover:transition-all duration-300 flex items-center space-x-1"
            >
              <span>Services</span> <FaChevronDown />
            </button>
            {(dropdowns.services ||
              dropdowns.forex ||
              dropdowns.comex ||
              dropdowns.combo) && (
              <div className="absolute bg-green-500 shadow-md rounded-md mt-2 w-48">
                {/* Forex Plan */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("forex")}
                    className="px-4 py-2 text-white hover:bg-green-600 flex items-center justify-between w-full text-left"
                  >
                    Forex Plan <FaChevronDown />
                  </button>
                  {dropdowns.forex && (
                    <div className="absolute left-full top-0 bg-green-500 shadow-md rounded-md mt-0 ml-2 w-48">
                      <Link
                        href="/Basicforex"
                        className="block px-4 py-2 text-white hover:bg-green-600"
                      >
                        Basic Forex Plan
                      </Link>
                      <Link
                        href="/PremiumForex"
                        className="block px-4 py-2 text-white hover:bg-green-600"
                      >
                        Premium Forex Plan
                      </Link>
                      <Link
                        href="/Eliteforex"
                        className="block px-4 py-2 text-white hover:bg-green-600"
                      >
                        Elite Forex Plan
                      </Link>
                    </div>
                  )}
                </div>

                {/* Comex Plan */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("comex")}
                    className="px-4 py-2 text-white hover:bg-green-600 flex items-center justify-between w-full text-left"
                  >
                    Comex Plan <FaChevronDown />
                  </button>
                  {dropdowns.comex && (
                    <div className="absolute left-full top-0 bg-green-500 shadow-md rounded-md mt-0 ml-2 w-48">
                      <Link
                        href="/BasicComex"
                        className="block px-4 py-2 text-white hover:bg-green-600"
                      >
                        Basic Comex Plan
                      </Link>
                      <Link
                        href="/PremiumComex"
                        className="block px-4 py-2 text-white hover:bg-green-600"
                      >
                        Premium Comex Plan
                      </Link>
                      <Link
                        href="/EliteComex"
                        className="block px-4 py-2 text-white hover:bg-green-600"
                      >
                        Elite Comex Plan
                      </Link>
                    </div>
                  )}
                </div>

                {/* Combo Plan */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("combo")}
                    className="px-4 py-2 text-white hover:bg-green-600 flex items-center justify-between w-full text-left"
                  >
                    Combo Plan <FaChevronDown />
                  </button>
                  {dropdowns.combo && (
                    <div className="absolute left-full top-0 bg-green-500 shadow-md rounded-md mt-0 ml-2 w-48">
                      <Link
                        href="/ComboBasic"
                        className="block px-4 py-2 text-white hover:bg-green-600"
                      >
                        Basic Combo Plan
                      </Link>
                      <Link
                        href="/ComboPremium"
                        className="block px-4 py-2 text-white hover:bg-green-600"
                      >
                        Premium Combo Plan
                      </Link>
                      <Link
                        href="/EliteCombo"
                        className="block px-4 py-2 text-white hover:bg-green-600"
                      >
                        Elite Combo Plan
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/ContactUS"
            className="block text-white font-semibold hover:bg-green-500 hover:rounded-full py-2 px-4 hover:transition-all duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="/Blog"
            className="block text-white font-semibold hover:bg-green-500 hover:rounded-full py-2 px-4 hover:transition-all duration-300"
          >
            Blogs
          </Link>
          <button className="block bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200">
            Payment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
