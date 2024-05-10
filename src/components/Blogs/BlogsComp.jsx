import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "./BlogCard";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import Img1 from "../../assets/BajuAdat/gambar12.jpeg";
import Img2 from "../../assets/BajuAdat/gambar13.jpeg";
import Img3 from "../../assets/BajuAdat/gambar14.jpeg";

const BlogsData = [
    {
        id: 1,
        image: Img1,
        title: "Baju Gothil",
        description: "Baju Gothil  atau warok ponorogo merupakan pakaian adat Jawa Timur in dipakai oleh para pria. Pakaian tradisional ini memiliki warna yang kkhas yakni hitam polos dengan ukuran longgar serta lengan panjang. Baju adat ini memiliki pasangannya, yakni Celana Komprang yang ukurannya besar dan longgar saat dipakai seolah memberi ruang pada penggunanya untuk menikmati ruang gerak. Bentuk celana ini pun cukup unik, ditambah lagi celana ini dijahit dengan teknik khusus.", 
    },
    {
        id: 2,
        image: Img2,
        title: "Pakaian Mantenan",
        description: "Baju Mantenan berwarna dasar hitam, baik untuk pria maupun wanita. Untuk memperindah penampilan, terdapat sulaman benang emas mulai dari bagian leher, hingga ke dada, dan menyambung ke seluruh bagian pinggir, termasuk ujung lengan. Aksesoris yang dikenakan antara lain odheng, bunga melati, arloji, kain selempang, tongkat, dan lain-lain.",
    },
    {
        id: 3,
        image: Img3,
        title: "Kebaya Rancongan",
        description: "Pakaian ini pun memiliki motif sederhana dan biasanya terbuat dari kain tipis dan menerawang, seperti brokat. Agar kebaya ini nampak serasi dengan bawahannya, wanita Madura mengenakan kain batik yang dikenakan seperti rok panjang.",
    },
]

const BlogsComp = () => {
    const [popupData, setPopupData] = useState(null);

    const openPopup = (data) => {
        setPopupData(data);
    };

    const closePopup = () => {
        setPopupData(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div>
            <div className="container">
                <h1 data-aos="fade-up" className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Cultural</h1>
                <Slider {...settings}>
                    {BlogsData.map((item, index) => (
                        <div key={index} onClick={() => openPopup(item)}>
                            <BlogCard {...item} />
                        </div>
                    ))}
                </Slider>
            </div>
            {popupData && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" onClick={closePopup}>
                    <div className="bg-white p-4 rounded-lg max-w-lg">
                        <button className="absolute top-0 right-0 m-2" onClick={closePopup}>
                            Close
                        </button>
                        <img src={popupData.image} alt={popupData.title} className="mb-2 rounded-lg" style={{ width: "100%" }} />
                        <h2 className="text-xl font-bold">{popupData.title}</h2>
                        <p>{popupData.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogsComp;
