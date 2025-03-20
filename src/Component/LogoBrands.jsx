import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // لاستمرار حركة السلايدر
import "swiper/css"; // استيراد CSS الخاص بـ Swiper

// استيراد الصور
import One from "../assets/themeforest1.webp";
import Two from "../assets/themeforest2.webp";
import Three from "../assets/themeforest3.webp";
import Four from "../assets/themeforest4.webp";
import Five from "../assets/themeforest5.webp";
import Six from "../assets/themeforest6.webp";

export default function LogoPrands() {
  const images = [One, Two, Three, Four, Five, Six];

  return (
    <>
      <section className="py-8 w-[75%] mx-auto">
        {" "}
        <hr className="border-gray-300" />
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Logo ${index + 1}`}
                  className="block w-full h-20 object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <hr className="border-gray-300" />
      </section>
    </>
  );
}
