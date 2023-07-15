import React from "react";
import { Navbar } from "./components/Navbar";
import { SpeechRecognition } from "./components/SpeechRecognition";

export const App = () => {
  return (
    <div className='font-poppins w-full h-screen flex flex-col items-center bg-neutral-100'>
      <Navbar />
      <SpeechRecognition />
    </div>
  );
};
