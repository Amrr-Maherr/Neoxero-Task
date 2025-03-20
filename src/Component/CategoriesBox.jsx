import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function CategoriesBox({box}) {
  return (
    <>
      <a href="#">
        <div className="bg-[#f5f5f5] rounded-lg shadow-sm overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg border border-gray-100 flex items-center p-4">
          <figure>
            <img
              src={box.image}
              alt="Category 1"
              className="w-20 h-20 object-cover rounded-lg"
            />
          </figure>
          <div className="ml-4">
            <p className="text-gray-600 mb-4 text-sm ">{box.title}</p>
            <div className="flex items-center justify-center gap-1">
              <p>{box.subTitle}</p>
              <FontAwesomeIcon
                className="text-xl bg-yellow-400 p-2 rounded-full text-white hover:scale-75 transition-all"
                icon={faArrowRight}
              />
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
