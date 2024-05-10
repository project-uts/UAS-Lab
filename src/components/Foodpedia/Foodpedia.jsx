import React from "react";
import Img1 from "../../assets/Foodpedia/gambar19.jpeg";
import Img2 from "../../assets/Foodpedia/gambar20.jpeg";
import Img3 from "../../assets/Foodpedia/gambar26.jpeg";
import Img4 from "../../assets/Foodpedia/gambar21.jpeg";
import Img5 from "../../assets/Foodpedia/gambar22.jpeg";
import Img6 from "../../assets/Foodpedia/gambar23.jpeg";
import Img7 from "../../assets/Foodpedia/gambar24.jpeg";
import Img8 from "../../assets/Foodpedia/gambar25.jpeg";
import FoodpediaCard from "./FoodpediaCard";

const FoodpediaData = [
    {
        id:1,
        img: Img1,
        title: "rawon",
        description: "ciri khas kuah hitam. Kuah hitamnya ini berasal dari buah keluak, lho. Selain itu, ditambahkan pula bawang merah, bawang putih, lengkuas, ketumbar, serai, hingga kunir untuk menambah cita rasa kuah dari rawon ini. Isian rawon sendiri umumnya adalah daging sapi yang dipotong kecil-kecil, dan direbus bersama rempah-rempah. Hidangan rawon ini semakin nikmat bila disantap dengan tambahan taoge pendek, daun bawang, kerupuk, sambal, dan nasi."
    },
    {
        id:2,
        img: Img2,
        title: "Rujak Cingur",
        description: "makanan khas Jawa Timur yang terkenal, tepatnya berasal dari daerah Surabaya. Sesuai namanya, makanan ini berisi cingur atau irisan mulut sapi yang telah direbus hingga empuk. Selain cingur, rujak dari Surabaya ini terdiri dari irisan buah-buahan seperti ketimun, bengkuang, mangga muda, nanas, kedondong, juga sayuran seperti kecambah, kangkung, dan kacang panjang. Kesemuanya dijadikan satu, lalu disiram dengan bumbu yang terbuat dari kacang tanah, cabai",
    },
    {
        id:3,
        img: Img3,
        title: "Lontong Balap",
        description: "makanan Jawa Timur yang berasal dari Surabaya, yaitu lontong balap. Makanan ini diracik dengan lontong, taoge, tahu goreng, lentho, serta diberi sedikit kecap manis, bawang goreng, dan sambal. Lentho sendiri adalah gorengan yang terbuat dari kacang tolo.",
    },
    {
        id:4,
        img: Img4,
        title: "Pecel Semanggi",
        description: "Semanggi adalah tanaman menjalar yang mudah ditemukan di sekitar sawah dan tepian saluran irigasi. Bentuk daunnya yang menyerupai payung menjadi bahan dasar pecel semanggi ini. Selain daun semanggi, makanan ini juga bisa ditambah dengan kecambah, kangkung, serta kerupuk uli. Untuk sambal pecel semanggi ini terbuat dari cabai, serai, belimbing sayur, dan sedikit gula jawa yang diulek menjadi satu.",
    },
    {
        id:5,
        img: Img5,
        title: "Lontong Kupang",
        description: "Kupang adalah kerang laut berukuran kecil yang biasa ditemukan di pesisir pantai. Di daerah Jawa Timur, hewan ini bisa diolah menjadi hidangan lezat, lho. Dengan membuatnya menjadi lontong kupang, kamu dapat merasakan nikmatnya . Seporsi lontong kupang biasanya terdiri dari lontong, lento singkong, sate kerang kupang dengan berbahan dasar petis. Kamu juga memerlukan kuah sebagai pelengkap makanan khas Jawa Timur ini.",
    },
    {
        id:6,
        img: Img6,
        title: "Tahu Tek",
        description: "Makanan ini berbahan dasar tahu sesuai namanya. Makanan khas Jawa Timur ini kemudian ditambahkan dengan lontong, taoge, dan acar. Tak lupa, hidangan tahu tek disiram dengan bumbu kacang petis yang menggugah selera.",
    },
    {
        id:7,
        img: Img7,
        title: "Tahu Campur",
        description: "makanan khas Jawa Timur yang berbahan dasar tahu, yakni tahu campur. Hidangan yang berasal dari Lamongan dan Surabaya ini cenderung pedas dan manis. Satu porsi tahu campur khas Surabaya biasanya berisi kentang rebus, mi kuning, lontong, taoge, potongan kikil, tahu goreng setengah matang, dan daun selada. Tak lupa, kuah khasnya yang dicampur petis menambah cita rasa hidangan ini.",
    },
    {
        id:8,
        img: Img8,
        title: "Rujak Soto",
        description: "hidangan ini merupakan perpaduan antara kuah soto dan beberapa isian rujak cingur yang khas yakni petis dan pisang batu. Rasanya yang bercampur membuat makanan ini menyegarkan. Makanan khas Banyuwangi ini juga berisi potongan daging sapi dan babat",
    }
];

const Foodpedia = () => {
    return (
        <div className="bg-gray/50 py-10">
            <div className="container">
                <h1 data-aos="fade-up"className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">FoodPedia</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {FoodpediaData.map((item, index) => (
                        <FoodpediaCard key={index} {...item}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Foodpedia;