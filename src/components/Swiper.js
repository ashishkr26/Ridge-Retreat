import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/css"; // Import Swiper styles
import "swiper/css/effect-cards"; // Import specific styles if using effects like cards
import { EffectCards } from "swiper"; // Import required module for card effect

const MainContainer = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100">
      <div className="bg-gradient-to-tr from-red-400 via-gray-400 to-orange-400 shadow-2xl m-4 border border-gray-300 rounded-lg w-1/2 h-24 text-6xl text-white font-serif flex justify-center items-center z-10 sticky top-20">
        Bookings Open
      </div>

      <img
        className="w-full h-auto shadow-lg -mt-28 p-4"
        alt="slider"
        src="https://w0.peakpx.com/wallpaper/392/364/HD-wallpaper-luxury-resort-resort-beach-beautiful-magic-sunset-pool-lights-luxury.jpg"
      />

      <Swiper
        effect={"cards"} // Set the effect (optional)
        grabCursor={true} // Enable grabbing cursor
        modules={[EffectCards]} // Add the effect cards module
        className="mySwiper" // Assign a class for additional styling
      >
        <SwiperSlide>
          <div className="bg-blue-500 text-white p-4">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500 text-white p-4">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-500 text-white p-4">Slide 3</div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default MainContainer;
