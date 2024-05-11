import React from "react";
import FooterLogo from "../../assets/FooterLogo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import MainVid from "../../assets/video/MainVid.mp4";
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
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
      >
        <source src={MainVid} type="video/mp4" />
      </video>
      <div className="container">
        <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div className="py-8 px-4">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img src={FooterLogo} alt="" className="max-h-[60px]" />
            </h1>
            <p className="text-sm">
              Jelajahi Keindahan Jawa Timur: Temukan Pesona Alam, Sejarah, dan
              Budaya yang Memikat di Nusantara. Nikmati Petualangan Tak
              Terlupakan di Tanah yang Kaya Akan Keajaiban alam dan Warisan
              Budaya yang Menakjubkan.
            </p>
            <br />
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>UMN</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+123 456 789</p>
            </div>
            {/* Social Media*/}
            <div>
              <div className="flex item-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
          {/* footer links*/}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div className="py-8 px-4">
                <h1>Important Links</h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map(({ title, link }) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700">
                      <Link
                        to={link}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="mb-5 inline-block flex items-center"
                      >
                        <IoIosArrowForward />
                        <span>{title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*Copy right */}
        <div>
          <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
            @copyright 2023 All right reserved || Made with Pemuja Codingan
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
