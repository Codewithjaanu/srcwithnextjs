"use client"
import Image from "next/image";
import React from "react";
import Iphone from "../Assets/Images/iphone.png";

function Contant() {
    return (
        <div className="flex flex-col md:flex-row justify-center bg-gray-100 items-center p-4 mt-4">
            <div className="mb-8 md:mb-0">
                <Image src={Iphone} alt="" width={400} height={400} />
            </div>
            <div className="text-center md:text-left md:ml-8">
                <h1 className="text-blue-500 text-2xl">Unlimited Data</h1>
                <h1 className="text-3xl md:text-5xl font-light mt-4">
                    Digital Innovation and <br />
                    the <span className="font-semibold">Future of Digital Marketing</span>
                </h1>
                <p className="text-xl md:text-3xl text-gray-400 mt-2">
                    Boost your digital marketing campaigns and <br /> increase your conversion rates
                </p>
                <button className="mt-4 bg-[#0095f7] text-white px-5 py-2 rounded-md shadow">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export { Contant };
