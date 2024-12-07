import React, { useState } from "react";
import { LOGO_URL } from "../utilities/constants";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router";

const Header = () => {
  const [isDialogOpen, SetIsDialogOpen] = useState(false);
  let timeoutId = null;
  return (
    <div className="flex  items-center space-x-4 shadow-md w-full font-serif z-20 sticky top-0 bg-white">
      <Link to="/">
        <img className="h-20 hover:scale-105" alt="logo" src={LOGO_URL} />
      </Link>
      <input
        className="border border-blue-600 rounded-l-full rounded-r-full px-4 py-1 w-72 hover:scale-110 duration-500 ease-in-out transition-all "
        type="text"
        placeholder="Search"
      />
      <div className="relative left-10">
        <ul className="flex space-x-2 ">
          <li
            // onMouseEnter={() => timeoutId= setTimeout(()=>{SetIsDialogOpen(true)},500) }
            onMouseEnter={() => {
              SetIsDialogOpen(true);
            }}
            onMouseLeave={() => {
              clearTimeout(timeoutId);
              SetIsDialogOpen(false);
            }}
            className="relative w-24 h-[70px] py-1 px-1 hover:bg-sky-100 hover:scale-110 transition-all  ease-in-out hover:shadow-lg leading-[58px] "
          >
            Features
            {isDialogOpen && (
              <ul className="bg-sky-100 w-48 h-28 mt-4 rounded-lg -ml-1  transition-all duration-500 ease-in-out">
                <li className="h-6 p-2 -mt-2 aspect-auto text-base font-serif">
                  Web Development
                </li>
                <li className="h-6 p-2  text-base">App Management</li>
                <li className="h-6 p-2  text-base">Mobile Application</li>
              </ul>
            )}
          </li>

          <li className="relative h-[70px]  py-1 px-4 hover:bg-sky-100 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-lg leading-[58px]">
            Products
            {/* {isDialogOpen &&
          <ul className="bg-sky-100 w-52 rounded-lg -ml-1">
          <li className="h-12   p-2 aspect-auto">Web Development</li>
          <li className="h-12 p-2">App Management</li>
         
        </ul>
        }   */}
          </li>
          <li className="relative h-[70px] py-1 px-4 hover:bg-sky-100 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-lg leading-[58px]">
            Pricing
            {/* {isDialogOpen &&  <ul className="bg-sky-100 w-52 rounded-lg -ml-1">
             <li className="h-12   p-2 aspect-auto">Web Development</li>
             <li className="h-12 p-2">App Management</li>
             <li className="h-12 p-2">Mobile Application</li>
           </ul>
          } */}
          </li>
          <li className="relative h-[70px] py-1 px-4 hover:bg-sky-100 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-lg leading-[58px]">
            Partners
          </li>
          <li className="relative h-[70px] py-1 px-4 hover:bg-sky-100 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-lg leading-[58px]">
            Resources
          </li>
          <li className="relative h-[70px] p-1 hover:bg-sky-100 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-lg leading-[58px]">
            Cart <ShoppingCartOutlinedIcon />
          </li>
        </ul>
      </div>
      <button className="relative left-24 p-2 border border-blue-500 hover:border-yellow-600 rounded-lg hover:shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-500 ease-in-out">
        Book Now
      </button>
    </div>
  );
};

export default Header;
