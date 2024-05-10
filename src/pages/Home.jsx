import React from "react";
import MainVid from "../assets/video/MainVid.mp4";
import Hero from "../components/Hero/Hero";
import Places from "../components/Places/Places";
import BannerImg from "../components/BannerImg/BannerImg";
import Batik from "../assets/batik.jpeg";
import Blogs from "./Blogs";
import Banner from "../components/Banner/Banner";
import Timur from "../assets/vector2.jpeg";
import ContactComp from "../components/Contact/ContactComp";
import Foodpedia from "../components/Foodpedia/Foodpedia";



const Home = () => {
    return (
        <>
            <div>
                <div className="relative h-[700px]">
                    <video autoPlay loop muted className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]">
                        <source src={MainVid} type="video/mp4"/>
                    </video>
                    <Hero/>
                </div>
                <Places />
                <BannerImg img={Batik}/>
                <Blogs />
                <Banner />
                <BannerImg img={Timur} />
                <Foodpedia />
                <ContactComp />
            </div>
        </>
    );
};

export default Home;