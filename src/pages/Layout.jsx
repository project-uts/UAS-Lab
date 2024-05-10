import React from "react";
import NavBar from "../components/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () =>{
    return(
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>

        </>
    );
};

export default Layout;