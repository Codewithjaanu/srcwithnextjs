import Image from "next/image";
import React from "react";
import Report from "../Assets/Images/demo-image.png";

function SearchInsights() {
    return (
        <div className="flex flex-col md:flex-row justify-evenly items-center mt-4 p-4">
            <div className="text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-blue-500 text-2xl">Organic Search Report</h1>
                <h1 className="mt-2 text-3xl md:text-5xl font-medium">Search Insights</h1>
                <p className="mt-3 text-xl md:text-2xl text-gray-400">
                    Grow your search traffic, research<br /> your competitors' keywords and <br /> monitor your ranking in real time.
                </p>
                <button className="mt-4 bg-[#0095f7] text-white px-5 py-2 rounded-md shadow">
                    Start Free Trial
                </button>
            </div>
            <div>
                <Image src={Report} alt="Search Insights Report" width={400} height={400} />
            </div>
        </div>
    );
}

export { SearchInsights };
