import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { SpeechRecognition } from "./components/SpeechRecognition";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeechRecognitionFile } from "./components/SpeechRecognitionFile";
import bg1 from '../src/assets/bg1.jpg'
import bg2 from '../src/assets/bg2.jpg'

export const App = () => {
  return (
    <BrowserRouter>
      <div  style={{backgroundImage: `url(${bg2})`}} className='font-poppins w-full h-screen flex flex-col items-center bg-neutral-100 bg-cover bg-center '>
        <Navbar />
        <Routes>
          <Route element={<SpeechRecognition />} path='/' />
          <Route element={<SpeechRecognitionFile />} path='/file-to-text' />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
