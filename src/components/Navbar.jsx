import React from "react";
import image from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className='bg-sky-900 w-full h-fit p-4 py-6 flex flex-col justify-center items-start gap-3 sm:px-16 sm:gap-8 md:flex-row md:items-center md:justify-between'>
      <div className=' w-full flex gap-3 justify-center items-center'>
        <img src={image} className='w-16 rounded-lg sm:w-24' />
        <h1 className='w-full text-white text-2xl font-bold'>Sound Scribe</h1>
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-2  text-lg text-white font-semibold md:flex-row md:justify-end'>
        <Link
          to={"/"}
          className='w-full border-2 hover:bg-sky-800 transition-all duration-400 ease-in-out border-sky-800 p-2 rounded-md text-center md:w-48'
        >
          Audio To Text
        </Link>
        <Link
          to={"/file-to-text"}
          className='w-full border-2 hover:bg-sky-800 transition-all duration-400 ease-in-out border-sky-800 p-2 rounded-md text-center md:w-48'
        >
          File To Text
        </Link>
      </div>
    </nav>
  );
};
