import React from "react";
import bannerImg1 from "/front page images/image1.avif";
import bannerImg2 from "/front page images/image4.avif";
import { HiShoppingBag } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import bgImg from "/background png/image2_files/1.jpg"

const Banner = () => {
  return (
    <div className="bg-[rgba(241,243,204,1)]  py-4 xl:px-28 px-4">
      {/* <div style={{backgroundImage:url(bgImg)}}></div> */}
      <div
        className=" flex flex-col md:flex-row-reverse justify-between items-center gap-8 mb-16"
      >
        {/*img */}
        <div className="md:w-1/2">
          <img src={bannerImg1} alt="" />
        </div>

        {/*text */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-xl mb-5 text-[#454624]">Collection</h1>
          <p className="text-xl mb-7 text-[rgba(86,88,46,1)]">
            Welcome to Plant Paradise, your ultimate online destination for all
            things green and beautiful! Whether you're a seasoned gardener or a
            beginner looking to add a touch of nature to your home or office,
            our curated collection of plants offers something for everyone.
            <br />
            <br />
            From lush indoor plants to vibrant outdoor varieties, we provide
            high-quality plants, expert gardening advice, and a passion for
            nature's beauty.
          </p>

          <NavLink to="/shop">
            <button
              className="hover:bg-[#b6ba5a] bg-[rgba(86,88,46,1)] text-white
              px-6 py-2  font-semibold rounded-sm flex items-center gap-2"
            >
              <HiShoppingBag /> SHOP NOW
            </button>
          </NavLink>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row-reverse justify-between items-center gap-8  mb-16">
        {/*text */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-xl mb-5 text-[#454624]">Collection</h1>
          <p className="text-xl mb-7 text-[rgba(86,88,46,1)]">
            Welcome to Plant Paradise, your ultimate online destination for all
            things green and beautiful! Whether you're a seasoned gardener or a
            beginner looking to add a touch of nature to your home or office,
            our curated collection of plants offers something for everyone.
            <br />
            <br />
            From lush indoor plants to vibrant outdoor varieties, we provide
            high-quality plants, expert gardening advice, and a passion for
            nature's beauty.
          </p>

          <NavLink to="/shop">
            <button
              className="hover:bg-[#b6ba5a] bg-[rgba(86,88,46,1)]
              px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2"
            >
              <HiShoppingBag /> SHOP NOW
            </button>
          </NavLink>
        </div>
        {/*img */}
        <div className="md:w-1/2">
          <img src={bannerImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
