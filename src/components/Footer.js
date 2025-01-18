import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  const phoneNumber = "8123897887"; // Replace with your WhatsApp number
  const message = "Hi, I need help!"; // Default message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <>
      <div className="bg-teal-600 dark:bg-black dark:text-white h-96 mt-16 text-white grid grid-cols-12 font-poppins p-4">
        <div className="py-4 pl-10 col-span-2">
          <span className="text-lg font-semibold">Important Links</span>
          <ul className="text-sm">
            <li>Contact Us</li>
            <li>Support</li>
            <li>Current Openings</li>
            <li>Career Page</li>
          </ul>
        </div>

        <div className="p-4 col-span-2 font-semibold text-lg">Location</div>
        <div className="p-4 col-span-3">
          <span className="font-semibold text-lg">Social Media presence</span>
          <ul className="text-sm">
            <li className="cursor-pointer">
              <FacebookOutlinedIcon /> Facebook
            </li>
            <li className="cursor-pointer">
              <TwitterIcon /> Twitter
            </li>
            <li className="cursor-pointer">
              <InstagramIcon /> Instagram
            </li>
            <li className="cursor-pointer">
              <LinkedInIcon /> LinkedIn
            </li>
            <li className="cursor-pointer">
              <YouTubeIcon /> YouTube
            </li>
            <li className="cursor-pointer">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
              </a>{" "}
              WhatsApp
            </li>
          </ul>
        </div>
        <div className="p-4 col-span-5">
          <h2 className="font-semibold text-lg">Ridge Retreat</h2>
          <p className="text-sm py-2">
            Located in the heart of Bangalore, Ridge Retreat is your haven of
            tranquility amidst the bustling city. Surrounded by lush greenery
            and offering panoramic views, our resort is the perfect escape for
            relaxation and rejuvenation. Experience luxurious accommodations,
            exceptional dining, and a variety of recreational activities
            tailored to suit every guest. Whether you're planning a peaceful
            weekend getaway or a memorable celebration, Ridge Retreat promises
            an unforgettable stay where comfort meets nature's charm.
          </p>
        </div>
      </div>
      <div className="h-10 bg-yellow-600  flex justify-center items-center font-poppins  text-gray-50 ">
        © 2024 Ridge Retreat. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
