import React from "react";
import image from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className='w-full h-fit p-4 py-6 flex flex-col justify-center items-start gap-3 sm:px-16 sm:gap-8 md:flex-row md:items-center md:justify-between'>
      <div className=' w-full flex gap-3 justify-start items-center'>
        <img src={image} className='w-24 rounded-lg sm:w-40' />
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-2  text-lg text-white font-semibold md:flex-row md:justify-end'>
        <Link
          to={"/"}
          className='w-full bg-purple-800 text-white hover:bg-purple-700 transition-all duration-400 ease-in-out p-2 rounded-md text-center md:w-48'
        >
          Audio To Text
        </Link>
        <Link
          to={"/file-to-text"}
          className='w-full bg-purple-800 text-white hover:bg-purple-700 transition-all duration-400 ease-in-out p-2 rounded-md text-center md:w-48'
        >
          File To Text
        </Link>
      </div>
    </nav>
  );
};
