import React from "react";

const JioCinema = () => {
  return (
    <div className="my-5">
      <div className="lg:text-center text-left mb-5  p-5">
        <h2 className=" text-4xl  lg:text-7xl text-black font-bold my-5 ">
          Enrich your digital life
        </h2>
        <p className="text-xl  text-gray-400">
          Stream, shop, connect, and do much more on the go with Jio apps and
          services.
        </p>
      </div>

      <div className="flex bg-pink-500 flex-col-reverse lg:flex-row">
        <div className=" lg:w-1/3 p-7">
          <img
            className="mb-5"
            src="https://jep-asset.akamaized.net/jio/svg/logo/28-06-2023/Jio-cinema-bold.svg"
            alt=""
          />
          <h2 className="lg:text-5xl text-2xl text-white font-bold text-left mb-8">
            Premieres exclusive as well as trending video content
          </h2>
          <button className="rounded-3xl mx-2 p-4 text-sm font-bold bg-pink-200 hover:bg-white">
            Know More
          </button>
        </div>
        <div className="lg:w-2/3 p-5   ">
          {/* <video ></video> */}
          <video className="sm:rounded-3xl " src="https://jep-asset.akamaized.net/jio/welcome-page/JioCinema_DekhtaJaIndia_06062023.mp4" width="" height="" controls />
        </div>
      </div>
    </div>
  );
};

export default JioCinema;
