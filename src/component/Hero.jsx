import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Hero = () => {
  return (
    <>
      <Carousel showThumbs={false} showStatus={false} showArrows={false} autoPlay={true} infiniteLoop={true} interval={3000}>
        <div>
          <img className="h-96 object-cover" src="https://jep-asset.akamaized.net/jio/webp/homepage/Homepage-masthead.webp" />
          <div className="absolute top-14 max-w-2xl px-2 py-2 sm:px-5">
            <h2 className="lg:text-5xl text-3xl font-extrabold text-left text-white mb-5">
              Its Time To Embrace Digital Life
            </h2>
            <p className="text-xl text-left text-white mb-5">
              An affordable range of 4g Phones Jio Bharat Series Is Packed With
              Incredible fetures
            </p>
            <div className="flex text-white mb-2">
              <button className="bg-color-primary hover:bg-blue-500 rounded-3xl mx-2 p-4 text-sm font-bold">
                Explore Now
              </button>
              <button className="rounded-3xl mx-2 p-4 text-sm font-bold border border-1 border-solid border-gray-400 hover:border-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div>
          <img className="h-96 object-cover" src="https://jep-asset.akamaized.net/jio/webp/homepage/plus-599-golgappa-desk.webp" />
          <div className="absolute top-14 max-w-2xl px-2 py-2 sm:px-5">
            <h2 className="lg:text-5xl text-3xl font-extrabold text-left text-white mb-5">
              Its Time To Embrace Digital Life
            </h2>
            <p className="text-xl text-left text-white mb-5">
              An affordable range of 4g Phones Jio Bharat Series Is Packed With
              Incredible fetures
            </p>
            <div className="flex text-white mb-2">
              <button className="bg-color-primary hover:bg-blue-500 rounded-3xl mx-2 p-4 text-sm font-bold">
                Explore Now
              </button>
              <button className="rounded-3xl mx-2 p-4 text-sm font-bold border border-1 border-solid border-gray-400 hover:border-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Hero;
