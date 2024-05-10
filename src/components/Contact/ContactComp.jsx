import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/Contact/gambar15.jpg";
import Img2 from "../../assets/Contact/gambar16.jpg";
import Img3 from "../../assets/Contact/gambar17.jpg";
import Img4 from "../../assets/Contact/gambar18.jpg";

const ContactData = [
    {
        id:1,
        name: "Albert",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sit sequi earum, dolorum ex exercitationem dolores eos id asperiores itaque!",
        img: Img1,
    },
    {
        id:2,
        name: "Rafi",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sit sequi earum, dolorum ex exercitationem dolores eos id asperiores itaque!",
        img: Img2,
    },
    {
        id:3,
        name: "Pierre",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sit sequi earum, dolorum ex exercitationem dolores eos id asperiores itaque!",
        img: Img3,
    },
    {
        id:4,
        name: "Obert",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sit sequi earum, dolorum ex exercitationem dolores eos id asperiores itaque!",
        img: Img4,
    },
];

const ContactComp = () => {
    
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-10">
            <div className="container">
                {/*Header Section */}
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Contact</p>
                    <h1 className="text-3xl font-bold">Contact</h1>
                    <p className="text-xs text-gray-400">Halo Perkenalkan Anggota Kelompok Kami</p>
                </div>
                {/*Contact section */}
                <Slider {...settings}>
                    {ContactData.map(({id,name,text,img}) => {
                            return(
                                <div key={id} className="my-6">
                                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
                                        <img src={img} className="rounded-full block mx-auto"  style={{width: "50%"}} />
                                        <h1 className="text-xl font-bold">{name}</h1>
                                        <p className="text-gray-500 text-sm">{text}</p>
                                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">"</p>
                                    </div>
                                </div>
                            );
                        })}
                </Slider>
            </div>
        </div>
    );
};

export default ContactComp;