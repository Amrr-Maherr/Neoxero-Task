import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeCompare,
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faBars,
  faPlus,
  faMinus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import AltNav from "./AltNav";
import { useState, useEffect } from "react";

export default function MainNav() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // دالة لإضافة عنصر إلى السلة
  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        // If item already exists, update quantity
        const updatedItems = prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return updatedItems;
      } else {
        // If item doesn't exist, add it to the cart
        const newItem = { ...item, quantity: 1 };
        const updatedItems = [...prevItems, newItem];
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return updatedItems;
      }
    });
  };

  // دالة لمسح المنتج من السلة
  const removeItem = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== itemId);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  // دالة لتحديث الكمية
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  // دالة لمسح كل المنتجات من السلة
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  // حساب عدد العناصر في السلة
  const cartItemCount = cartItems.reduce((acc, item) => {
    return acc + (Number(item.quantity) || 1);
  }, 0);

  // حساب السعر الكلي
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = Number(item.price);
    const quantity = Number(item.quantity) || 1;
    const validPrice = isNaN(price) ? 0 : price;
    const validQuantity = isNaN(quantity) ? 1 : quantity;

    return acc + validPrice * validQuantity;
  }, 0);

  return (
    <>
      <section className="my-5 hidden xl:block">
        <div className="grid grid-cols-6 w-[80%] mx-auto">
          <div className="col-span-1">
            <h1 className="text-5xl font-extrabold text-black">
              elector<span className="text-yellow-500">.</span>
            </h1>
          </div>
          <div className="col-span-4 flex items-center justify-center gap-5">
            <button
              type="button"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
              className="text-2xl p-2 rounded-lg hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="relative max-w-[400px] w-full border border-yellow-500 rounded-full overflow-hidden flex items-center">
              <input
                type="search"
                className="w-full px-4 py-2 pr-24 text-gray-700 border-none outline-none focus:ring-2 focus:ring-yellow-500 rounded-full"
                placeholder="Search..."
              />
              <select className="absolute right-12 top-1/2 -translate-y-1/2 bg-white border-none text-gray-700 px-2 py-1 outline-none rounded-md shadow-sm">
                <option value="all">All category's</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
              </select>
              <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-500 text-white p-5 rounded-e-full hover:bg-yellow-600">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
              </button>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-end gap-5">
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
            <div className="relative">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-xl text-yellow-500 p-5 cursor-pointer"
                onClick={toggleCart}
              />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold bg-red-500 text-white rounded-full">
                  {cartItemCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="block md:hidden">
        <AltNav />
      </div>
      <div
        id="drawer-navigation"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            className="w-4 h-4 me-2.5"
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
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close</span>
        </button>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Smartphones
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Laptops
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Smartwatches
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Tablets
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              PC Accessories
            </a>
          </li>
        </ul>
      </div>
      <div
        id="drawer-contact"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 flex flex-col ${
          isCartOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-contact-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          <svg
            className="w-4 h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
          Shopping Cart
        </h5>
        <button
          type="button"
          onClick={toggleCart}
          aria-controls="drawer-contact"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        {/* عرض المنتجات هنا */}
        <ul className="flex-grow overflow-y-auto">
          {cartItems.map((item) => (
            <li key={item.id} className="mb-4">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain rounded me-4"
                />
                <div>
                  <h6 className="font-semibold">{item.name}</h6>
                  <p className="text-gray-500">السعر: {item.price}</p>
                  {/* أزرار زيادة ونقصان الكمية */}
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded-l"
                      onClick={() => {
                        if ((item.quantity || 1) <= 1) {
                          removeItem(item.id);
                        } else {
                          updateQuantity(item.id, (item.quantity || 1) - 1);
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                      className="w-12 text-center border border-gray-300 rounded-none"
                      type="text"
                      value={item.quantity || 1}
                      readOnly
                    />
                    <button
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded-r"
                      onClick={() =>
                        updateQuantity(item.id, (item.quantity || 1) + 1)
                      }
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {cartItems.length === 0 && (
          <p className="text-gray-500">السلة فارغة.</p>
        )}

        {/* عرض السعر الكلي هنا */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          السعر الكلي: ${totalPrice.toFixed(2)}
        </p>

        {/* زر مسح السلة (في الأسفل) */}
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-auto"
          onClick={clearCart}
        >
          <FontAwesomeIcon icon={faTrash} className="mr-2" />
          مسح السلة
        </button>
      </div>
    </>
  );
}
