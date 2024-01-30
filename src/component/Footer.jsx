import React, { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  let year = new Date().getFullYear();

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const open = (index) => {
    if (index === 1) {
      setIsOpen1(true);
    } else if (index === 2) {
      setIsOpen2(true);
    } else if (index === 3) {
      setIsOpen3(true);
    } else if (index === 4) {
      setIsOpen4(true);
    }
  };
  const Close = (index) => {
    if (index === 1) {
      setIsOpen1(false);
    } else if (index === 2) {
      setIsOpen2(false);
    } else if (index === 3) {
      setIsOpen3(false);
    } else if (index === 4) {
      setIsOpen4(false);
    }
  };
  return (
    <>
      {/* desktp */}
      <div className="divide-y divide-gray-200 hidden lg:block ">
        <div className="p-8 flex px-14   space-x-20  ">
          <div className="">
            <p className="text-xl mb-5 font-bold ">Our offerings</p>
            <ul className="space-y-3">
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Mobile
              </li>
              <li className="text-sm  hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Bussiness
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Fiber
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Shop
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                5g Network
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Apps
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl mb-5 font-bold ">Support</p>
            <ul className="space-y-3">
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Mobile
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Bussiness
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Fiber
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Shop
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                5g Network
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Apps
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl mb-5 font-bold ">Our company</p>
            <ul className="space-y-3">
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Mobile
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Bussiness
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Fiber
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Shop
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                5g Network
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Apps
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl mb-5 font-bold ">Useful links</p>
            <ul className="space-y-3">
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Mobile
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Bussiness
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Fiber
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Shop
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                5g Network
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Apps
              </li>
              <li className="text-sm hover:bg-gray-300 p-1 cursor-pointer text-gray-700">
                Apps
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-4">Connect with us</h2>
            <ul className="flex space-x-4">
              <li>
                <AiFillTwitterCircle
                  className="cursor-pointer"
                  color="blue"
                  size={30}
                />
              </li>
              <li>
                <BsFacebook className="cursor-pointer" color="blue" size={30} />
              </li>
              <li>
                <AiFillInstagram
                  className="cursor-pointer"
                  color="blue"
                  size={30}
                />
              </li>
              <li>
                <IoLogoWhatsapp
                  className="cursor-pointer"
                  color="blue"
                  size={30}
                />
              </li>
              <li>
                <AiFillYoutube
                  className="cursor-pointer"
                  color="blue"
                  size={30}
                />
              </li>
            </ul>
            <h2 className="text-2xl font-extrabold my-6">Download jio</h2>

            <div className="flex flex-col xl:flex-row">
              <img src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/G-Play.svg" />
              <img src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/AppStore.svg" />
            </div>
          </div>

          {/* copy write */}
        </div>

        <div className="flex justify-around   p-3">
          <div className="flex gap-3 items-center">
            <p className="text-base font-bold  text-white  bg-color-secondary rounded-full px-2 py-1">
              Jio
            </p>
            <p className="text-sm align-baseline">
              Copyright © {year} Reliance Jio Infocomm Ltd. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-3 ">
            <p className="hover:text-blue-800 cursor-pointer  text-xs text-gray-500">
              Press Release
            </p>
            <p className="hover:text-blue-800 cursor-pointer text-xs text-gray-500">
              Regulatory
            </p>
            <p className="hover:text-blue-800 cursor-pointer text-xs text-gray-500">
              Policies
            </p>
            <p className="hover:text-blue-800 cursor-pointer text-xs text-gray-500">
              Terms & Condition
            </p>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden  divide-y divide-gray-400  block">
        <div className="offering   my-5">
          <div className="flex justify-between p-3 items-center">
            <p className="text-xl text-gray-600 font-normal">Offerings</p>

            {!isOpen1 && (
              <p
                onClick={() => {
                  open(1);
                }}
              >
                <AiOutlinePlus color="blue" size={20} />
              </p>
            )}
            {isOpen1 && (
              <p>
                <AiOutlineMinus
                  onClick={() => {
                    Close(1);
                  }}
                />{" "}
              </p>
            )}
          </div>
          {isOpen1 && (
            <ul className="flex flex-col gap-2 p-4 smooth  ease-in-out duration-1000">
              <li className="text-xl text-gray-500 font-normal">Mobile</li>
              <li className="text-xl text-gray-500 font-normal">Fiber</li>
              <li className="text-xl text-gray-500 font-normal"> Bussiness</li>
              <li className="text-xl text-gray-500 font-normal">App</li>
              <li className="text-xl text-gray-500 font-normal">Shop</li>
              <li className="text-xl text-gray-500 font-normal">5g Network</li>
            </ul>
          )}
        </div>
        <div className="offering   my-5">
          <div className="flex justify-between p-3 items-center">
            <p className="text-xl text-gray-600 font-normal">Support</p>

            {!isOpen2 && (
              <p
                onClick={() => {
                  open(2);
                }}
              >
                <AiOutlinePlus color="blue" size={20} />
              </p>
            )}
            {isOpen2 && (
              <p>
                <AiOutlineMinus
                  onClick={() => {
                    Close(2);
                  }}
                />{" "}
              </p>
            )}
          </div>
          {isOpen2 && (
            <ul className="flex flex-col gap-2 p-4 smooth  ease-in-out duration-1000">
              <li className="text-xl text-gray-500 font-normal">Mobile</li>
              <li className="text-xl text-gray-500 font-normal">Fiber</li>
              <li className="text-xl text-gray-500 font-normal"> Bussiness</li>
              <li className="text-xl text-gray-500 font-normal">App</li>
              <li className="text-xl text-gray-500 font-normal">Shop</li>
              <li className="text-xl text-gray-500 font-normal">5g Network</li>
            </ul>
          )}
        </div>
        <div className="offering   my-5">
          <div className="flex justify-between p-3 items-center">
            <p className="text-xl text-gray-600 font-normal">Our company</p>

            {!isOpen3 && (
              <p
                onClick={() => {
                  open(3);
                }}
              >
                <AiOutlinePlus color="blue" size={20} />
              </p>
            )}
            {isOpen3 && (
              <p>
                <AiOutlineMinus
                  onClick={() => {
                    Close(3);
                  }}
                />{" "}
              </p>
            )}
          </div>
          {isOpen3 && (
            <ul className="flex flex-col gap-2 p-4 smooth  ease-in-out duration-1000">
              <li className="text-xl text-gray-500 font-normal">Mobile</li>
              <li className="text-xl text-gray-500 font-normal">Fiber</li>
              <li className="text-xl text-gray-500 font-normal"> Bussiness</li>
              <li className="text-xl text-gray-500 font-normal">App</li>
              <li className="text-xl text-gray-500 font-normal">Shop</li>
              <li className="text-xl text-gray-500 font-normal">5g Network</li>
            </ul>
          )}
        </div>
        <div className="offering   my-5">
          <div className="flex justify-between p-3 items-center">
            <p className="text-xl text-gray-600 font-normal">Useful links</p>

            {!isOpen4 && (
              <p
                onClick={() => {
                  open(4);
                }}
              >
                <AiOutlinePlus color="blue" size={20} />
              </p>
            )}
            {isOpen4 && (
              <p>
                <AiOutlineMinus
                  onClick={() => {
                    Close(4);
                  }}
                />{" "}
              </p>
            )}
          </div>
          {isOpen4 && (
            <ul className="flex flex-col gap-2 p-4 smooth  ease-in-out duration-1000">
              <li className="text-xl text-gray-500 font-normal">Mobile</li>
              <li className="text-xl text-gray-500 font-normal">Fiber</li>
              <li className="text-xl text-gray-500 font-normal"> Bussiness</li>
              <li className="text-xl text-gray-500 font-normal">App</li>
              <li className="text-xl text-gray-500 font-normal">Shop</li>
              <li className="text-xl text-gray-500 font-normal">5g Network</li>
            </ul>
          )}
        </div>

        <div className="p-5">
          <h2 className="text-2xl font-extrabold mb-4">Connect with us</h2>
          <ul className="flex space-x-4">
            <li>
              <AiFillTwitterCircle
                className="cursor-pointer"
                color="blue"
                size={30}
              />
            </li>
            <li>
              <BsFacebook className="cursor-pointer" color="blue" size={30} />
            </li>
            <li>
              <AiFillInstagram
                className="cursor-pointer"
                color="blue"
                size={30}
              />
            </li>
            <li>
              <IoLogoWhatsapp
                className="cursor-pointer"
                color="blue"
                size={30}
              />
            </li>
            <li>
              <AiFillYoutube
                className="cursor-pointer"
                color="blue"
                size={30}
              />
            </li>
          </ul>
          <h2 className="text-2xl font-extrabold my-6">Download jio</h2>

          <div className="flex md:space-x-3 flex-col sm:flex-row justify-center">
            <img width={200} src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/G-Play.svg" />
            <img width={200} src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/AppStore.svg" />
          </div>
        </div>

        <div className="flex justify-around flex-col p-3">
          <div className="flex flex-col gap-3 my-5">
            <p className="text-base font-bold  text-white text-left w-10  bg-color-secondary rounded-full px-2 py-1">
              Jio
            </p>
            <p className="text-sm align-baseline">
              Copyright © {year} <span className="ml-3">Reliance Jio Infocomm Ltd. All rights reserved.</span>
            </p>
          </div>
          <div className="flex space-x-3 ">
            <p className="hover:text-blue-800 cursor-pointer  text-xs text-gray-500">
              Press Release
            </p>
            <p className="hover:text-blue-800 cursor-pointer text-xs text-gray-500">
              Regulatory
            </p>
            <p className="hover:text-blue-800 cursor-pointer text-xs text-gray-500">
              Policies
            </p>
            <p className="hover:text-blue-800 cursor-pointer text-xs text-gray-500">
              Terms & Condition
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
