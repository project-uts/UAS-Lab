import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import { FaSearch } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Rental = () => {
  const [inputLocation, setInputLocation] = useState("");
  const [isDropdownLocationVisible, setIsDropdownLocationVisible] =
    useState(false);
  const [location] = useState([
    "Surabaya",
    "Madiun",
    "Batu",
    "Malang",
    "Kediri",
  ]);

  const [startRental, setStartRental] = useState(null);
  const [endRental, setEndRental] = useState(null);
  const [startHour, setStartHour] = useState("");
  const [startMinute, setStartMinute] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMinute, setEndMinute] = useState("");

  const handleInputLocationChange = (event) => {
    setInputLocation(event.target.value);
  };

  const handleLocationClick = (location) => {
    setInputLocation(location);
    setIsDropdownLocationVisible(false);
  };

  const handleInputLocationClick = () => {
    setIsDropdownLocationVisible(true);
  };

  const handleStartHourChange = (event) => {
    setStartHour(event.target.value);
  };

  const handleStartMinuteChange = (event) => {
    setStartMinute(event.target.value);
  };

  const handleEndHourChange = (event) => {
    setEndHour(event.target.value);
  };

  const handleEndMinuteChange = (event) => {
    setEndMinute(event.target.value);
  };

  return (
    <div className="flex flex-row justify-center">
      <div>
        <p>Lokasi Rental</p>
        <div className="relative">
          <input
            type="text"
            value={inputLocation}
            onChange={handleInputLocationChange}
            onClick={handleInputLocationClick}
            placeholder="wilayah rental"
            className="p-[15px] border rounded-tl-[20px] rounded-bl-[20px]"
          />
          {isDropdownLocationVisible && (
            <ul className="absolute z-10 w-full bg-white border rounded mt-1">
              {location.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleLocationClick(option)}
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
        <p>Tanggal Mulai Rental</p>
        <div className="relative">
          <SlCalender className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <DatePicker
            selected={startRental}
            onChange={(date) => setStartRental(date)}
            placeholderText="Pilih tanggal mulai"
            className="p-[15px] border pl-10"
            dateFormat="yyyy-MM-dd"
          />
        </div>
      </div>
      <div>
        <p>Jam Mulai Rental</p>
        <div className="bg-white">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <FormControl variant="outlined">
              <InputLabel></InputLabel>
              <Select
                value={startHour}
                onChange={handleStartHourChange}
                label="Jam"
              >
                {[...Array(24).keys()].map((h) => (
                  <MenuItem key={h} value={h}>
                    {h}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography>:</Typography>
            <FormControl variant="outlined" sx={{ minHeight: 40 }}>
              <InputLabel></InputLabel>
              <Select
                value={startMinute}
                onChange={handleStartMinuteChange}
                label="Menit"
              >
                {[0, 15, 30, 45].map((m) => (
                  <MenuItem key={m} value={m}>
                    {m.toString().padStart(2, "0")}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div>
        <p className="ml-3">Tanggal Selesai rental</p>
        <div className="relative">
          <DatePicker
            selected={endRental}
            onChange={(date) => setEndRental(date)}
            placeholderText="Pilih Tanggal selesai"
            className="p-[15px] border"
            dateFormat="yyyy-MM-dd"
          />
        </div>
      </div>
      <div>
        <p>Jam Selesai rental</p>
        <div className="bg-white">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <FormControl variant="outlined">
              <InputLabel></InputLabel>
              <Select
                value={endHour}
                onChange={handleEndHourChange}
                label="Jam"
              >
                {[...Array(24).keys()].map((h) => (
                  <MenuItem key={h} value={h}>
                    {h}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography>:</Typography>
            <FormControl variant="outlined" sx={{ minHeight: 40 }}>
              <InputLabel></InputLabel>
              <Select
                value={endMinute}
                onChange={handleEndMinuteChange}
                label="Menit"
              >
                {[0, 15, 30, 45].map((m) => (
                  <MenuItem key={m} value={m}>
                    {m.toString().padStart(2, "0")}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div>
        <div>
          <NavLink to="/rentalpages">
            <button className="mt-[24px] p-[20px] rounded-tr-[20px] rounded-br-[20px]">
              <FaSearch />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Rental;
