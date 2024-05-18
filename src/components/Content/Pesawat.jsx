import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Pesawat = () => {
  const navigate = useNavigate();
  const [inputValueDari, setInputValueDari] = useState("");
  const [isDropdownDari, setIsDropdownDari] = useState(false);
  const [optionsDari] = useState(["Surabaya", "option2", "option3"]);

  const [inputValueKe, setInputValueKe] = useState("");
  const [isDropdownKe, setIsDropdownKe] = useState(false);
  const [optionsKe] = useState(["Jakarta", "optionB", "optionC"]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const dropdownDariRef = useRef(null);
  const dropdownKeRef = useRef(null);

  const handleInputDari = (event) => {
    setInputValueDari(event.target.value);
    setIsDropdownDari(true); // Menampilkan dropdown saat ada perubahan input
  };

  const handleInputKe = (event) => {
    setInputValueKe(event.target.value);
    setIsDropdownKe(true);
  };

  const handleOptionClickDari = (option) => {
    setInputValueDari(option);
    setIsDropdownDari(false); // Menyembunyikan dropdown setelah memilih opsi
  };

  const handleOptionClickKe = (option) => {
    setInputValueKe(option);
    setIsDropdownKe(false);
  };

  const handleInputClickDari = () => {
    setIsDropdownDari(true); // Menampilkan dropdown saat input diklik
  };

  const handleInputClickKe = () => {
    setIsDropdownKe(true);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownDariRef.current &&
      !dropdownDariRef.current.contains(event.target)
    ) {
      setIsDropdownDari(false);
    }
    if (
      dropdownKeRef.current &&
      !dropdownKeRef.current.contains(event.target)
    ) {
      setIsDropdownKe(false);
    }
  };

  const handleSeacrh = (e) => {
    e.preventDefault();
    navigate("/pesawatpages", {
      state: {
        inputValueDari: inputValueDari,
        inputValueKe: inputValueKe,
        startDate: startDate,
        endDate: endDate,
      },
    });
  };

  const handleDateChange = (date) => {
    const formattedDate = date ? date.toISOString().split("T")[0] : null;
    setStartDate(formattedDate);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-row">
        {/*airport*/}
        <div ref={dropdownDariRef}>
          <p>Dari</p>
          <div className="relative">
            <FaPlaneDeparture className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={inputValueDari}
              onChange={handleInputDari}
              onClick={handleInputClickDari}
              className="p-2 border rounded-tl-[20px] rounded-bl-[20px] w-[250px] pl-10" // pl-10 untuk memberi ruang bagi ikon
            />
            {isDropdownDari && (
              <ul className="absolute z-10 w-full bg-white rounded mt-1 border">
                {optionsDari.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClickDari(option)}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div ref={dropdownKeRef}>
          <p>Ke</p>
          <div className="relative">
            <FaPlaneArrival className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={inputValueKe}
              onChange={handleInputKe}
              onClick={handleInputClickKe}
              className="p-2 border rounded-tr-[20px] rounded-br-[20px] w-[250px] pl-10" // pl-10 untuk memberi ruang bagi ikon
            />
            {isDropdownKe && (
              <ul className="absolute z-10 w-full bg-white rounded mt-1 border">
                {optionsKe.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClickKe(option)}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex flex-row ml-[190px]">
          {/*tanggal*/}
          <div>
            <p>Tanggal Keberangkatan</p>
            <div className="relative">
              <SlCalender className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                placeholderText="Pilih tanggal keberangkatan"
                className="p-2 border rounded-tl-[20px] rounded-bl-[20px] w-[250px] pl-10"
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>
          <div>
            <p>Tanggal Kedatangan</p>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="Pilih tanggal kedatangan"
                className="p-2 border rounded-tr-[20px] rounded-br-[20px] w-[250px] pl-10"
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center ml-[10px]">
              <button
                className="mt-[25px] p-[13px] rounded-br-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-tl-[10px]"
                onClick={handleSeacrh}
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pesawat;
