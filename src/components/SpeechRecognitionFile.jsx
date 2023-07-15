import React, { useState } from "react";
import { AiOutlineUpload, AiFillFile, AiOutlineClose } from "react-icons/ai";

export const SpeechRecognitionFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setError(null);
    const file = event.target.files[0];

    if (file.size > 25000000) {
      return setError("File must be smaller than 25MB");
    }
    setSelectedFile(file);
  };

  const handleUpload = () => {};

  return (
    <div className='w-5/6 h-fit p-4 mt-16 bg-neutral-200 flex flex-col items-center rounded-lg gap-3 border-2 border-neutral-300'>
      <h1 className='text-xl sm:text-2xl font-semibold'>Speech Recognition</h1>
      <div
        onClick={() => document.querySelector("#file").click()}
        className='w-full h-fit p-8 flex flex-col gap-3 justify-center items-center bg-neutral-300 rounded-md border-dashed border-2 border-sky-900 hover:cursor-pointer'
      >
        <input
          type='file'
          accept='audio/*'
          id='file'
          className='hidden'
          onChange={handleFileChange}
        />
        <h1 className='text-xl font-bold'>Upload A File</h1>
        <AiOutlineUpload className='text-4xl' />
      </div>
      {error && (
        <div className='w-full h-fit p-5 bg-red-600 opacity-40 rounded-md flex justify-between items-center text-white'>
          {error}
        </div>
      )}
      <div className='w-full h-fit p-5 bg-green-600 opacity-40 rounded-md flex justify-between items-center text-white'>
        <div className='h-fit flex justify-center items-center gap-2'>
          <AiFillFile />
          {selectedFile ? (
            <h1>{selectedFile.name}</h1>
          ) : (
            <h1>No file choosen</h1>
          )}
        </div>
        <AiOutlineClose
          className='text-xl hover:cursor-pointer'
          onClick={() => {
            setSelectedFile(null);
          }}
        />
      </div>
      <button
        onClick={handleUpload}
        className='bg-sky-800 text-white w-full rounded-md p-2 flex justify-center items-center gap-2 text-sm sm:text-lg hover:bg-sky-700 transition-all duration-300 ease-in-out'
      >
        Upload
      </button>
      {transcript && <p>{transcript}</p>}
    </div>
  );
};
