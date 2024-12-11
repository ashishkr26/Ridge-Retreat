import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CancellationPolicy from "./CancellationPolicy";
import { addCartItem, removeCartItem } from "../utilities/appSlice";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);
  const handleAddToCart = (item) => {
    dispatch(addCartItem(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeCartItem(item));
  };
  return (
    <div className="">
      {cartItems.length === 0 ? (
        <div className="">
          There are no items in cart,
          <span>
            Add To Cart <ShoppingCartOutlinedIcon /> <DirectionsWalkIcon />
          </span>
          <button className="m-2 p-2 border border-yellow-400 bg-yellow-400 ">
            Go To Home
          </button>
        </div>
      ) : (
        <>
          <div className="w-full  my-10">
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
