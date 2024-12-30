import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CancellationPolicy from "./CancellationPolicy";
import { addCartItem, removeCartItem } from "../utilities/appSlice";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);
  const handleAddToCart = (item) => {
    dispatch(addCartItem(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeCartItem(item));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="">
      {cartItems.length === 0 ? (
        <div className=" h-96 flex justify-center items-center">
          <span className="text-lg font-semibold">
            {" "}
            There are no items in cart, Add To Cart
          </span>
          <span>
            <DirectionsWalkIcon sx={{ fontSize: 64 }} />{" "}
            <ShoppingCartOutlinedIcon sx={{ fontSize: 64 }} />
          </span>
          <button
            onClick={() => navigate("/")}
            className="m-2 p-2 border border-yellow-400 bg-yellow-400 font-semibold hover:scale-105 transition-all ease-in-out duration-300"
          >
            Go To Home
          </button>
        </div>
      ) : (
        <>
          <div className="w-full  my-10 flex">
            <table className=" table-auto  border-collapse border w-3/5 font-semibold ml-16">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-4 text-left">
                    PACKAGE
                  </th>
                  <th className="border border-gray-300 p-4 text-center">
                    QUANTITY
                  </th>
                  <th className="border border-gray-300 p-4 text-center">
                    PRICE
                  </th>
                  <th className="border border-gray-300 p-4 text-center">
                    SUB TOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3  text-left">
                      {item.name}
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      {/* {item.quantity} */}
                      <div className="flex justify-center ">
                        <button
                          onClick={() => handleRemoveFromCart(item)}
                          className="w-10 h-10 m-1 -pt-3 text-3xl bg-gray-100 hover:bg-gray-200 font-semibold flex items-center justify-center"
                        >
                          <RemoveIcon />
                        </button>

                        <input
                          className="w-10 h-10  m-1 border border-gray-300 text-center font-semibold  "
                          type="text"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="w-10 h-10 m-1 p-1 bg-gray-100 hover:bg-gray-200 text-3xl font-semibold text-center flex items-center justify-center "
                        >
                          <AddIcon />
                        </button>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      {item.price}
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      {item.quantity * item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/*  Cart Total**/}{" "}
            <div className=" flex flex-col  mx-10 bg-gray-100 shadow-lg p-4 w-1/3">
              <div className="flex justify-center items-center text-lg p-4 bg-gray-800 text-white font-semibold ">
                Cart Total
              </div>
              <div className="p-4 bg-teal-200 my-2 flex justify-between font-semibold hover:bg-teal-400">
                <span>SubTotal</span> <span className="">₹ {totalPrice}</span>
              </div>
              <div className=" p-4 bg-red-200 my-2 flex justify-between font-semibold hover:bg-red-400">
                <span>GST- 18%</span> <span>₹ {totalPrice * 0.18}</span>{" "}
              </div>
              <div className="bg-green-200 p-4 my-2 flex justify-between font-semibold hover:bg-green-400">
                <span>Total</span>
                <span>₹ {totalPrice * 1.18}</span>
              </div>
              <div className="flex justify-center p-4">
                <button className="py-3 px-10 bg-yellow-400 font-semibold rounded-sm hover:bg-yellow-600">
                  Proceed To Payment
                </button>
              </div>
            </div>
          </div>
          <div className="m-4 p-4">
            <CancellationPolicy />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
