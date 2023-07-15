import React from "react";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <div className='font-poppins w-full h-screen flex flex-col bg-neutral-100'>
      <Navbar />
    </div>
  );
};
