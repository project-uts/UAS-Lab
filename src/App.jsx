import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogsDetails from "./pages/BlogsDetails";
import PlacesRoute from "./pages/PlacesRoute";
import NoPage from "./pages/NoPage";
import Tour from "./pages/Tour";
import Foodie from "./pages/Foodie";
import Contact from "./pages/Contact";

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogsDetails />} />
            <Route path="/places" element={<PlacesRoute />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/food" element={<Foodie />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  ); 
};

export default App;

