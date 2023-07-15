import React from "react";
import image from "../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className=' bg-sky-900 w-full h-fit p-4 flex justify-start items-center gap-3 sm:px-16 sm:gap-8'>
      <img src={image} className='w-16 rounded-lg sm:w-24' />
      <h1 className='text-white text-2xl sm:text-3xl font-bold'>
        Sound Scribe
      </h1>
    </nav>
  );
};
