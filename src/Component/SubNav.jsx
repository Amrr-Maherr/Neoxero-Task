import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faShoppingCart,
  faUser,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

export default function SubNav() {
  return (
    <>
      <section className="hidden xl:block">
        <div className="flex items-center justify-between p-3 text-sm text-[#646D74] w-[80%] mx-auto">
          <div>
            <p>Welcome to Worldwide Electronics Store</p>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-5">
              <li className="flex items-center gap-2 border-e-2 px-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <a href="">Store Locator</a>
              </li>
              <li className="flex items-center gap-2 border-e-2 pe-3">
                <FontAwesomeIcon icon={faTruck} />
                <a href="">Track Your Order</a>
              </li>
              <li className="flex items-center gap-2 border-e-2 pe-3">
                <FontAwesomeIcon icon={faShoppingCart} />
                <a href="">Shop</a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faUser} />
                <a href="">My Account</a>
              </li>
            </ul>
          </div>
        </div>
        <hr/>
      </section>
    </>
  );
}
