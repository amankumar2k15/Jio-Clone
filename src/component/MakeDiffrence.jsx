import React from "react";
import { TbHelpSquare } from "react-icons/tb";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FcCallback } from "react-icons/fc";
import { PiStorefrontBold } from "react-icons/pi";
const MakeDiffrence = () => {
  return (
    <div>
      <div>
        <div className="lg:text-center mb-3  p-5 ">
          <h2 className="lg:text-7xl lg:text-center text-5xl text-left  text-black font-bold my-5">
            In the spotlight
          </h2>
          <p className="lg:text-xl text-left lg:text-center text-gray-400">
            The best deals, news, and products.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  lg:justify-between lg:p-10 p-5 gap-3">
          <div className="lg:w-1/3 rounded-3xl box-shadow ">
            <img
              className="rounded-2xl w-full"
              src="https://www.jio.com/dive-1.webp"
              alt=""
            />

            <div className="p-5">
              <p className="text-xl font-semibold mb-2 ">
                Here is a handful of the many success stories.
              </p>
              <p className="text-sm font-semibold text-gray-500 mb-5">
                Here is a handful of the many success stories. Here is a handful
                of the many success stories.
              </p>
              <button className="hover:border p-1 px-3 text-blue-600 rounded-2xl hover:bg-blue-400 hover:text-white">
                Know more{" "}
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 rounded-3xl box-shadow ">
            <img
              className="rounded-2xl w-full"
              src="https://www.jio.com/smart-meter.webp"
              alt=""
            />

            <div className="p-5">
              <p className="text-xl font-semibold mb-2 ">
                Here is a handful of the many success stories.
              </p>
              <p className="text-sm font-semibold text-gray-500 mb-5">
                Here is a handful of the many success stories. Here is a handful
                of the many success stories.
              </p>
              <button className="hover:border p-1 px-3 text-blue-600 rounded-2xl hover:bg-blue-400 hover:text-white">
                Know more{" "}
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 rounded-3xl box-shadow ">
            <img
              className="rounded-2xl w-full"
              src="https://www.jio.com/5g-odisha-card.png"
              alt=""
            />

            <div className="p-5">
              <p className="text-xl font-semibold mb-2 ">
                Here is a handful of the many success stories.
              </p>
              <p className="text-sm font-semibold text-gray-500 mb-5">
                Here is a handful of the many success stories. Here is a handful
                of the many success stories.
              </p>
              <button className="hover:border p-1 px-3 text-blue-600 rounded-2xl hover:bg-blue-400 hover:text-white">
                Know more{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className=" p-1 px-3 border border-1 border-grey-500 text-blue-600 rounded-2xl hover:border-blue-400 ">
            Know more{" "}
          </button>
        </div>
      </div>
      <div className="lg:p-20 p-5 bg-gray-200 rounded-xl my-5 w-auto ">
        <div className=" h-96  rounded-lg my-5  grow-bussiness-bg  ">
          <div className=" mb-5 flex flex-col p-6 ">
            <h2 className="text-4xl md:text-6xl max-w-xl  text-white  font-bold my-5">
              work learn and grow
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

      <div className="bg-blue-700 text-center text-white py-10">
        <h2 className="lg:text-7xl text-5xl font-bold mb-2">Need Guidance?</h2>
        <p className="text-xl font bold">We 'd love to help you</p>
        <div className="mt-10 px-5 flex lg:flex-row flex-col md:flex-row gap-3 justify-center ">
          <div className=" p-5 border border-1 border-grey-500 rounded-full hover:border-blue-400 ">
            <span className="flex justify-center gap-2 items-center">
              <TbHelpSquare size={30} />
              <p className="text-xl">Support</p>
            </span>
          </div>
          <div className=" p-5 border border-1 border-grey-500 rounded-full hover:border-blue-400 ">
            <span className="flex justify-center gap-2 items-center">
              <PiStorefrontBold size={30} />
              <p className="text-xl">Find a Store</p>
            </span>
          </div>
          <div className=" p-5 border border-1 border-grey-500 rounded-full hover:border-blue-400 ">
            <span className="flex justify-center gap-2 items-center">
              <HiOutlineChatAlt2 size={30} />
              <p className="text-xl">Chat With Us</p>
            </span>
          </div>
          <div className=" p-5 border border-1 border-grey-500 rounded-full hover:border-blue-400 ">
            <span className="flex justify-center gap-2 items-center">
              <FcCallback size={30} />
              <p className="text-xl">Call Us</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeDiffrence;
