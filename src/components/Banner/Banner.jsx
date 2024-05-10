import React from "react";
import MonumenImg from "../../assets/monumen.jpeg";

const Banner = () => {
    return (
        <div className="min-h-[550px bg-gray-100">
            <div className="min-h-[550px] flex justify-center items-center nackdrop-blur-xl py-12 sm: py-0">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                        {/*Image section */}
                        <div >
                            <img data-aos="flip-up" src={MonumenImg} alt="" className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover" style={{ objectFit: "cover",objectPosition: "50% 25%" }}/>
                        </div>
                        {/*Text section */}
                        <div>
                            <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">Patung Sura dan Baya</h1>
                            <p className="text-sm text-gray-500 tracking-wide leading-8">Patung Sura dan Baya melambangkan "mereka yang berani menghadapi bahaya". Secara bahasa, “sura” berarti keberanian, sedangkan “baya” berarti bahaya. Dahulu ketika Kerajaan Majapahit berdiri, terjadi penyerangan oleh orang Tar-Tar atau Mongol yang menyerbu tanah Jawa. Orangnya datang dari utara pulau ini, mereka mendarat di Jawa Timur. Pemimpin tentara Jawa yang mampu mengusir Tar-Tar atau Mongol pada masa itu bernama Radén Wijaya atau cikal bakal Kerajaan Majapahit. Raden Wijaya kemudian memanggilnya dengan sebutan “sanggramacura” atau “seorang pemberani yang takut karena keberaniannya dalam menghadapi bahaya” atau dengan kata lain Çirabhaya yang berarti “berani menghadapi bahaya”. Raden Wijaya dilambangkan sebagai pejuang pemberani, sedangkan tentara Mongol melambangkan bahaya yang datang ke Pulau Jawa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;