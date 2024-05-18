import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Tour from "./pages/Tour";
import Foodie from "./pages/Foodie";
import Contact from "./pages/Contact";
import WeatherPage from "./pages/Weather";
import Travel from "./pages/Travel";
import HotelPage from "./components/Content/HotelPage";
import PesawatPage from "./components/Content/PesawatPage";
import RentalPage from "./components/Content/RentalPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/food" element={<Foodie />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/hotelpages" Component={HotelPage} />
            <Route path="/pesawatpages" Component={PesawatPage} />
            <Route path="/rentalPages" Component={RentalPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
