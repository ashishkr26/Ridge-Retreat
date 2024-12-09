import React from "react";
import { useSelector } from "react-redux";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CancellationPolicy from "./CancellationPolicy";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);
  return (
    <div className="bg-gray-200 flex h-screen">
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
        <div>
          <h1>Your Cart Items</h1>
          <table className="mt-20 ml-10">
            <thead className="m-2 p-2  font-extralight">
              <tr>
                <th className="m-2 p-2">PACAKGE</th>
                <th className="m-2 p-2">QUANTITY</th>
                <th className="m-2 p-2">PRICE</th>
                <th className="m-2 p-2">SUB TOTAL</th>
              </tr>
              <tbody>
                {cartItems.map((item)=>(
                  <tr className="items-center">
                    <td className="m-2 p-2">{item.name}</td>
                    <td className="m-2 p-2">{item.quantity}</td>
                    <td className="m-2 p-2">{item.price}</td>
                  </tr>
                ))
                }
              </tbody>
            </thead>
          </table>
          <CancellationPolicy/>
        </div>
      )}
    </div>
  );
};

export default Cart;
