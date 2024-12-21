"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../app/Assets/Images/logo.png";

function Header() {
    const [lineWidth, setLineWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            setLineWidth(progress);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
                <div className="flex justify-between items-center px-6 py-4 lg:px-12">
                    <div>
                        <Image src={Logo} alt="Logo" height={20} width={220} />
                    </div>
                    <div className="flex items-center space-x-6 ml-auto">
                        <nav>
                            <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                                <li className="cursor-pointer">Home</li>
                                <li className="cursor-pointer">Features</li>
                                <li className="cursor-pointer">Testimonials</li>
                                <li className="cursor-pointer">Pricing</li>
                            </ul>
                        </nav>
                        <button className="bg-[#6772e5] text-white px-4 py-2 rounded-md shadow">
                            Try For Free
                        </button>
                    </div>
                </div>
            </header>
            {/* Line positioned below the header */}
            <div
                className="fixed top-[72px] left-0 h-[1px] bg-black transition-[width] duration-300 ease-in-out z-50"
                style={{ width: `${lineWidth}%` }}
            ></div>
        </>
    );
}

export { Header };
