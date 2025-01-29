import React, { useState } from "react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../utilities/appSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router";

const PackageItem = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);

  const itemQuantity =
    cartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 0;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Calculate the number of days
  const calculateDays = () => {
    if (startDate && endDate) {
      const timeDifference = endDate.getTime() - startDate.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      return daysDifference > 0 ? daysDifference : 0;
    }
    return 0;
  };

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
          {item.description}
        </p>
        <p className="py-2 font-semibold text-orange-600 ">
          Price: ₹ {item.price} <span className="text-black"> Excluding GST</span>
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

        <div className="text-gray-100 font-semibold">
          Total Days: {calculateDays()}
        </div>
      </div>

      <div className="p-2 bg-white shadow-md">
        <label className="block text-gray-700 font-medium px-4 py-2">
          Number of Tickets
        </label>
        <div className="flex items-center my-3 mx-2">
          {/* Decrease Button */}
          <button
            onClick={() => handleRemoveFromCart(item)}
            className="w-10 h-10 sm:w-8 sm:h-8 lg:w-12 lg:h-12 m-1 bg-gray-100 hover:bg-gray-200 text-xl font-semibold flex items-center justify-center rounded-md"
            aria-label="Decrease quantity"
          >
            <RemoveIcon />
          </button>

          {/* Quantity Input */}
          <input
            className="w-12 sm:h-10 lg:h-12 border border-gray-300 text-center font-semibold rounded-md"
            type="text"
            value={itemQuantity}
            readOnly
            aria-label="Number of tickets"
          />

          {/* Increase Button */}
          <button
            onClick={() => handleAddToCart(item, )}
            className="w-10 h-10 sm:w-8 sm:h-8 lg:w-12 lg:h-12 m-1 bg-gray-100 hover:bg-gray-200 text-xl font-semibold flex items-center justify-center rounded-md"
            aria-label="Increase quantity"
          >
            <AddIcon />
          </button>
        </div>

        {/* Book Now Button */}
        <button
          onClick={() => navigate("/cart")}
          className="text-sm lg:text-base shadow-lg mx-3 w-full lg:w-40 bg-slate-800 text-white py-2 px-4 font-semibold rounded-md hover:bg-slate-600 flex items-center justify-center relative"
        >
          Book Now
          <ShoppingCartSharpIcon className="ml-2" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {itemQuantity}
          </span>
        </button>
      </div>
    </div>
  );
};

export default PackageItem;
