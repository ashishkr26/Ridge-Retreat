import React, { useState } from "react";

const Header = () => {
  const [isDialogOpen, SetIsDialogOpen] = useState(false);
  let timeoutId = null;
  return (
    <div className="flex  items-center space-x-4 shadow-md w-full font-serif z-20 sticky top-0 bg-white">
      <img
        className="h-20"
        alt="logo"
        src="https://st2.depositphotos.com/5943796/11433/v/450/depositphotos_114330340-stock-illustration-initial-letter-rr-blue-swoosh.jpg"
      />
      <input
        className="border border-blue-600 rounded-lg px-4 py-1"
        type="text"
        placeholder="Search"
      />
      <div className="ml-4 relative">
      <ul className="flex space-x-4 ">
        <li
          // onMouseEnter={() => timeoutId= setTimeout(()=>{SetIsDialogOpen(true)},500) }
          onMouseEnter={()=>{SetIsDialogOpen(true)}}
          onMouseLeave={() => {
            clearTimeout(timeoutId);
            SetIsDialogOpen(false)}}
          className="relative w-24 h-[70px] py-1 px-1 hover:bg-sky-100 hover:scale-110 transition-all  ease-in-out hover:shadow-lg leading-[58px] rounded-t-md "
        >
          Features
          {isDialogOpen && (
            <ul className="bg-sky-100 w-48 h-28 mt-4 rounded-lg -ml-1  transition-all duration-500 ease-in-out">
              <li className="h-6 p-2 -mt-2 aspect-auto text-base font-serif">Web Development</li>
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
        <li className="relative h-[70px] py-1  hover:bg-sky-100 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-lg leading-[58px]">
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
        {/* <li className="relative h-[70px] p-1 hover:bg-sky-100 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-lg leading-[58px]">
          Enterprise
        </li> */}
      </ul>
      </div>
      
      
      <div className="flex  space-x-6">
        <button className=" my-2 ml-16 p-2  bg-blue-600 text-white rounded-lg hover:shadow-xl hover:bg-yellow-500 transition-all duration-500 ease-in-out">
          Start Free Trial
        </button>
        <button className="m-2 p-2 border border-blue-500 hover:border-yellow-600 rounded-lg hover:shadow-lg hover:bg-yellow-500 transition-all duration-500 ease-in-out">
          Schedule Demo
        </button>
      </div>
    </div>
  );
};

export default Header;
