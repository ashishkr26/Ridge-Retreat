import React, { useState } from "react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../utilities/appSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const PackageItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);

  const itemQuantity =
    cartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 0;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleAddToCart = (item) => {
    dispatch(addCartItem(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeCartItem(item));
  };
  return (
    <div className="p-2 my-1 shadow-inner grid lg:grid-flow-col md:grid-flow-row sm:grid-flow-row bg-teal-100">
      <div className="lg:w-2/3 md:w-1/2 sm:w-1/2 lg:text-lg md:text-base sm:text-xs ">
        <p className="py-2 lg:text-lg md:text-base sm:text-sm">
          {" "}
          {item.description}
        </p>
        <p className=" py-2 font-semibold text-orange-600 ">
          Price: ₹ {item.price}{" "}
          <span className="text-black"> Excluding GST</span>
        </p>
        <p className="py-2 font-semibold">
          {item.includesBreakfast ? "Breakfast : Yes" : null}
        </p>
        <p className="py-2 text-emerald-500 font-semibold">
          {item.includesDinner ? "Dinner : Yes" : null}
        </p>
      </div>

      <div className="flex flex-col space-y-4 p-4 bg-slate-800 rounded w">
        <div>
          <label className="block text-gray-100 text-sm  mb-2">
            Check-in Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="p-1 sm:p-2 lg:p-3 lg:text-base md:text-sm sm:text-xs border border-gray-300 rounded w-full"
            placeholderText="Select check-in date"
          />
        </div>

        <div>
          <label className="block text-gray-100 text-sm  mb-2">
            Check-out Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="p-1 sm:p-2 lg:p-3 lg:text-base md:text-sm sm:text-xs border border-gray-300 rounded w-full"
            placeholderText="Select check-out date"
          />
        </div>
      </div>

      <div className="m-2 bg-white rounded-lg">
        <div className=" flex my-3 mx-2">
          <button
            onClick={() => handleRemoveFromCart(item)}
            className=" lg:w-12  md:w-8 sm:w-6 m-1 -pt-3 text-3xl bg-gray-100 hover:bg-gray-200 font-semibold flex items-center justify-center"
          >
            <RemoveIcon />
          </button>

          <input
            className="w-12 sm:w-8 md:w-10 lg:w-12 lg:m-1 border lg:border-gray-300 text-center font-semibold"
            type="text"
            value={itemQuantity}
            readOnly
          />

          <button
            onClick={() => handleAddToCart(item)}
            className=" lg:w-12  md:w-8 sm:w-6 m-1 p-1 bg-gray-100 hover:bg-gray-200 text-3xl font-semibold text-center flex items-center justify-center "
          >
            <AddIcon />
          </button>
        </div>
        <button className="text-base md:text-sm sm:text-xs shadow-lg mx-3 lg:w-40 md:w-24 sm:w-16 bg-slate-800 text-white  py-3 px-4 font-semibold rounded-sm  hover:bg-slate-500">
          Book Now <ShoppingCartSharpIcon />
          <span className="-ml-4 absolute -mt-3.5">{itemQuantity}</span>
        </button>
      </div>
    </div>
  );
};

export default PackageItem;
