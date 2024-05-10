import React from "react";

const PrevArrow = ({ onClick }) => {
    return (
        <button className="slick-arrow slick-prev" onClick={onClick}>
            Prev
        </button>
    );
};

export default PrevArrow;
