import React, { useState } from "react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../utilities/appSlice";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';

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
    <div className="p-2 my-1 shadow-inner flex bg-teal-100">
      <div>
        <p className="py-2 w-3/4"> {item.description}</p>
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

      <div className="flex flex-col space-y-4 p-4 bg-slate-800 rounded">
        <div>
          <label className="block text-gray-100 text-sm font-medium mb-2">
            Check-in Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="custom-class p-2 border border-gray-300 rounded "
            placeholderText="Select check-in date"
            popperPlacement="right-start"
          />
        </div>

        <div>
          <label className="block text-gray-100 text-sm font-medium mb-2">
            Check-out Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="custom-class p-2 border border-gray-300 rounded"
            placeholderText="Select check-out date"
          />
        </div>
      </div>

      <div className="m-2 bg-white rounded-lg">
        <div className=" flex my-3 mx-2">
          <button
            onClick={() => handleAddToCart(item)}
            className="w-12 h-12 m-1 -pt-3 text-3xl bg-gray-100 hover:bg-gray-200 font-semibold flex items-center justify-center"
          >
           <IndeterminateCheckBoxOutlinedIcon/>
          </button>

          <input
            className="w-12 h-12  m-1 border border-gray-300 text-center font-semibold  "
            type="text"
            value={itemQuantity}
            readOnly
          />
          <button
            onClick={() => handleRemoveFromCart(item)}
            className="w-12 h-12 m-1 p-1 bg-gray-100 hover:bg-gray-200 text-3xl font-semibold text-center flex items-center justify-center "
          >
            <AddBoxOutlinedIcon/>
          </button>
        </div>
        <button className="shadow-lg mx-3 w-40 bg-slate-800 text-white  py-3 px-4 font-semibold rounded-sm  hover:bg-slate-500">
          Book Now <ShoppingCartSharpIcon />
        </button>
      </div>
    </div>
  );
};

export default PackageItem;
