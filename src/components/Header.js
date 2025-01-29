import React, { useState } from "react";
import { LOGO_URL } from "../utilities/constants";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const navigate = useNavigate();
  const [isDialogOpen, SetIsDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItem = useSelector((store) => store.cart.cartItems || []);

  const totalQuantity = cartItem.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const handleMobileMenuClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-md w-full font-serif z-100 sticky top-0 bg-white dark:bg-black dark:text-white">
      {/* Logo */}
      <Link to="/">
        <img
          className="h-16 hover:scale-105 transition-transform"
          alt="logo"
          src={LOGO_URL}
        />
      </Link>

      <DarkModeToggle />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <input
          className="border border-blue-600 rounded-full px-4 py-1 w-72 hover:scale-110 transition-all"
          type="text"
          placeholder="Search"
        />
        <ul className="flex space-x-2">
          <li
            onMouseEnter={() => SetIsDialogOpen(true)}
            onMouseLeave={() => SetIsDialogOpen(false)}
            className="relative px-4 py-2 hover:bg-teal-400 hover:scale-110 transition-all cursor-pointer"
          >
            Packages
            {isDialogOpen && (
              <ul className="absolute bg-teal-400 w-48 -ml-4 mt-2 rounded-b-lg shadow-lg">
                <Link to="/package">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Dayout Packages
                  </li>
                </Link>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Night out Packages
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Camping Packages
                </li>
              </ul>
            )}
          </li>
          <li className="px-4 py-2 hover:bg-teal-400 hover:scale-110 transition-all cursor-pointer">
            VillaStay
          </li>
          <li className="px-4 py-2 hover:bg-teal-400 hover:scale-110 transition-all cursor-pointer">
            Camping
          </li>
          <li className="px-4 py-2 hover:bg-teal-400 hover:scale-110 transition-all cursor-pointer">
            Pricing
          </li>
          <li className="px-4 py-2 hover:bg-teal-400 hover:scale-110 transition-all cursor-pointer">
            Resources
          </li>
          <Link to="/cart">
            <li className="relative px-4 py-2 hover:bg-teal-400 hover:scale-110 transition-all">
              Cart <ShoppingCartOutlinedIcon />
              <span className="absolute -top-1 right-6 text-red-600 text-sm">
                {totalQuantity}
              </span>
            </li>
          </Link>
        </ul>
        <button className="p-2 border border-blue-500 hover:border-yellow-600 rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all">
          Book Now
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li
              onClick={() => handleMobileMenuClick("/")}
              className="hover:bg-teal-400 px-4 py-2 cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={() => handleMobileMenuClick("/package")}
              className="hover:bg-teal-400 px-4 py-2 cursor-pointer"
            >
              Packages
            </li>
            <li className="hover:bg-teal-400 px-4 py-2 cursor-pointer">VillaStay</li>
            <li className="hover:bg-teal-400 px-4 py-2 cursor-pointer">Camping</li>
            <li className="hover:bg-teal-400 px-4 py-2 cursor-pointer">Pricing</li>
            <li className="hover:bg-teal-400 px-4 py-2 cursor-pointer">Resources</li>
            <Link to="/cart">
              <li className="hover:bg-teal-400 px-4 py-2 cursor-pointer">
                Cart <ShoppingCartOutlinedIcon />
                <span className="text-red-600">{totalQuantity}</span>
              </li>
            </Link>

            <li>
              <button
                onClick={() => console.log("book now click")}
                className="p-2 border border-blue-500 hover:border-yellow-600 rounded-lg hover:bg-yellow-500"
              >
                Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
