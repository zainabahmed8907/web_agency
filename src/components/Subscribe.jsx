import React from "react";

const Subscribe = () => {
  return (
    <div className=" w-full bg-black p-10 mt-10 rounded-lg  ">
      <div className="flex justify-between lg:flex-row flex-col">
        <div>
          <p className="text-white text-2xl">Stay in the loop</p>
          <p className="text-white text-sm mt-4">
            Subscribe to the receive the latest news and updates about TDA.
            <br />
            We promise not to spam you!
          </p>
        </div>

        <div className="mt-7 flex justify-center lg:flex-row flex-col">
          <input type="text" className="lg:w-96 p-2 rounded " />
          <button
            type="button"
            className="lg:-ml-20 bg-[#DC7000] p-2 text-white mt-2
             lg:mt-0 rounded w-20 "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
