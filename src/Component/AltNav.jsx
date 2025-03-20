import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeCompare,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
export default function AltNav() {
  return (
    <>
      <nav className="bg-yellow-500 border-gray-200 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between gap-2 mx-auto p-4">
          <div className="gap-2 flex items-center justify-center">
            <a href="#" className="text-5xl font-extrabold text-black">
              elector<span className="text-yellow-500">.</span>
            </a>
            <button
              type="button"
              data-drawer-target="drawer-example"
              data-drawer-show="drawer-example"
              aria-controls="drawer-example"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCodeCompare}
              className="text-xl p-2 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faHeart}
              className="text-xl text-red-500 p-2 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="text-xl p-2 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-xl text-gray-500 p-2 cursor-pointer"
            />
          </div>
        </div>
      </nav>
      <div
        id="drawer-example"
        class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
        tabindex="-1"
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            class="w-4 h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 1 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          Categories
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-example"
          aria-controls="drawer-example"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close</span>
        </button>

        <ul class="space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <a
              href="#"
              class="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Smartphones
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Laptops
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Smartwatches
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Tablets
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              PC Accessories
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
