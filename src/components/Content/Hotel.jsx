import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCaretDown } from "react-icons/fa6";
import axios from "axios";

const Hotel = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [options] = useState(["Option 1", "Option 2", "Option 3"]);

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
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const formatDateString = (dateString) => {
    return dateString.replace(/\//g, "-");
  };

  return (
    <div>
      <div>
        <p>Kota,tujuan,atau nama hotel</p>
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleInputClick}
            placeholder="Ketik atau pilih nilai..."
            className="p-2 border rounded w-full"
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
        <p>Tanggal Check in & Check Out</p>
        <div>
          <div>
            <label>Check-in: </label>
            <DatePicker
              selected={checkInDate}
              onChange={handleCheckInDateChange}
              dateFormat="yyyy-MM-dd"
              isClearable
              placeholderText="Pilih tanggal"
            />
          </div>
          {/* Pilihan tanggal untuk check-out */}
          <div>
            <label>Check-out: </label>
            <DatePicker
              selected={checkOutDate}
              onChange={handleCheckOutDateChange}
              dateFormat="yyyy-MM-dd"
              isClearable
              placeholderText="Pilih tanggal"
            />
          </div>

          {checkInDate && checkOutDate && (
            <p>
              Anda memilih tanggal check-in:{" "}
              {formatDateString(checkInDate.toLocaleDateString())} <br />
              Anda memilih tanggal check-out:{" "}
              {formatDateString(checkOutDate.toLocaleDateString())}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
