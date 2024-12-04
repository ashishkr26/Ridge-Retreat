import React from "react";

const MainContainer = () => {
  return (
    <div className=" flex flex-col items-center">
      <div className="shadow-2xl m-4 border border-gray-300 bg-white rounded-lg w-1/2  h-32 text-6xl text-yellow-500 font-serif flex justify-center items-center z-10 sticky top-20">
        Bookings Open
      </div>
      <img
        className="w-full h-auto shadow-lg -mt-20 p-4"
        alt="slider"
        src="https://w0.peakpx.com/wallpaper/392/364/HD-wallpaper-luxury-resort-resort-beach-beautiful-magic-sunset-pool-lights-luxury.jpg"
      />
    </div>
  );
};

export default MainContainer;
