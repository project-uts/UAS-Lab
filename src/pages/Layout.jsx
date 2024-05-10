import React from "react";
import NavBar from "../components/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import WeatherWidget from "../components/Weather/WeatherComp";

const Layout = () => {
  return (
    <>
      <NavBar />
      <WeatherWidget />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
