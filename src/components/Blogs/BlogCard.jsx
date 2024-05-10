import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({image,title,description}) => {
    return (
        <Link>
            <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl ">
                <div className="overFlow-hidden">
                    <img src={image} alt="" className="mx-auto h-[220px] w-full object-cover transition-all duration-700 hover:skew-x-2 hover-scale-110" style={{ objectFit: "cover",objectPosition: "50% 25%" }}/>
                </div>
                <div className="space-y-2 py-3">
                    <h1 className="line-clamp-1 font-bold">{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default BlogCard;