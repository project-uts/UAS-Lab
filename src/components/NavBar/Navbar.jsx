import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/assets2.webp";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";




const NavBar = () => {
    const [showMenu, setshowMenu] = useState(false);

    const toggleMenu = () => {
        setshowMenu(!showMenu);
    };

    const scrollToPlaces = () => {
        if (placesRef.current) {
            placesRef.current.scrollIntoView({ behavior: "smooth" });
            setshowMenu(false); 
        }
    };
    
    return(
        <>
            <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-[99999]">
                <div className="bg-gradient-to-r from-primary to-secondary text-white">
                    <div className="container sm:block">
                        <div className="flex justify-between">
                            <marquee>Ayo Jelahi Jawa Timur Bersama-sama</marquee>
                        </div>
                    </div>
                </div>
                <div className="container py-3 sm:py-0">
                    <div className="flex justify-between items-center">
                        {/* logo section */}
                        <div>
                            <Link to="/" onClick={() => window.scrollTo (0, 0)}>
                                <img src={LogoImg} alt="" className="h-16" />
                            </Link>
                        </div>
                        {/* Dekstop Navlinks section */}
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-6">
                                <li className="py-4">
                                    <NavLink to="/" activeClassname="active" onClick={() => window.scrollTo(0,0)}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="py-4">
                                    <NavLink to="/tour" activeClassname="active" onClick={() => window.scrollTo(0,0)}>
                                        Tour
                                    </NavLink>
                                </li>
                                <li className="py-4">
                                    <NavLink to="/food" activeClassname="active" onClick={() => window.scrollTo(0,0)}>
                                        Foodie
                                    </NavLink>
                                </li>
                                <li className="py-4">
                                    <NavLink to="/blogs" activeClassname="active" onClick={() => window.scrollTo(0,0)}>
                                        Blog's
                                    </NavLink>
                                </li>
                                <li className="py-4">
                                    <NavLink to="/about" activeClassname="active" onClick={() => window.scrollTo(0,0)}>
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="py-4">
                                    <NavLink to="/contact" activeClassname="active" onClick={() => window.scrollTo(0,0)}>
                                       Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* mobile hamburger menu */}
                        <div className="md:hidden block">
                            {showMenu? (
                                <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30}/>
                            ):(
                                <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30}/>

                            )}

                        </div>
                    </div>
                </div>
                <ResponsiveMenu setshowMenu ={setshowMenu} showMenu={showMenu} />
            </div>
        </>
    );
};

export default NavBar;