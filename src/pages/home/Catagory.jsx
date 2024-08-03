import React from "react";
import { Link } from "react-router-dom";
import CatagoryImg1st from "/Catagory images/Bougain.webp";
import CatagoryImg2nd from "/Catagory images/adenium.webp";
import CatagoryImg3rd from "/Catagory images/hibiscus.jpeg";
import CatagoryImg4th from "/Catagory images/indore.webp";
import CatagoryImg5th from "/Catagory images/winter1.jpg";

const Catagory = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28 bg-[rgba(241,243,204,1)] ">
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className="font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex ">
          Explore varieties of Plants
        </p>
        <div>
          <Link to="/">
            <img
              src={CatagoryImg1st}
              alt=""
              className="w-full hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>
        <div className="md:2-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src={CatagoryImg2nd}
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src={CatagoryImg3rd}
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src={CatagoryImg4th}
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src={CatagoryImg5th}
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
