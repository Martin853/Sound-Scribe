import React, { useState } from "react";
import { AiOutlineUpload, AiFillFile, AiOutlineClose } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";

export const SpeechRecognitionFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setTranscript("");
    setError(null);
    const file = event.target.files[0];

    if (file && file.size > 25000000) {
      return setError("File must be smaller than 25MB");
    }
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    setTranscript("");
    setError(null);

    if (!selectedFile) {
      return setError("Please select a file");
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("model", "whisper-1");

    fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.VITE_API_KEY}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => setTranscript(data.text))
      .catch((error) => console.log(error));
  };

  return (
    <div className='w-5/6 h-fit p-4 mt-10 bg-neutral-200 flex flex-col items-center rounded-lg gap-3 border-2 border-neutral-300'>
      <h1 className='text-xl sm:text-xl font-semibold'>Speech Recognition</h1>
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
            setError(null);
            setSelectedFile(null);
            setTranscript("");
            document.getElementById("file").value = "";
          }}
        />
      </div>
      {transcript && (
        <div className='w-full flex flex-col gap-2'>
          <h1 className='self-start text-xl sm:text-2xl'>Result:</h1>
          <div className=' w-fu ll h-36 overflow-y-auto p-4 bg-neutral-100 rounded-lg border-neutral-300 border'>
            {transcript}
          </div>
        </div>
      )}
      <div className='w-full flex gap-3'>
        <button
          onClick={handleUpload}
          className='bg-sky-800 text-white w-full rounded-md p-2 flex justify-center items-center gap-2 text-sm sm:text-lg hover:bg-sky-700 transition-all duration-300 ease-in-out'
        >
          <AiOutlineUpload />
          Upload
        </button>
        <button
          disabled={transcript === ""}
          onClick={() => {
            const element = document.createElement("a");
            const file = new Blob([transcript], { type: "text/plain" });
            element.href = URL.createObjectURL(file);
            element.download = "speech.txt";
            document.body.appendChild(element); // Required for Firefox
            element.click();
            document.body.removeChild(element); // Clean up
          }}
          className={
            transcript
              ? "bg-sky-800 text-white w-full rounded-md p-2 flex justify-center items-center gap-2 text-sm sm:text-lg  hover:bg-sky-700 transition-all duration-300 ease-in-out"
              : "bg-neutral-400 text-white w-full rounded-md p-2 flex justify-center items-center gap-2 text-sm sm:text-lg"
          }
        >
          <BiDownload />
          Download
        </button>
      </div>
    </div>
  );
};
