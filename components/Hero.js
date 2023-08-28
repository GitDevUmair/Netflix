import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = ({ heading, para, img }) => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-200 to-blue-300">
        <div className="flex container mx-auto items-center h-[85vh] justify-between">
          <div className="max-w-xl">
            <h1 className="font-bold text-3xl max-w-sm">{heading}</h1>
            <p className="mt-3">{para}</p>
            <Link href={"/Movie"}>
              {" "}
              <button className="bg-black mt-4  text-white px-4 py-1 rounded-2xl hover:bg-red-700 hover:text-white font-semibold ">
                Explore Movies
              </button>{" "}
            </Link>
          </div>
          <div>
            <Image
              className="rounded-xl"
              alt="netflix_img"
              src={img}
              height={300}
              width={300}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            //className="relative block h-16 w-[calc(100% + 1.3px)] "
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="white"
              //className="shape-fill text-white"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;
