import axios from "axios";
import React, { useState, useEffect } from "react";

const WeatherWidget = () => {
  // State untuk menyimpan data cuaca, region yang dipilih, dan daftar region
  const [weatherData, setWeatherData] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [regions, setRegions] = useState([]);

  // Mengambil data wilayah saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await axios.get(
          "https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json"
        );
        setRegions(response.data);
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };

    fetchRegions();
  }, []);

  // Menangani perubahan pada pilihan region
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  // Mengambil data cuaca saat region dipilih
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (selectedRegion) {
        try {
          const response = await axios.get(
            `https://ibnux.github.io/BMKG-importer/cuaca/${selectedRegion}.json`
          );
          setWeatherData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    };

    fetchWeatherData();
  }, [selectedRegion]);

  // Mengambil id dari region dengan propinsi "JawaTimur" dan kota "Surabaya"
  useEffect(() => {
    if (regions.length > 0) {
      const region = regions.find(
        (region) =>
          region.propinsi === "JawaTimur" && region.kecamatan === "Surabaya"
      );
      if (region) {
        setSelectedRegion(region.id);
      }
    }
  }, [regions]);

  return (
    <div className="mt-20 bg-gray-50 p-8 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Weather</h2>
      <select
        value={selectedRegion}
        onChange={handleRegionChange}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="">Select Region</option>
        {regions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.kota}
          </option>
        ))}
      </select>
      {weatherData ? (
        <div className="flex justify-evenly mt-4">
          {weatherData.slice(0, 4).map((data, index) => (
            <div key={index} className="text-center">
              <p className="text-sm">{data.jamCuaca}</p>
              <p className="text-lg font-bold">{data.tempC}°C</p>
              <img
                src={`https://ibnux.github.io/BMKG-importer/icon/${data.kodeCuaca}.png`}
                alt="Weather icon"
                className="w-12 h-12 mx-auto"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-center">Loading...</p>
      )}
    </div>
  );
};
export default WeatherWidget;
