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
    <div className="mt-[100px]">
      <h2>Weather</h2>
      <select value={selectedRegion} onChange={handleRegionChange}>
        <option value="">Select Region</option>
        {regions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.kota}
          </option>
        ))}
      </select>
      {weatherData ? (
        <div className="flex justify-evenly">
          <div>
            <p>{weatherData[0].jamCuaca}</p>
            <p>{weatherData[0].tempC}°C</p>
            <img
              src={`https://ibnux.github.io/BMKG-importer/icon/${weatherData[0].kodeCuaca}.png`}
              alt="Weather icon"
            />
          </div>
          <div>
            <p>{weatherData[1].jamCuaca}</p>
            <p>{weatherData[1].tempC}°C</p>
            <img
              src={`https://ibnux.github.io/BMKG-importer/icon/${weatherData[1].kodeCuaca}.png`}
              alt="Weather icon"
            />
          </div>
          <div>
            <p>{weatherData[2].jamCuaca}</p>
            <p>{weatherData[2].tempC}°C</p>
            <img
              src={`https://ibnux.github.io/BMKG-importer/icon/${weatherData[1].kodeCuaca}.png`}
              alt="Weather icon"
            />
          </div>
          <div>
            <p>{weatherData[3].jamCuaca}</p>
            <p>{weatherData[3].tempC}°C</p>
            <img
              src={`https://ibnux.github.io/BMKG-importer/icon/${weatherData[1].kodeCuaca}.png`}
              alt="Weather icon"
            />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
