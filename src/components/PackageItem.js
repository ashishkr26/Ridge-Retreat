import React from "react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

const PackageItem = ({ item }) => {
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
