import React from "react";
import FooterLogo from "../../assets/FooterLogo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import MainVid from "../../assets/video/MainVid.mp4";

const Footer = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full w-full object-cover z-[-1]"
      >
        <source src={MainVid} type="video/mp4" />
      </video>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div className="py-8 px-4 lg:col-span-2">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img src={FooterLogo} alt="" className="max-h-[60px]" />
            </h1>
            <p className="text-sm mt-3">
              Jelajahi Keindahan Jawa Timur: Temukan Pesona Alam, Sejarah, dan
              Budaya yang Memikat di Nusantara. Nikmati Petualangan Tak
              Terlupakan di Tanah yang Kaya Akan Keajaiban alam dan Warisan
              Budaya yang Menakjubkan.
            </p>
          </div>
          <div className="py-8 px-4">
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>UMN</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+123 456 789</p>
            </div>
            {/* Social Media*/}
            <div className="mt-6">
              <div className="flex items-center gap-3">
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
        </div>
        {/* Copy right */}
        <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
          © 2023 All rights reserved || Made with Pemuja Codingan
        </div>
      </div>
    </div>
  );
};

export default Footer;
