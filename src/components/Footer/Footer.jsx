import React from "react";
import FooterLogo from "../../assets/footerlogo.png";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import MainVid from "../../assets/video/MainVid.mp4"
import { Link } from "react-router-dom";

const FooterLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Tour",
        link: "/tour",
    },
    {
        title: "Foodie",
        link: "/food",
    },
    {
        title: "Blogs",
        link: "/blogs"
    }
]

const Footer = () => {
    return (
        <div className="py-10 relative overflow-hidden">
            <video autoPlay loop muted className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]">
                <source src={MainVid} type="video/mp4"/>
            </video>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 py-5 bg-white/80 backdrop-blur-sm-rounded-t-xl">
                    <div>
                        <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                            <img src={FooterLogo} alt="" className="max-h-[60px]" />
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;