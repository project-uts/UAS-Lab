import React from "react";

const NextArrow = ({ onClick }) => {
  return (
    <button className="slick-arrow slick-next" onClick={onClick}>
      Next
    </button>
  );
};

export default NextArrow;
