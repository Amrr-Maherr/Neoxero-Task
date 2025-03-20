import React, { useState } from "react";
import ImagOne from "../assets/360-camers.webp";
import ImagTwo from "../assets/consal.webp";
import ImagThree from "../assets/cam4k-300x300.webp";
import SpecialOfferCard from "./SpecialOfferCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    category: "Special Offer",
    name: "Game Console Controller + USB 3.0 Cable",
    brand: "Purple NX Mini F1 aparat SMART NX",
    price: "$99.00",
    originalPrice: "$2,299.00",
    image: ImagOne,
    isSpecial: true,
  },
  {
    id: 2,
    category: "Featured",
    name: "Wireless Audio System Multiroom 360",
    brand: "Audio Speakers, TV & Audio",
    price: "$2,100.00",
    image: ImagTwo,
  },
  {
    id: 3,
    category: "Featured",
    name: "Tablet Elitebook Revolve 810 G2",
    brand: "Laptops & Computers",
    price: "$1,050.00",
    image: ImagThree,
  },
  {
    id: 4,
    category: "On Sale",
    name: "White Solo 2 Wireless",
    brand: "Accessories, Headphones",
    price: "$248.99",
    image: ImagOne,
  },
  {
    id: 5,
    category: "Top Rated",
    name: "Smartphone GS 32GB LTE",
    brand: "Smartphones & Tablets",
    price: "$1,100.00",
    image: ImagTwo,
  },
  {
    id: 6,
    category: "Featured",
    name: "Cameras & Photography",
    brand: "SMART NX",
    price: "$550.00",
    image: ImagThree,
  },
  {
    id: 7,
    category: "Featured",
    name: "Printers & Ink",
    brand: "Full Color LaserJet Pro M452dn",
    price: "$1,050.00",
    image: ImagOne,
  },
];

const ProductList = () => {
  const categories = ["Special Offer", "Featured", "On Sale", "Top Rated"];
  const [selectedCategory, setSelectedCategory] = useState("Special Offer");
  const filteredProducts =
    selectedCategory === "Special Offer"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[75%] mx-auto items-start">
        <div className="col-span-1 h-full">
          <SpecialOfferCard />
        </div>
        <div className="p-5 font-sans col-span-2">
          <div className="flex justify-center mb-5 border-b-2">
            {categories.map((category) => (
              <span
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 cursor-pointer text-xl ${
                  selectedCategory === category
                    ? "border-b-2 border-yellow-400 font-bold text-black"
                    : "text-gray-600"
                }`}
              >
                {category}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            <div
              className={`${
                selectedCategory === "Special Offer"
                  ? "lg:col-span-4"
                  : "lg:col-span-4"
              } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5`}
            >
              {filteredProducts
                .filter(
                  (product) =>
                    selectedCategory !== "Special Offer" || !product.isSpecial
                )
                .map((product) => (
                  <div
                    key={product.id}
                    className="card relative p-4 text-center hover:scale-105 transition-transform duration-300 hover:shadow group"
                  >
                    <div className="product-info text-start">
                      <p className="text-xs text-gray-500 mb-2">
                        {product.brand}
                      </p>
                      <h3 className="text-sm font-medium text-[#0062bd] mb-1">
                        {product.name}
                      </h3>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-contain mb-2"
                      />
                      <div className="flex justify-between items-center gap-2">
                        <p className="text-lg font-bold text-black">
                          {product.price}
                        </p>
                        <div className="bg-gray-300  w-[35px] h-[35px] rounded-full flex items-center justify-center hover:bg-[#FED700] hover:w-[30px] hover:h-[30px] transition-all duration-300">
                          <FontAwesomeIcon
                            icon={faShoppingCart}
                            className="text-white cursor-pointer group-hover:text-white transition-colors duration-300"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-300 mt-4 pt-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-between gap-2 w-full text-sm">
                        <div className="flex items-center">
                          <FontAwesomeIcon
                            icon={faBalanceScale}
                            className="text-gray-500 hover:text-blue-500 cursor-pointer"
                          />
                          WishList
                        </div>
                        <div className="flex items-center">
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="text-gray-500 hover:text-red-500 cursor-pointer"
                          />
                          Compare
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
