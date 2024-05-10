import React from "react";

const NextArrow = ({ onClick }) => {
    return (
        <button className="slick-arrow slick-next bg-sky-blue" onClick={onClick}>
            Next
        </button>
    );
};

export default NextArrow;
