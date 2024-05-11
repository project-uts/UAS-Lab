import React from "react";
import ReogImg from "../../assets/reog.jpeg";

const Banner2 = () => {
  return (
    <div className="min-h-[550px bg-gray-100">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm: py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/*Image section */}
            <div>
              <img
                data-aos="flip-up"
                src={ReogImg}
                alt=""
                className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                style={{ objectFit: "cover", objectPosition: "50% 25%" }}
              />
            </div>
            {/*Text section */}
            <div>
              <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">
                Reog Ponorogo
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-8">
                Reog Ponorogo adalah seni pertunjukan tradisional dari Ponorogo,
                Jawa Timur, Indonesia. Pertunjukan ini melibatkan tarian, musik
                gamelan, dan penampilan maskot hewan mitologis. Reog dikenal
                karena penampilan Warok, penari maskot singa, dan panggung besar
                berhiaskan hiasan khas. Pertunjukan ini tidak hanya menghibur,
                tetapi juga memiliki makna simbolis yang dalam dalam budaya
                Jawa, menggambarkan keberanian dan kekuatan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
