import React, { useState } from "react";
import { dayoutPackage } from "../utilities/mockPackages";
import PackageItem from "./PackageItem";

const PackageMenu = () => {
  const [showIndex, setShowIndex] = useState(null); // Track the currently open item's index

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-blue-500 px-12 py-2">Available Packages</h1>
      <div className="w-4/5 m-4 p-4 flex flex-col justify-center">
        {dayoutPackage.map((item, index) => (
          <div key={item.id} className="mb-4">
            {/* Item Name */}
            <div className="bg-gray-50 p-4 font-semibold text-lg flex justify-between shadow-md text-blue-500">
              {item.name}
              <span
                onClick={() =>
                  setShowIndex(showIndex === index ? null : index) // Toggle current item
                }
                className="cursor-pointer text-lg"
              >
                {showIndex === index ? "🔺" : "🔻"}
              </span>
            </div>

            {/* Item Description */}
            {showIndex === index && (
                <>
                <PackageItem item={item}/>
                 {/* <p className="font-light p-4 ">
                {item.description}
              </p>
              <p className="font-light p-4 ">{item.price}</p> */}
                </>
             
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageMenu;
