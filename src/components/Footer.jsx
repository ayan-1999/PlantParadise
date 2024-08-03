import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "/lgo.png"

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[rgba(172,176,92,1)] pt-1 pb-1">
        {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px] ">
            <Link to="/" >
              <img src={logo} alt="" className="w-16 h-16"/>
            </Link>
            <p className="my-8 text-Black/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-white" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-white" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-white" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CATALOG</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-white">
               Gardening Kits
              </Link>
              <Link to="/" className="text-sm block hover:text-white">
                Green Nets
              </Link>
              <Link to="/" className="text-sm block hover:text-white">
                Plant Food
              </Link>
              <Link to="/" className="text-sm block hover:text-white">
                Liquid Fertilizer
              </Link>
              <Link to="/" className="text-sm block hover:text-white">
                Cocopeat
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-white">
                Contact Us
              </Link>
              <Link to="/" className="text-sm block hover:text-white">
                Track Your Order
              </Link>
              <Link to="/" className="text-sm block hover:text-white">
                Product Care & Repair
              </Link>
              <Link to="/" className="text-sm block hover:text-white">
                Book an Appointment
              </Link>
              <Link to="/" className="text-sm block hover:text-white">
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-white">
                Our Producers
              </Link>
              <Link to="/" className="text-sm block hover:text-white">
                Sitemap
              </Link>
              <Link to="/" className="text-sm block hover:text-white">
                FAQ
              </Link>
              <Link to="/" className="text-sm block hover:text-white">
                About Us
              </Link>
              <Link to="/" className="text-sm block hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-Black">
      <p className="text-white text-center items-center py-3">© {currentYear} abcd, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;