"use client";
import React from "react";
import Check from "../Assets/Images/check.png";
import Image from "next/image";

function Plans() {
    return (
        <>
            <div className="container mx-auto px-4 mt-2">
                <div className="text-center mt-10 p-5">
                    <h1 className="text-4xl font-semibold text-gray-800">
                        Plans and Pricing
                    </h1>
                    <p className="mt-2 text-xl md:text-2xl text-gray-500">
                        The best software to develop perfect content and advertising strategies
                        <br /> to increase leads and sales.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
                    <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 animate-running-border">
                        <h1 className="text-2xl font-semibold text-gray-800">Demo Version</h1>
                        <h2 className="text-4xl font-bold text-gray-800">Free</h2>
                        <span className="text-sm text-gray-400">forever</span>
                        <p className="mt-2 text-lg text-gray-600">
                            Demo gives you full access to all features for 7 days
                        </p>
                        <hr className="my-4" />
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Marketing plan
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Seo reporting tool
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Keywords explorer
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Competitive analysis
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Five projects - ¡New!
                            </li>
                        </ul>
                        <button className="mt-4 w-full py-2 bg-[#0095f7] text-white rounded-md shadow hover:bg-blue-600 transition duration-300">
                            Start Demo Version
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 animate-running-border">
                        <h1 className="text-2xl font-semibold text-gray-800">Standard Version</h1>
                        <h2 className="text-4xl font-bold text-gray-800">$9</h2>
                        <span className="text-sm text-gray-400">per month</span>
                        <p className="mt-2 text-lg text-gray-600">
                            Outrank your competitors with this amazing software
                        </p>
                        <hr className="my-4" />
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Marketing plan
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Seo reporting tool
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Keywords explorer
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Competitive analysis
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Five projects - ¡New!
                            </li>
                        </ul>
                        <button className="mt-4 w-full py-2 bg-[#0095f7] text-white rounded-md shadow hover:bg-blue-600 transition duration-300">
                            Buy Now
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 animate-running-border">
                        <h1 className="text-2xl font-semibold text-gray-800">Agency Version</h1>
                        <h2 className="text-4xl font-bold text-gray-800">$29</h2>
                        <span className="text-sm text-gray-400">per month</span>
                        <p className="mt-2 text-lg text-gray-600">
                            For agencies and businesses with extensive web presence
                        </p>
                        <hr className="my-4" />
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Marketing plan
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Seo reporting tool
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Keywords explorer
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Competitive analysis
                            </li>
                            <li className="flex items-center gap-2">
                                <Image src={Check} width={20} alt="" />
                                Five projects - ¡New!
                            </li>
                        </ul>
                        <button className="mt-4 w-full py-2 bg-[#0095f7] text-white rounded-md shadow hover:bg-blue-600 transition duration-300">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Plans };
