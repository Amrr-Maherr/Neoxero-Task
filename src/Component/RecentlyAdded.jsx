import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImagOne from "../assets/consal.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCodeCompare,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const RecentlyAdded = () => {
  const products = [
    {
      category: "Laptops, Laptops &",
      name: "Notebook Widescreen Y700-",
      price: "$1,299.00",
      imageUrl: ImagOne,
    },
    {
      category: "Laptops, Laptops &",
      name: 'Laptop WiFi CX61 2QF 15.6" 4210M',
      price: "$2,299.00",
      imageUrl: ImagOne,
    },
    {
      category: "Laptops, Laptops &",
      name: "Laptop Screener CX70 2QF-621XPL",
      price: "$2,399.00",
      imageUrl: ImagOne,
    },
    {
      category: "Computer Cases,",
      name: "Aerocool EN52377 Dead Silence",
      price: "$150.00",
      imageUrl: ImagOne,
    },
    {
      category: "Printers, Printers & Ink",
      name: "Full Color LaserJet Pro M452dn",
      price: "$1,050.00",
      imageUrl: ImagOne,
    },
    {
      category: "Cameras, Cameras &",
      name: "White NX Mini F1 SMART NX",
      price: "$559.00",
      imageUrl: ImagOne,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-white my-10 mx-auto w-[75%]">
      <div className="px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-extralight text-gray-800 border-b-2 border-b-yellow-500 py-3">
            Recently Added
          </h2>
        </div>
        <hr />
        <Swiper
          modules={[Pagination]}
          spaceBetween={5}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 5 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 15 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="group">
                <div className="text-sm text-gray-300 my-3">
                  <p>{product.category}</p>
                </div>
                <div className="text-sm my-3">
                  <p className="text-[#34BCEC]">{product.name.slice(0, 15)}</p>
                </div>
                <figure>
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="w-1/2 block mx-auto"
                  />
                </figure>
                <div className="flex items-center justify-between flex-row-reverse my-3">
                  <div className="bg-gray-300  w-[35px] h-[35px] rounded-full flex items-center justify-center hover:bg-[#FED700] hover:w-[30px] hover:h-[30px] transition-all duration-300">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-white cursor-pointer group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <p>{product.price}</p>
                </div>
                <div
                  className={`flex items-center justify-between border-t-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCodeCompare}
                      className="text-gray-500 hover:text-blue-500 cursor-pointer mr-1"
                    />
                    Compare
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-gray-500 hover:text-red-500 cursor-pointer mr-1"
                    />
                    WishList
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentlyAdded;
