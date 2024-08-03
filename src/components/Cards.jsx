import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const Cards = ({ filteredItems }) => {
  const dispatch = useDispatch();
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm">
      {filteredItems.map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img
              src={item.image}
              alt=""
              className="mx-auto h-[320px] object-contain w-full hover:scale-105 transition-all duration-300"
            />
          </Link>
          <div className="mt-4 px-4 ">
            <h4 className="text-base font-semibold mb-2">{item.title}</h4>
            <button
              onClick={() => {
                dispatch(addToCart({ ...item, quantity: 1 }));
              }}
              className="hover:bg-[#b6ba5a] bg-[rgba(86,88,46,1)]  px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2"
            >
              <HiShoppingBag /> Add to Cart
            </button>
            <div className="flex justify-between">
              <p className="text-black/50">{item.category}</p>
              <p className="font-semibold">₹{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
