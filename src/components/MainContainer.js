import React, { useEffect, useState } from "react";
import EnquiryForm from "./EnquiryForm";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const MainContainer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const hoverMessage = "Hi, let's connect on whatsapp..!!";

  useEffect(() => {
    const timer = setTimeout(() => setIsFormOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseForm = () => setIsFormOpen(false);

  const phoneNumber = "8123897887"; // Replace with your WhatsApp number
  const message = "Hi, I need help!"; // Default message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="flex flex-col items-center bg-gray-100 dark:gray-700">
      {/* <div className="bg-gradient-to-tr from-red-400 via-gray-400 to-orange-400 shadow-2xl m-4 border border-gray-300 rounded-lg w-1/2 h-24 text-6xl text-white font-serif flex justify-center items-center z-10 sticky top-20">
        Bookings Open
      </div> */}
      {isFormOpen && (
        <div className="fixed bg-white m-4 w-2/3">
          <EnquiryForm
            isFormOpen={isFormOpen}
            handleCloseForm={handleCloseForm}
          />
        </div>
      )}
      <img
        className="w-full h-auto shadow-lg p-4 dark:bg-gray-500"
        alt="slider"
        src="https://w0.peakpx.com/wallpaper/392/364/HD-wallpaper-luxury-resort-resort-beach-beautiful-magic-sunset-pool-lights-luxury.jpg"
      />

      <div className="fixed right-16 bottom-10 z-20 flex group">
        <span className="bg-white hidden m-1 p-2 group-hover:block rounded-md">
          {hoverMessage}
        </span>
        <div className="bg-green-700 rounded-full p-1">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon sx={{ fontSize: "3.5rem", color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
