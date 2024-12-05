import React from "react";

const PackageItem = ({ item }) => {
  return (
    <div className="p-2 flex">
        <div>
        <p className="py-2 text-lg"> {item.description}</p>
      <p className=" py-2 ">
        Price: ₹ {item.price}{" "}
        <span className="text-black font-bold"> + 18% GST</span>
      </p>
      <p className="py-2 text-green-500 font-semibold">
        {item.includesBreakfast ? "Breakfast : Yes" : null}
      </p>
      <p className="py-2 text-emerald-500 font-semibold">
        {item.includesDinner ? "Dinner : Yes" : null}
      </p>
        </div>
      
      <div>
      <button className=" mt-4 w-40 bg-gray-400 text-white  py-3 px-4 font-semibold rounded-sm hover:scale-110 transition-all duration-500 ease-in-out hover:bg-blue-700">
        Book Now 💼
      </button>
      </div>
      
    </div>
  );
};

export default PackageItem;
