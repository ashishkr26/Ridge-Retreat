import React, { useState } from "react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PackageItem = ({ item }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="p-2 my-1 shadow-inner flex bg-pink-50">
      <div>
        <p className="py-2 w-3/4"> {item.description}</p>
        <p className=" py-2 font-semibold ">
          Price: ₹ {item.price}{" "}
          <span className="text-black font-bold"> Excluding GST</span>
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
          <button className="w-12 h-12 m-1 p-1 bg-gray-100 hover:bg-gray-200 text-red-3xl font-semibold text-center ">
            +
          </button>
          <input
            className="w-12 h-12  m-1 border border-gray-300 text-center  "
            type="text"
            value={0}
          />
          <button className="w-12 h-12 m-1 p-1 bg-gray-100 hover:bg-gray-200 text-3xl font-semibold text-center ">
            -
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
