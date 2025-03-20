import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faCodeCompare,
} from "@fortawesome/free-solid-svg-icons";
import getData, { addToCart } from "../Redux/ActionCreator";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import toast, { Toaster } from "react-hot-toast";
config.autoAddCss = false;

const BestSellers = () => {
  const products = useSelector((state) => state.products);
  const cartError = useSelector((state) => state.cartError);
  const dispatch = useDispatch();

  const [isButtonDisabled, setIsButtonDisabled] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const topLinks = [
    { name: "Top 20", href: "#top20" },
    { name: "Smart Phones & Tablets", href: "#smartphones-tablets" },
    { name: "Laptops & Computers", href: "#laptops-computers" },
    { name: "Video Cameras", href: "#video-cameras" },
  ];

  if (!products) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = async (product) => {
    setIsButtonDisabled((prevState) => ({ ...prevState, [product.id]: true }));
    const added = await dispatch(addToCart(product));
    if (added) {
      toast.success(`${product.title} added to cart!`);
    } else {
      toast.error(`${product.title} is already in cart!`);
    }

    setTimeout(() => {
      setIsButtonDisabled((prevState) => ({
        ...prevState,
        [product.id]: false,
      }));
    }, 1000);

    if (cartError) {
      toast.error(`Error adding to cart: ${cartError}`);
    }
  };

  return (
    <>
      <div className="bg-white py-4 w-[75%] mx-auto my-5">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center  overflow-auto">
            <h2 className="text-2xl font-extralight text-gray-800 border-b-3 border-yellow-400 pb-2">
              Best Sellers
            </h2>
            <div className="flex space-x-4 text-gray-600">
              {topLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 rounded-full px-3 hover:bg-gray-300 transition duration-200 text-sm hover:border-b-2 hover:border-yellow-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <hr />
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="h-[250px] card p-4 flex items-center hover:shadow relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-1/2 h-1/1 object-cover mr-4"
                />
                {/* Product Details */}
                <div>
                  <h3 className="text-sm text-gray-500">{product.category}</h3>
                  <h2 className="text-blue-500 font-semibold text-base">
                    {product.title.slice(0, 8)}...
                  </h2>
                  {/* Price and Add to Cart */}
                  <div className="flex justify-center gap-2 items-center mt-2">
                    <p className="text-gray-700 font-semibold text-sm">
                      {product.price}
                    </p>
                    <div
                      className={`bg-gray-300  w-[35px] h-[35px] rounded-full flex items-center justify-center transition-all duration-300
                      ${
                        isButtonDisabled[product.id]
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-[#FED700] hover:w-[30px] hover:h-[30px] cursor-pointer"
                      }`}
                      onClick={() =>
                        !isButtonDisabled[product.id] &&
                        handleAddToCart(product)
                      }
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="text-white transition-colors duration-300"
                      />
                    </div>
                  </div>
                </div>
                {/* Compare & Wishlist (Hidden by default, shown on hover) */}
                <div
                  className={`absolute bottom-0 left-0 w-full bg-white p-4 border-t border-gray-300 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faCodeCompare}
                      className="text-gray-500 hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Compare</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-gray-500 hover:text-red-500 cursor-pointer"
                    />
                    <span className="text-sm">Wishlist</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default BestSellers;
