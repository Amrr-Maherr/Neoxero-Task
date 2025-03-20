import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons"; // أيقونة سماعة الرأس
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons"; // أيقونات التواصل الاجتماعي
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported.

export default function MainFooter() {
  return (
    <>
      <footer className="bg-white text-black">
        <div className="mx-auto w-[75%]  p-4 py-6 lg:py-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
            <div className="col-span-2 text-start flex flex-col justify-between">
              <p className="text-[#333E48] text-5xl font-bold">
                electro<span className="text-[#FDD700]">.</span>
              </p>
              <div className="flex my-5">
                <p>
                  <FontAwesomeIcon
                    icon={faHeadset}
                    size="3x"
                    className="mr-3 text-5xl text-yellow-400"
                  />
                </p>
                <div>
                  <p className="text-gray-300 text-sm">
                    Got Questions ? Call us 24/7!
                  </p>
                  <p className="text-2xl">(800) 8001-8588, (0600) 874 548</p>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-sm font-bold">Contact Info</p>
                <p className="text-gray-300 text-sm">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="#" className="text-gray-500 hover:text-pink-600">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-800">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="#" className="text-gray-500 hover:text-red-600">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="#" className="text-gray-500 hover:text-red-700">
                  <FontAwesomeIcon icon={faPinterest} size="2x" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <FontAwesomeIcon icon={faTiktok} size="2x" />
                </a>
              </div>
            </div>
            <div className="col-span-1 text-start">
              <p className="mb-5 font-bold">Find It Fast</p>
              <ul>
                <li className="py-3 text-gray-400 text-sm">
                  Laptops & Computers
                </li>
                <li className="py-3 text-gray-400 text-sm">
                  Cameras & Photography
                </li>
                <li className="py-3 text-gray-400 text-sm">
                  Smart Phones & Tablets
                </li>
                <li className="py-3 text-gray-400 text-sm">
                  Video Games & Consoles
                </li>
                <li className="py-3 text-gray-400 text-sm">TV & Audio</li>
                <li className="py-3 text-gray-400 text-sm">Gadgets</li>
                <li className="py-3 text-gray-400 text-sm">
                  Waterproof Headphones
                </li>
              </ul>
            </div>
            <div className="col-span-1 text-start">
              <ul className="mt-10">
                <li className="py-3 text-gray-400 text-sm">
                  Laptops & Computers
                </li>
                <li className="py-3 text-gray-400 text-sm">
                  Cameras & Photography
                </li>
                <li className="py-3 text-gray-400 text-sm">
                  Smart Phones & Tablets
                </li>
                <li className="py-3 text-gray-400 text-sm">
                  Video Games & Consoles
                </li>
                <li className="py-3 text-gray-400 text-sm">TV & Audio</li>
                <li className="py-3 text-gray-400 text-sm">Gadgets</li>
                <li className="py-3 text-gray-400 text-sm">
                  Waterproof Headphones
                </li>
              </ul>
            </div>
            <div className="col-span-1 text-start">
              <p className="mb-5 font-bold">Find It Fast</p>
              <ul>
                <li className="py-3 text-gray-400 text-sm">
                  Laptops & Computers
                </li>
                <li className="py-3 text-gray-400 text-sm">
                  Cameras & Photography
                </li>
                <li className="py-3 text-gray-400 text-sm">
                  Smart Phones & Tablets
                </li>
                <li className="py-3 text-gray-400 text-sm">
                  Video Games & Consoles
                </li>
                <li className="py-3 text-gray-400 text-sm">TV & Audio</li>
                <li className="py-3 text-gray-400 text-sm">Gadgets</li>
                <li className="py-3 text-gray-400 text-sm">
                  Waterproof Headphones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
