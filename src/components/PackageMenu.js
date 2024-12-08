import React, { useState } from "react";
import { dayoutPackage } from "../utilities/mockPackages";
import PackageItem from "./PackageItem";
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';

const PackageMenu = () => {
  const [showIndex, setShowIndex] = useState(null); // Track the currently open item's index

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-teal-600 px-12 pt-4 font-serif font-semibold">
        Available Dayout Packages
      </h1>
      <div className="w-5/6 m-4 p-4 flex flex-col justify-center">
        {dayoutPackage.map((item, index) => (
          <div key={item.id} className="mb-4">
            {/* Item Name */}
            <div className="bg-teal-400 text-white p-4 font-semibold text-lg flex justify-between shadow-md ">
              {item.name}
              <span
                onClick={
                  () => setShowIndex(showIndex === index ? null : index) // Toggle current item
                }
                className="cursor-pointer text-lg"
              >
                {showIndex === index ? <KeyboardArrowUpTwoToneIcon/> : <KeyboardArrowDownTwoToneIcon/>}
              </span>
            </div>

            {/* Item Description */}
            {showIndex === index && <PackageItem item={item} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageMenu;
