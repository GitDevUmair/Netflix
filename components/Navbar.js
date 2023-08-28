import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-row p-2 justify-between shadow-lg bg-white">
        <div className="mx-3">
         <Link href={'/'}   > <Image src={"/Netflix_text.png"} width={100} height={100} /></Link>
        </div>
        <div>
          <nav className="flex">
            <ul className="flex flex-row space-x-5 mt-2 mx-10 text-black font-bold">
              <Link href={"/"}>
                {" "}
                <li className="hover:text-red-600 ">Home</li>{" "}
              </Link>

              <Link href={"/About"}>
                <li className="hover:text-red-600">About</li>
              </Link>

              <Link href={"/Movie"}>
                <li className="hover:text-red-600">Movie</li>
              </Link>

              <Link href={"/Contact"}>
                <li className="hover:text-red-600 ">Contact</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
