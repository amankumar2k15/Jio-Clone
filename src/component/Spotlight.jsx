import React from "react";

const Spotlight = () => {
  return (
    <div className="p-5 my-5 lg:mb-28">
      <div className="text-center mb-5  ">
        <h2 className="lg:text-7xl text-3xl text-black font-bold my-5">In the spotlight</h2>
        <p className="text-xl text text-gray-400">
          The best deals, news, and products.
        </p>
      </div>

      <div className="bg-violet-600 rounded-2xl p-5  lg:p-10 text-white">
        <p className="text-2xl text font-bold text-white">Jio Drive</p>
        <h2 className="lg:text-5xl text-3xl font-extrabold my-2">
          Enjoy private viewing on a 100-inch screen
        </h2>
        <p className="text-xl text my-5 text-gray-400">
          Now get 48% off on JioDive
        </p>

        <button className="rounded-3xl border border-1 border-solid  px-3 border-white text-whit p-2 text-sm font-bold ">
          Buy for 1299
        </button>
        <div className="spotlight-bg "></div>
      </div>

      <div className=" text-white my-10 flex gap-y-14 md:gap-y-0  flex-wrap flex-row justify-evenly ">
        <div className=" my-2 relative max-w-sm">
          <img className="object-contain rounded-2xl" src=" https://www.jio.com/netmeds-v1.png" alt="" />
          <div className="p-5 round-top bg-blue-700 w-[280px] sm:w-[350px]">
            <h2 className="text-4xl my-5 font-bold text-left">
              Get Free Delhivery On First Order
            </h2>
            <button className="rounded-3xl mt-3  bg-blue-500 border-gray-400 py-1 text-whit p-3 text-sm font-bold bW hover:border hover:border-1 hover:border-solid hover:border-blue-600">
              Order On Netmeds
            </button>
          </div>
        </div>

        <div className="max-w-sm my-2 relative ">
          <img className="object-contain rounded-2xl" src=" https://www.jio.com/urban-ladder-v1.png" alt="" />
          <div className="p-5 round-top bg-blue-700 w-[280px] sm:w-[350px]">
            <h2 className="text-4xl my-5 font-bold text-left">
              Save upto 80% in furniture shopping
            </h2>
            <button className="rounded-3xl mt-3  bg-blue-500  py-1 text-whit p-3 text-sm font-bold bW hover:border hover:border-1 hover:border-solid hover:border-blue-600">
              Go To Urban Ladder
            </button>
          </div>
        </div>

        <div className="max-w-sm my-2 relative ">
          <img className="object-contain rounded-2xl" src=" https://www.jio.com/ajio-v1.png" alt="" />
          <div className="p-5 round-top bg-blue-700 w-[280px] sm:w-[350px]">
            <h2 className="text-4xl my-5 font-bold text-left">
              Get Big Discount On fashionable season
            </h2>
            <button className="rounded-3xl mt-3  bg-blue-500 border-gray-400 py-1 text-whit p-3 text-sm font-bold bW hover:border hover:border-1 hover:border-solid hover:border-blue-600">
              Shop At Jio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
