export default function FirstFooter() {
  return (
    <>
      <div className="py-1 bg-yellow-400 ">
        <div className="w-[75%] mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center justify-center gap-5 my-2">
            <p>
              <i class="fa-solid fa-message"></i>
            </p>
            <p className="text-2xl">Sign up to Newsletter</p>
          </div>
          <div className="my-2">
            <p>...and receive $20 coupon for first shopping</p>
          </div>
          <div className="flex items-center my-2">
            <input
              type="search"
              name=""
              id=""
              className="flex-grow border rounded-l-full px-1 py-2 focus:outline-none"
              placeholder="ENTER YOUR EMAIL"
            />
            <button className="bg-[#333E48] hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-r-full w-full">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
