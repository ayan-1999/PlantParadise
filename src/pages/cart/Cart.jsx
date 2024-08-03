import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CartItemsCard from "../../components/CartItemsCard";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../redux/slices/CartSlice";
import img from "/cart/image1.webp";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-36 py-4 bg-[rgba(241,243,204,1)]">
        {cartItems.length > 0 ? (
          <>
            <h1 className="text-4xl font-bold text-center text-green-900 mb-6">
              Shopping Cart
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cartItems.map((item) => (
                <CartItemsCard
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemove}
                />
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <div className="text-right">
                <div className="text-lg text-gray-700">
                  Total: ₹{calculateTotal().toFixed(2)}
                </div>
                <button className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 mt-4">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center bg-[rgba(241,243,204,1)] py-4 px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-green-900 mb-12">
                Your Cart is empty!!!
              </h1>

              <div className="flex justify-center mb-8">
                <img
                  src={img}
                  alt="Lost Plant"
                  className="w-64 h-64 object-cover"
                />
              </div>
              <Link
                to="/shop"
                className="inline-block bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-800 transition"
              >
                Go to our Shop
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
