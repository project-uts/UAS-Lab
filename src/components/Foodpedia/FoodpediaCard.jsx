import React from "react";

const FoodpediaCard = ({img, title, description}) => {
    return (
        <div className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer">
            <div className="overflow-hidden">
                <img src={img} alt="" className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110" />
            </div>

            <div className="space-y-2 p-3">
                <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
                <p className="line-clamp-8 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default FoodpediaCard;