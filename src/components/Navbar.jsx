import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { selectTotalQuantity } from "../redux/slices/CartSlice"; // Adjust import path as necessary
import logo from "/lgo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalQuantity = useSelector(selectTotalQuantity); // Get total quantity from Redux

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about" },
    { title: "Shop", path: "/shop" },
    { title: "Services", path: "/services" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[rgba(241,243,204,1)] max-w-screen-2xl xl:px-28 px-4">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </a>

        {/* Navigation Items */}
        <div>
          <ul className="pl-24 lg:flex items-center justify-between gap-12 text-Black hidden">
            {navItems.map(({ title, path }) => (
              <li
                key={title}
                className="text-green-800 hover:text-green-950 font-semibold"
              >
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-items-center gap-8">
          {/* Search Bar */}
          <div className="flex justify-items-center gap-1">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-lg shadow-sm border border-gray-300 focus:outline-none"
                placeholder="Search for plants..."
              />
              <div className="absolute left-0 inset-y-0 flex items-center pl-3">
                <CiSearch className="text-green-800 hover:text-green-950" />
              </div>
            </div>
          </div>
          {/* Account and Shopping Button */}
          <div className="text-lg text-black sm:flex items-center gap-8 hidden">
            <Link to="/login" className="flex items-center gap-2">
              <FaUser className="text-green-800 hover:text-green-950" />
            </Link>
            <Link to="/cart" className="flex items-center gap-2">
              <FaShoppingBag className="text-green-800 hover:text-green-950" />
              <sup className="font-semibold text-green-800">
                {totalQuantity}
              </sup>
            </Link>
          </div>
        </div>

        {/* Navbar for Small Devices */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-black" />
            ) : (
              <FaBars className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </nav>

      {/* Only Mobile Device Menu Items */}
      <div>
        <ul
          className={`bg-green-600 text-white px-4 py-2 rounded ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className="hover:text-orange-500 my-3 cursor-pointer"
            >
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
