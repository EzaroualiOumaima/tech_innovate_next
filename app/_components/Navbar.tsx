"use client";

import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo2.png";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="sticky bg-white top-0 w-[100%] h-20 flex items-center z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-1 items-center text-2xl md:text-2xl font-bold ">
          <Image src={logo} alt="logo" width={50} height={50} />
          <span className="italic">Tech</span>

          <span className=" italic text-blue-600">Innovate</span>
        </div>

        <div className=" hidden md:flex gap-12 text-gray-950 items-center text-lg">
          <Link href="/" className="hover:text-blue-700 hover:text-xl">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-700 hover:text-xl">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-700 hover:text-xl">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-blue-700 hover:text-xl">
            Portfolio
          </Link>
          <Link href="/team" className="hover:text-blue-700 hover:text-xl">
            Team
          </Link>
          <Link href="/contact" className="hover:text-blue-700 hover:text-xl">
            Contact
          </Link>
        </div>
        <div>
          <Link href={"/contact"}>
             <button  className=" hidden md:block border border-blue-700 rounded-md py-2 px-5 hover:bg-blue-700 hover:text-white    ">
            Get Started
          </button>
          </Link>
         

          {toggle ? (
            <IoMdClose
              size={30}
              className="md:hidden block"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <IoMenuSharp
              size={30}
              className="md:hidden"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
      {/* Responsive menu */}
      <div
        className={`duration-300 md:hidden flex flex-col h-screen fixed text-white bg-black/60 top-[60px] w-[70%] ${
          toggle ? `left-[0] ` : `left-[-100%]`
        }`}
      >
        <Link href="/" className="hover:text-green-600 p-5">
          Home
        </Link>
        <Link
          href="/services"
          className="hover:text-green-600 hover:text-2xl p-5"
        >
          Services
        </Link>
        <Link href="/portofolio" className="hover:text-green-600 p-5">
          Portfolio
        </Link>
        <Link href="/contact" className="hover:text-green-600 p-5">
          Contact
        </Link>
        <Link href="/team" className="hover:text-blue-700">
          Team
        </Link>
      </div>
    </header>
  );
}
