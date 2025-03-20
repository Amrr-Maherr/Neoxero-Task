import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCodeCompare,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import ImagOne from "../assets/360-camers.webp";
import ImagTwo from "../assets/consal.webp";
import ImagThree from "../assets/cam4k-300x300.webp";

const ProductGridTwo = () => {
  const products = [
    {
      id: 1,
      category: "Accessories, Power Banks",
      name: "Powerbank 1130 mAh Blue",
      imageUrl: ImagOne,
      originalPrice: 210.0,
      discountedPrice: 200.0,
      cartButtonType: "icon",
    },
    {
      id: 2,
      category: "Laptops, Laptops & Computers",
      name: 'Laptop Screener CX70 2QF-621XPL 17.3" 4210',
      imageUrl: ImagTwo,
      discountedPrice: 2399.0,
      cartButtonType: "arrow",
      link: "/laptop-details",
    },
    {
      id: 3,
      category: "Game Consoles, Video Games & Consoles",
      name: "Game Console Controller + USB 3.0 Cable",
      imageUrl: ImagThree,
      discountPrice: 99.0,
      cartButtonType: "add-to-cart",
    },
    {
      id: 4,
      category: "Computer Cases, Computer",
      name: "Aerocool EN52377 Dead Silence Gaming Cube Case",
      imageUrl: ImagOne,
      originalPrice: 180.0,
      discountPrice: 150.0,
      cartButtonType: "icon",
    },
    {
      id: 5,
      category: "Home Entertainment, TVs",
      name: "Widescreen 4K SUHD TV",
      imageUrl: ImagOne,
      discountPrice: 3299.0,
      cartButtonType: "icon",
    },
    {
      id: 6,
      category: "Game Consoles, Video Games &",
      name: "GameConsole Destiny Special Edition",
      imageUrl: ImagOne,
      discountPrice: 789.0,
      cartButtonType: "icon",
    },
    {
      id: 7,
      category: "Accessories, Power Banks",
      name: "Powerbank 1130 mAh Blue",
      imageUrl: ImagOne,
      originalPrice: 210.0,
      discountedPrice: 200.0,
      cartButtonType: "icon",
    },
    {
      id: 8,
      category: "Laptops, Laptops & Computers",
      name: 'Laptop Screener CX70 2QF-621XPL 17.3" 4210',
      imageUrl: ImagTwo,
      discountedPrice: 2399.0,
      cartButtonType: "arrow",
      link: "/laptop-details",
    },
    {
      id: 9,
      category: "Game Consoles, Video Games & Consoles",
      name: "Game Console Controller + USB 3.0 Cable",
      imageUrl: ImagThree,
      discountPrice: 99.0,
      cartButtonType: "add-to-cart",
    },
    {
      id: 10,
      category: "Computer Cases, Computer",
      name: "Aerocool EN52377 Dead Silence Gaming Cube Case",
      imageUrl: ImagOne,
      originalPrice: 180.0,
      discountPrice: 150.0,
      cartButtonType: "icon",
    },
    {
      id: 11,
      category: "Home Entertainment, TVs",
      name: "Widescreen 4K SUHD TV",
      imageUrl: ImagOne,
      discountPrice: 3299.0,
      cartButtonType: "icon",
    },
    {
      id: 12,
      category: "Game Consoles, Video Games &",
      name: "GameConsole Destiny Special Edition",
      imageUrl: ImagOne,
      discountPrice: 789.0,
      cartButtonType: "icon",
    },
    {
      id: 13,
      category: "Accessories, Power Banks",
      name: "Powerbank 1130 mAh Blue",
      imageUrl: ImagOne,
      originalPrice: 210.0,
      discountedPrice: 200.0,
      cartButtonType: "icon",
    },
    {
      id: 14,
      category: "Laptops, Laptops & Computers",
      name: 'Laptop Screener CX70 2QF-621XPL 17.3" 4210',
      imageUrl: ImagTwo,
      discountedPrice: 2399.0,
      cartButtonType: "arrow",
      link: "/laptop-details",
    },
    {
      id: 15,
      category: "Game Consoles, Video Games & Consoles",
      name: "Game Console Controller + USB 3.0 Cable",
      imageUrl: ImagThree,
      discountPrice: 99.0,
      cartButtonType: "add-to-cart",
    },
    {
      id: 16,
      category: "Computer Cases, Computer",
      name: "Aerocool EN52377 Dead Silence Gaming Cube Case",
      imageUrl: ImagOne,
      originalPrice: 180.0,
      discountPrice: 150.0,
      cartButtonType: "icon",
    },
    {
      id: 17,
      category: "Home Entertainment, TVs",
      name: "Widescreen 4K SUHD TV",
      imageUrl: ImagOne,
      discountPrice: 3299.0,
      cartButtonType: "icon",
    },
    {
      id: 18,
      category: "Game Consoles, Video Games &",
      name: "GameConsole Destiny Special Edition",
      imageUrl: ImagOne,
      discountPrice: 789.0,
      cartButtonType: "icon",
    },
  ];

  const topLinks = [
    { name: "Best Deals", href: "#best-deals" },
    { name: "TV & Audio", href: "#tv-audio" },
    { name: "Cameras", href: "#cameras" },
    { name: "Audio", href: "#audio" },
    { name: "Smartphones", href: "#smartphones" },
    { name: "GPS & Navi", href: "#gps-navi" },
    { name: "Computers", href: "#computers" },
    { name: "Portable Audio", href: "#portable-audio" },
    { name: "Accessories", href: "#accessories" },
  ];

  const slider1Products = products.slice(0, 6);
  const slider2Products = products.slice(6, 12);
  const slider3Products = products.slice(12, 18);

  const renderProductCard = (product) => (
    <div className="bg-white shadow-md p-4 flex flex-col mb-2 card group">
      <div className="mb-2">
        <h3 className="text-sm text-gray-600 my-3">{product.category}</h3>
        <h2 className="text-blue-500 font-semibold">{product.name}</h2>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-[200px] w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          {product.originalPrice && (
            <p className="text-gray-500 line-through mr-2">
              ${product.originalPrice.toFixed(2)}
            </p>
          )}
          <p className="text-red-500 font-semibold">
            $
            {product.discountedPrice
              ? product.discountedPrice.toFixed(2)
              : product.discountPrice.toFixed(2)}
          </p>
        </div>
        <div className="bg-gray-300 w-[35px] h-[35px] rounded-full flex items-center justify-center hover:bg-[#FED700] hover:w-[30px] hover:h-[30px] transition-all duration-300">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-white cursor-pointer group-hover:text-white transition-colors duration-300"
          />
        </div>
      </div>

      {/* الخط والإضافات في الأسفل (يظهر عند الهوفر) */}
      <div className="border-t border-gray-300 mt-4 pt-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex gap-2 w-full text-sm justify-around">
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
    </div>
  );

  return (
    <div className="bg-gray-100 py-8 my-5">
      <div className="mx-auto px-4 w-[75%]">
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {topLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-500 font-medium hover:border-b-2 hover:border-yellow-500 py-3"
            >
              {link.name}
            </a>
          ))}
        </div>

        <hr className="border-gray-300 mb-8" />

        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {[slider1Products, slider2Products, slider3Products].map(
            (sliderProducts, index) => (
              <SwiperSlide key={index}>
                <div className="grid gap-2 md:grid-cols-3 grid-cols-1">
                  <div
                    className="md:col-span-1 col-span-1"
                    style={{ gridRow: "auto" }}
                  >
                    {sliderProducts[0] && renderProductCard(sliderProducts[0])}
                    {sliderProducts[3] && renderProductCard(sliderProducts[3])}
                  </div>

                  <div
                    className="bg-white shadow-md p-4 flex flex-col items-center mb-2 card group"
                    style={{ gridRow: "auto" }}
                  >
                    {sliderProducts[1] && (
                      <>
                        <div className="mb-2 w-full">
                          <h3 className="text-sm text-gray-600 my-3">
                            {sliderProducts[1].category}
                          </h3>
                          <h2 className="text-blue-500 font-semibold">
                            {sliderProducts[1].name}
                          </h2>
                        </div>
                        <div className="flex-grow flex items-center justify-center">
                          <img
                            src={sliderProducts[1].imageUrl}
                            alt={sliderProducts[1].name}
                            className="h-[400px] w-full object-contain"
                          />
                        </div>
                        <div className="flex items-center justify-between mt-2 w-full">
                          <div className="flex items-center">
                            <p className="text-red-500 font-semibold">
                              $
                              {sliderProducts[1].discountedPrice
                                ? sliderProducts[1].discountedPrice.toFixed(2)
                                : sliderProducts[1].discountPrice.toFixed(2)}
                            </p>
                          </div>
                          <button className="bg-yellow-400 px-10 py-2 rounded-full text-white hover:bg-gray-500">
                            <FontAwesomeIcon icon={faShoppingCart} /> add to
                            cart
                          </button>
                        </div>
                        {/* الخط والإضافات في الأسفل (يظهر عند الهوفر) */}
                        <div className="border-t w-full border-gray-300 mt-4 pt-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex gap-2 w-full text-sm justify-around">
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
                      </>
                    )}
                  </div>

                  <div
                    className="md:col-span-1 col-span-1"
                    style={{ gridRow: "auto" }}
                  >
                    {sliderProducts[4] && renderProductCard(sliderProducts[4])}
                    {sliderProducts[5] && renderProductCard(sliderProducts[5])}
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductGridTwo;
