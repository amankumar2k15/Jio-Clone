import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import musicIcons from "../../public/icons/music-note.png";
const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }

  return (
    <div className="my-10 ">
      <Carousel
        // additionalTransfrom={0}
        autoPlay
        autoPlaySpeed={1}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        customTransition="all 2s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        // minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        removeArrowOnDeviceType={["tablet", "desktop", "mobile"]}
        responsive={responsive}


      >
        <div className="slide-bg1 bg-green-600 rounded-xl mx-2">
          <div className="w-2/3 p-5 ">
            <div className="flex space-x-2 my-3  ">
              <figure className="rounded-full p-1 bg-cyan-700 ">
                <img className="w-5 h-5" src={musicIcons} alt="" />
              </figure>

              <p className="text-xl font-bold">Jio Savan</p>
            </div>
            <h2 className="text-2xl text-white mb-5 font-extrabold text-left">
              Your Favourite Songs are Just Away
            </h2>
            <button className="rounded-3xl  p-2 text-sm font-bold bg-pink-200 hover:bg-pink-300">
              Know More
            </button>
          </div>
        </div>
        <div className="slide-bg2 bg-pink-600 rounded-xl mx-2">
          <div className="w-2/3 p-5 ">
            <div className="flex space-x-2 my-3  ">
              <figure className="rounded-full p-1 bg-cyan-700 ">
                <img className="w-5 h-5" src={musicIcons} alt="" />
              </figure>

              <p className="text-xl font-bold">Jio Savan</p>
            </div>
            <h2 className="text-2xl mb-5 text-white font-extrabold text-left">
              Your Favourite Songs are Just Away
            </h2>
            <button className="rounded-3xl  p-2 text-sm font-bold bg-pink-200 hover:bg-pink-300">
              Know More
            </button>
          </div>
        </div>
        <div className="slide-bg3 bg-red-600 rounded-xl mx-2">
          <div className="w-2/3 p-5 ">
            <div className="flex space-x-2 my-3  ">
              <figure className="rounded-full p-1 bg-cyan-700 ">
                <img className="w-5 h-5" src={musicIcons} alt="" />
              </figure>

              <p className="text-xl font-bold">Jio Savan</p>
            </div>
            <h2 className="text-2xl text-white mb-5 font-extrabold text-left">
              Your Favourite Songs are Just Away
            </h2>
            <button className="rounded-3xl  p-2 text-sm font-bold bg-pink-200 hover:bg-pink-300">
              Know More
            </button>
          </div>
        </div>
        <div className="slide-bg4 bg-blue-600 rounded-xl mx-2">
          <div className="w-2/3 p-5 ">
            <div className="flex space-x-2 my-3  ">
              <figure className="rounded-full p-1 bg-cyan-700 ">
                <img className="w-5 h-5" src={musicIcons} alt="" />
              </figure>

              <p className="text-xl font-bold">Jio Savan</p>
            </div>
            <h2 className="text-2xl text-white mb-5 font-extrabold text-left">
              Your Favourite Songs are Just Away
            </h2>
            <button className="rounded-3xl  p-2 text-sm font-bold bg-pink-200 hover:bg-pink-300">
              Know More
            </button>
          </div>
        </div>
      </Carousel>
      <div className="flex justify-center my-5">
        <button className="rounded-3xl border border-gray-400  text-blue-600 p-2 text-sm font-bold bg-white hover:border hover:border-1 hover:border-solid hover:border-blue-600">
          View all apps
        </button>
      </div>

    </div>
  );
};

export default Slider;
