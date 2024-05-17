import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import "../../index.css";

import axios from "axios";

const Hotel = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [options] = useState([
    "Surabaya",
    "Madiun",
    "Batu",
    "Malang",
    "Kediri",
  ]);

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [dewasa, setDewasa] = useState(1);
  const [anak, setAnak] = useState(0);
  const [kamar, setKamar] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  {
    /*useEffect(() => {
    const fetchDestinations = async () => {
      const destinations = ["surabaya", "madiun", "batu", "malang", "kediri"];

      for (let destination of destinations) {
        const options = {
          method: "GET",
          url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
          params: { query: destination },
          headers: {
            "X-RapidAPI-Key":
              "3cdb8c2aa4msh604808aeb8220dbp189333jsn9470790cb24f",
            "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);
          console.log(`Results for ${destination}:`, response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchDestinations();
  }, []);*/
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setIsDropdownVisible(false);
  };

  const handleInputClick = () => {
    setIsDropdownVisible(true);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const formatDateString = (dateString) => {
    return dateString.replace(/\//g, "-");
  };

  const updateCounter = (type, value) => {
    if (type === "dewasa") {
      setDewasa(Math.max(1, dewasa + value));
    } else if (type === "anak") {
      setAnak(Math.max(0, anak + value));
    } else if (type === "kamar") {
      setKamar(Math.max(1, kamar + value));
    }
  };

  const updateText = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="flex flex-row justify-center">
      <div>
        <p className="text-white mr-2">Kota,tujuan,atau nama hotel</p>
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleInputClick}
            placeholder="Ketik atau pilih nilai..."
            className="p-2 border rounded-tl-[20px] rounded-bl-[20px] w-[300px] mt-6"
          />
          {isDropdownVisible && (
            <ul className="absolute z-10 w-full bg-white border rounded mt-1">
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        <h4 className="text-white mr-2">Tanggal Check in & Check Out</h4>
        <div>
          <div>
            <input
              type="text"
              value={checkInDate ? checkInDate.toISOString().split("T")[0] : ""}
              onClick={openModal}
              readOnly // Membuat input tidak dapat diedit
              placeholder="Pilih tanggal"
              className="p-[9px]  w-[300px] mt-6"
            />
          </div>
          {/* Input untuk memilih tanggal check-out */}
          {/*<div>
            <label>Check-out: </label>
            <input
              type="text"
              value={
                checkOutDate ? checkOutDate.toISOString().split("T")[0] : ""
              }
              onClick={openModal}
              readOnly // Membuat input tidak dapat diedit
              placeholder="Pilih tanggal"
            />
            </div>*/}
          {/* Modal untuk memilih tanggal check-in dan check-out */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Pilih Tanggal"
          >
            <h2>Pilih Tanggal Check-in dan Check-out</h2>
            <div>
              <label>Check-in: </label>
              <DatePicker
                selected={checkInDate}
                onChange={handleCheckInDateChange}
                dateFormat="yyyy-MM-dd" // Format tanggal yang digunakan
                isClearable // Membuat tanggal dapat dihapus
                placeholderText="Pilih tanggal" // Teks placeholder
              />
            </div>
            <div>
              <label>Check-out: </label>
              <DatePicker
                selected={checkOutDate}
                onChange={handleCheckOutDateChange}
                dateFormat="yyyy-MM-dd" // Format tanggal yang digunakan
                isClearable // Membuat tanggal dapat dihapus
                placeholderText="Pilih tanggal" // Teks placeholder
              />
            </div>
            <button onClick={closeModal}>Simpan</button>
          </Modal>
          {/* {checkInDate && checkOutDate && (
            <p>
              Anda memilih tanggal check-in:{" "}
              {formatDateString(checkInDate.toLocaleDateString())} <br />
              Anda memilih tanggal check-out:{" "}
              {formatDateString(checkOutDate.toLocaleDateString())}
            </p>
          )}*/}
        </div>
      </div>
      <div>
        <p className="text-white">Tamu dan Kamar</p>
        <div className="relative">
          <button
            className="rounded-none mt-6 p-[9px]"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {`${dewasa} Dewasa, ${anak} Anak, ${kamar} Kamar`}
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg p-4 z-10">
              <div className="flex justify-between items-center mb-2">
                <span>Dewasa</span>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 px-2 py-1 rounded"
                    onClick={() => updateCounter("dewasa", -1)}
                  >
                    -
                  </button>
                  <span className="mx-2">{dewasa}</span>
                  <button
                    className="bg-gray-200 px-2 py-1 rounded"
                    onClick={() => updateCounter("dewasa", 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Anak</span>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 px-2 py-1 rounded"
                    onClick={() => updateCounter("anak", -1)}
                  >
                    -
                  </button>
                  <span className="mx-2">{anak}</span>
                  <button
                    className="bg-gray-200 px-2 py-1 rounded"
                    onClick={() => updateCounter("anak", 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Kamar</span>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 px-2 py-1 rounded"
                    onClick={() => updateCounter("kamar", -1)}
                  >
                    -
                  </button>
                  <span className="mx-2">{kamar}</span>
                  <button
                    className="bg-gray-200 px-2 py-1 rounded"
                    onClick={() => updateCounter("kamar", 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-center mt-4">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={updateText}
                >
                  Selesai
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center bg-blue">
        <NavLink to="/hotelpages">
          <button className="mt-[48px] p-[13px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[0px] rounded-tl-[0px]">
            <FaSearch />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hotel;
