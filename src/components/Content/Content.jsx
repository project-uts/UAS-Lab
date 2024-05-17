import React, { useState } from "react";
import { IoAirplane } from "react-icons/io5";
import { FaHotel, FaCar, FaTaxi } from "react-icons/fa6";
import { TbBuildingCarousel } from "react-icons/tb";
import Hotel from "./Hotel";
import Pesawat from "./Pesawat";

const Content = () => {
  const [showHotel, setShowHotel] = useState(false);
  const [showPesawat, setShowPesawat] = useState(false);

  const handleHotelClick = () => {
    setShowHotel(true);
    setShowPesawat(false);
  };

  const handlePesawatClick = () => {
    setShowPesawat(true);
    setShowHotel(false);
  };

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="container grid grid-cols-1 gap-4">
        <div className="hidden md:block">
          <div className="flex items-center gap-[70px] text-white justify-center mb-6">
            <div
              className="flex flex-col items-center"
              onClick={handlePesawatClick}
            >
              <div>
                <IoAirplane size={30} className="mb-[10px]" />
              </div>
              <div>
                <p>Tiket pesawat</p>
              </div>
            </div>
            <div
              className="flex flex-col items-center"
              onClick={handleHotelClick}
            >
              <div>
                <FaHotel size={30} className="mb-[10px]" />
              </div>
              <div>
                <p>Hotel</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <FaCar size={30} className="mb-[10px]" />
              </div>
              <div>
                <p>Car Rental</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <FaTaxi size={30} className="mb-[10px]" />
              </div>
              <div>
                <p>Taxi</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <TbBuildingCarousel size={30} className="mb-[10px]" />
              </div>
              <div>
                <p>Attraction</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-7">
            {showHotel && <Hotel />} {showPesawat && <Pesawat />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
