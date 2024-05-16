import React from "react";
import MainVid from "../assets/video/MainVid.mp4";
import Content from "../components/Content/Content";

const Travel = () => {
  return (
    <div className="relative h-[700px]">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
      >
        <source src={MainVid} type="video/mp4" />
      </video>
      <Content />
    </div>
  );
};

export default Travel;
