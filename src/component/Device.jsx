import React from "react";

const Device = () => {
  return (
    <div className="px-4">
      <div className="text-center p-5 mb-5 flex flex-col items-center ">
        <h2 className="lg:text-6xl lg:max-w-3xl text-4xl text-left  text-black font-extrabold my-5">
          Latest and trending devices
        </h2>
        <p className="lg:text-xl text-left font-normal text-gray-500">
          Get the best deals on all the latest devices on your wish list.
        </p>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row lg:justify-between lg:max-w-6xl mx-auto gap-3 p-2 ">
        <div className="lg:w-1/3 p-5 box-shadow  rounded-xl cursor-pointer ">
          <button className="my-4 hover:transition duration-700 ease-in-out bg-color-secondary  px-2 py-1 text-white rounded-md">
            New Launch
          </button>
          <img className="" src="https://www.jio.com/23.png" alt="" />
          <p className="text-xl font-bold">Jio Bharat</p>
          <p>$99</p>
        </div>
        <div className="lg:w-1/3 p-5 box-shadow rounded-xl cursor-pointer ">
          <button className="my-4 bg-color-secondary  px-2 py-1 text-white rounded-md">
            New Launch
          </button>
          <img className=" " src="https://www.jio.com/384x217.jpg" alt="" />
          <p className="text-xl font-bold">Jio Drive</p>
          <p>$15</p>
        </div>
        <div className="lg:w-1/3 p-5 box-shadow rounded-xl cursor-pointer">
          <button
            style={{ visibility: "hidden" }}
            className="my-4 bg-color-secondary  px-2 py-1 text-white rounded-md  "
          >
            New Launch
          </button>
          <img className="" src="https://www.jio.com/accessories2-min.jpg" alt="" />
          <p className="text-xl font-bold">wifi mesh extender</p>
          <p>$25</p>
        </div>
      </div>

      <div className="text-center p-1 my-6">
        <button className="rounded-3xl border border-1 border-solid border-gray-800  text-whit p-2 text-sm font-bold bW hover:border hover:border-1 hover:border-solid hover:border-blue-600">
          View All Products
        </button>
      </div>
      <div className=" mx-auto h-96 flex items-center max-w-5xl rounded-lg my-5  work-learn-grow-bg  ">
        <div className=" mb-5 flex flex-col p-6 ">
          <h2 className=" text-4xl md:text-6xl max-w-xl  text-white  font-bold my-5">
            Work learn and grow
          </h2>
          <p className="text-xl font-bold text-gray-100">
            Build an Event Full Carreer
          </p>
          <button className="rounded-3xl mt-5 w-40 bg-blue-500  py-3 text-whit  text-sm font-bold bW hover:border hover:border-1 hover:border-solid hover:border-blue-600">
            View Job Openings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Device;
