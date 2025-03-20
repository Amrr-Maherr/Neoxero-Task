import { useState } from "react";
import CategoriesBox from "./CategoriesBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgOne from "../assets/360-camers.webp"
import ImgTwo from "../assets/cam4k-300x300.webp"
import ImgThree from "../assets/consal.webp"
import {
  faArrowRight,
  faShoppingCart,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
export default function Categories() {
  const [data] = useState([
    {
      title: "Cameras",
      subTitle: "Explore cameras",
      icon: faShoppingCart,
      image: ImgOne,
    },
    {
      title: "Accessories",
      subTitle: "Perfect access.",
      icon: faStar,
      image: ImgTwo,
    },
    {
      title: "More",
      subTitle: "Discover items",
      icon: faArrowRight,
      image: ImgThree,
    },
    {
      title: "Favorites",
      subTitle: "Your fav items",
      icon: faHeart,
      image: ImgThree,
    },
  ]);
  return (
    <>
      <section className="my-10">
        <div className="container mx-auto p-4 w-[80%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data &&
              data?.map(
                (
                  box,
                  index // added index
                ) => (
                  <CategoriesBox key={index} box={box} /> // added key
                )
              )}
          </div>
        </div>
      </section>
    </>
  );
}
