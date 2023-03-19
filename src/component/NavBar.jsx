import React, { useState, useEffect } from "react";
import { BsChatSquareDots } from "react-icons/bs";
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
  FaBars,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" w-full min-h-[50px] flex justify-between items-center absolute z-10 bg-gray-700/80 text-white ">
      <ul className="hidden sm:flex px-4 ">
        <li>
          <a href="/"></a>Home
        </li>
        <li>
          <a href="#gallery"></a>Gallery
        </li>
        <li>
          <a href="#deals"></a>Deals
        </li>
        <li>
          <a href="#contact"></a>Contact
        </li>
      </ul>
      <div className=" flex justify-between ">
        <FaFacebook className=" mx-4" />
        <FaTwitter className=" mx-4" />
        <FaGooglePlusG className=" mx-4" />
        <FaInstagram className=" mx-4" />
      </div>
      {/* Hamburger Icon */}
      <div onClick={handleNav} className="sm:hidden z-10 ">
        <FaBars size={20} className="m-4 cursor-pointer" />
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden sm:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 flex flex-col w-full"
            : " absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }>
        <ul className=" h-full w-full text-center pt-12 ">
          <li className=" text-2xl py-8">
            <a href="/"></a>Home
          </li>
          <li className=" text-2xl py-8">
            <a href="#gallery"></a>Gallery
          </li>
          <li className=" text-2xl py-8">
            <a href="#deals"></a>Deals
          </li>
          <li className=" text-2xl py-8">
            <a href="#contact"></a>Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
