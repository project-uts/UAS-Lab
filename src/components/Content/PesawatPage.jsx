import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const airportCodes = {
  surabaya: "SUB.AIRPORT",
  jakarta: "CGK.AIRPORT",
};

const formatDate = (date) => {
  return new Date(date).toISOString().split("T")[0];
};

const PesawatPage = () => {
  const location = useLocation();
  const { inputValueDari, inputValueKe, startDate, endDate } =
    location.state || {};

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

  const formatToIDR = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  console.log(results.data);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1>Flights</h1>
        {
          <ul>
            {results.data &&
              results.data.aggregation &&
              results.data.aggregation.airlines &&
              results.data.aggregation.airlines.map((airline, index) => (
                <li
                  key={index}
                  className="flex items-center p-4 border-b border-gray-200"
                >
                  <img
                    src={airline.logoUrl}
                    alt={`${airline.name} logo`}
                    className="w-12 h-12 mr-4"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-lg">
                      Flight Name: {airline.name}
                    </div>
                    <div className="text-gray-500">
                      {formatToIDR(
                        airline.minPrice.units + airline.minPrice.nanos / 1e9
                      )}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        }
      </div>
      <div></div>
    </div>
  );
};

export default PesawatPage;
