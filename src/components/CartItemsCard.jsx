import React from "react";
import { ImBin2 } from "react-icons/im";

const CartItemsCard = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4 mb-4 rounded-lg">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-cover rounded-md"
      />
      <div className="flex flex-col flex-grow ml-4">
        <div className="flex justify-evenly">
          <span className="text-xl font-semibold text-green-900">
            {item.title}
          </span>
          <span className="text-gray-600">₹{item.price.toFixed(2)}</span>
        </div>
        <div className="text-gray-600 flex items-center justify-center">{item.category}</div>
        <div className="flex items-center justify-around mt-2">
          <div className="flex items-center justify-around mt-2">
            <button
              className="bg-green-700 text-white py-1 px-2 rounded-md hover:bg-green-800"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity === 1}
            >
              -
            </button>
            <span className="mx-2 text-lg">{item.quantity}</span>
            <button
              className="bg-green-700 text-white py-1 px-2 rounded-md hover:bg-green-800"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
          <ImBin2
            className="font-bold text-red-600 hover:text-red-800 "
            onClick={() => onRemove(item.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItemsCard;
