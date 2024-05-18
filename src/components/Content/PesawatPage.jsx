import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const airportCodes = {
  surabaya: "SUB.AIRPORT",
  jakarta: "CGK.AIRPORT",
  // tambahkan konversi lainnya jika diperlukan
};

const formatDate = (date) => {
  return new Date(date).toISOString().split("T")[0];
};

const PesawatPage = () => {
  const location = useLocation();
  const { inputValueDari, inputValueKe, startDate, endDate } =
    location.state || {};

  const [airlines, setAirlines] = useState([]);

  const fromId = inputValueDari
    ? airportCodes[inputValueDari.toLowerCase()]
    : "";
  const toId = inputValueKe ? airportCodes[inputValueKe.toLowerCase()] : "";
  const departDate = startDate ? formatDate(startDate) : "";
  const returnDate = endDate ? formatDate(endDate) : "";

  const [results, setResults] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights",
      params: {
        fromId: fromId,
        toId: toId,
        departDate: departDate,
        returnDate: returnDate,
        currency_code: "IDR",
      },
      headers: {
        "X-RapidAPI-Key": "3cdb8c2aa4msh604808aeb8220dbp189333jsn9470790cb24f",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, [fromId, toId, departDate, returnDate]);
  console.log(results.data);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Flights</h1>
    </div>
  );
};

export default PesawatPage;
