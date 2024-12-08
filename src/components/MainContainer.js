import React from "react";

const MainContainer = () => {
  return (
    <div className=" flex flex-col items-center bg-gray-100">
      <div className="bg-gradient-to-tr from-red-400 via-gray-400 to-orange-400 shadow-2xl m-4 border border-gray-300 rounded-lg w-1/2 h-24 text-6xl text-white font-serif flex justify-center items-center z-10 sticky top-20">
        Bookings Open
      </div>

      <img
        className="w-full h-auto shadow-lg -mt-28 p-4"
        alt="slider"
        src="https://w0.peakpx.com/wallpaper/392/364/HD-wallpaper-luxury-resort-resort-beach-beautiful-magic-sunset-pool-lights-luxury.jpg"
      />
      
    </div>
  );
};

export default MainContainer;
