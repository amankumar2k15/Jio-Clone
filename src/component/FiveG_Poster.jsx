import React from "react";

const FiveG_Poster = () => {
  return (
    <div className="px-5 w-full flex items-center justify-center rounded-lg">
      <div
        className="container py-10 h-[300px] rounded-lg sm:h-full text-white fiveG-bg mx-auto text-center  overflow-hidden my-10"
      >
        <div className="text-center mx-auto rounded-lg my-5 flex flex-col items-center ">
          <img
            className=" rounded-lg w-36 h-12 mb-5"
            src="https://jep-asset.akamaized.net/jiostaticresources/v05/images/True5G-Badge-07-07-2023.svg"
            alt="imggg"
          />
          <h2 className=" text-md md:text-4xl font-bold ">Now In 6,525 Neighbourhoods</h2>
        </div>

        <button className="bg-white text-orange-600 p-3 px-4 font-bold hover:bg-orange-600 hover:text-white rounded-lg mt-10">
          Check True 5G Coverage
        </button>
      </div>
    </div>
  );
};

export default FiveG_Poster;
