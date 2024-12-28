import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import SideSticky from "./SideSticky";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="dark:bg-gray-500">
      <Header />
      <SideSticky />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Home;
