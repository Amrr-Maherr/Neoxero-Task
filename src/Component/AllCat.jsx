import ImagOne from "../assets/consal.webp";
import MainImg from "../assets/footer-widget-img-01.webp";

export default function AllCat() {
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
      originalPrice: "$180.00",
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

  const firstColumn = products.slice(0, 3);
  const secondColumn = products.slice(3, 6);
  const thirdColumn = products.slice(0, 3); // Duplicate the first column for demonstration

  return (
    <>
      <section className="mt-[30px]">
        <div className="w-[75%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="mt-5">
            <h2 className="text-xl font-light border-b-2 border-yellow-500 pb-3 mb-5">
              Featured Products
            </h2>
            {firstColumn.map((product, index) => (
              <div
                key={index}
                className="rounded-lg p-4  mb-4 flex items-center"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-20 h-20 object-contain rounded-md mr-4"
                />
                <div className="w-2/3 pl-4">
                  <h3 className="text-sm font-semibold mb-1 text-[#116CC1]">
                    {product.name}
                  </h3>
                  <div className="text-yellow-500">★★★★★</div>{" "}
                  {/* Static 5-star rating */}
                  <p className="text-gray-300 font-light">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-gray-400 line-through">
                      {product.originalPrice}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="mt-5">
            <h2 className="text-xl font-light border-b-2 border-yellow-500 pb-3 mb-5">
              Top Selling Products
            </h2>
            {secondColumn.map((product, index) => (
              <div
                key={index}
                className=" rounded-lg p-4 mb-4 flex items-center"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-20 h-20 object-contain rounded-md mr-4"
                />
                <div className="w-2/3 pl-4">
                  <h3 className="text-sm font-semibold mb-1 text-[#116CC1]">
                    {product.name}
                  </h3>
                  <div className="text-yellow-500">★★★★★</div>{" "}
                  {/* Static 5-star rating */}
                  <p className="text-gray-300 font-light">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-gray-400 line-through">
                      {product.originalPrice}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Column 3 */}
          <div className="mt-5">
            <h2 className="text-xl font-light border-b-2 border-yellow-500 pb-3 mb-5">
              On-sale Products
            </h2>
            {thirdColumn.map((product, index) => (
              <div key={index} className="p-4 mb-4 flex items-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-20 h-20 object-contain rounded-md mr-4"
                />
                <div className="w-2/3 pl-4">
                  <h3 className="text-sm font-semibold mb-1 text-[#116CC1]">
                    {product.name}
                  </h3>
                  <div className="text-yellow-500">★★★★★</div>{" "}
                  {/* Static 5-star rating */}
                  <p className="text-gray-300 font-light">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-gray-400 line-through">
                      {product.originalPrice}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Column 4 (Empty) */}
          <div className="mt-5">
            <img src={MainImg} alt="" className="object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}
