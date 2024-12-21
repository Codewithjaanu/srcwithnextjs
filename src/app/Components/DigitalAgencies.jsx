import Image from "next/image";
import React from "react";
import SiddharthImg from "../Assets/Images/y.png";
import Boby from "../Assets/Images/b.png";

function DigitalAgencies() {
  return (
    <div className="px-4 md:px-10">
      {/* Header Section */}
      <div className="text-center mt-10 p-5">
        <h1 className="text-4xl font-semibold text-gray-800">
          The Best Digital Agencies <br /> Recommend Our Software
        </h1>
        <p className="mt-2 text-xl md:text-2xl text-gray-500">
          Industry experts mention their experience using our software and the
          <br /> excellent results they have achieved
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
        {/* Testimonial 1 */}
        <div className="flex-1 p-6 bg-white shadow-md rounded-lg border-2 border-transparent hover:border-2 hover:border-solid hover:border-transparent hover:animate-running-border">
          <div className="flex items-center gap-4 mb-4">
            <Image src={SiddharthImg} alt="Siddharth" width={50} height={50} className="rounded-full" />
            <div>
              <h1 className="font-semibold text-lg">Siddharth_7m</h1>
              <p className="text-sm text-gray-500">Marketing Intelligence | Author & Content Creator</p>
            </div>
          </div>
          <hr className="my-2" />
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, tortor nec mattis feugiat, velit purus euismod odio, quis vulputate velit urna sit amet enim. Maecenas vulputate auctor ligula sed sollicitudin.
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="flex-1 p-6 bg-white shadow-md rounded-lg border-2 border-transparent hover:border-2 hover:border-solid hover:border-transparent hover:animate-running-border">
          <div className="flex items-center gap-4 mb-4">
            <Image src={Boby} alt="Boby" width={50} height={50} className="rounded-full" />
            <div>
              <h1 className="font-semibold text-lg">Boby</h1>
              <p className="text-sm text-gray-500">Marketing Intelligence | Author & Content Creator</p>
            </div>
          </div>
          <hr className="my-2" />
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, tortor nec mattis feugiat, velit purus euismod odio, quis vulputate velit urna sit amet enim. Maecenas vulputate auctor ligula sed sollicitudin.
          </p>
        </div>
      </div>
    </div>
  );
}

export { DigitalAgencies };
