import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import SideSticky from "./SideSticky";

const Home = () => {
  return (
    <div className="dark:bg-gray-500">
      <Header />
      <SideSticky />
      <Outlet />
    </div>
  );
};

export default Home;
