import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported.

export default function LastFooter() {
  return (
    <>
      <div className=" bg-[#eaeaea] p-2">
        <div className=" flex justify-between items-center  mx-auto w-[75%]">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 Electro. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:mt-0 gap-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <FontAwesomeIcon
                icon={faCcVisa}
                size="2x"
                style={{ color: "#1a1f71" }}
              />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <FontAwesomeIcon
                icon={faCcMastercard}
                size="2x"
                style={{ color: "#ff6c00" }}
              />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <FontAwesomeIcon
                icon={faCcAmex}
                size="2x"
                style={{ color: "#29abe2" }}
              />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <FontAwesomeIcon
                icon={faCcPaypal}
                size="2x"
                style={{ color: "#00457c" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
