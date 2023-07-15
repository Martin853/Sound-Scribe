import React from "react";
import { Navbar } from "./components/Navbar";
import { SpeechRecognition } from "./components/SpeechRecognition";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeechRecognitionFile } from "./components/SpeechRecognitionFile";

export const App = () => {
  return (
    <BrowserRouter>
      <div className='font-poppins w-full h-screen flex flex-col items-center bg-neutral-100'>
        <Navbar />
        <Routes>
          <Route element={<SpeechRecognition />} path='/' />
          <Route element={<SpeechRecognitionFile />} path='/file-to-text' />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
