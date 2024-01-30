import React from 'react'

const Unorderlist = () => {
    return (
        <ul className="flex flex-col gap-2 p-4 smooth  ease-in-out duration-1000">
            <li className="text-xl text-gray-500 font-normal">
                Mobile
            </li>
            <li className="text-xl text-gray-500 font-normal">
                Fiber
            </li>
            <li className="text-xl text-gray-500 font-normal">
                {" "}
                Bussiness
            </li>
            <li className="text-xl text-gray-500 font-normal">
                App
            </li>
            <li className="text-xl text-gray-500 font-normal">
                Shop
            </li>
            <li className="text-xl text-gray-500 font-normal">
                5g Network
            </li>
        </ul>
    )
}

export default Unorderlist