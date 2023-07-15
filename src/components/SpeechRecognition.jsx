import React, { useEffect, useState } from "react";
import languages from "../assets/Languages";
import { BiMicrophone, BiSolidTrashAlt, BiDownload } from "react-icons/bi";
import SoundWave from "../assets/bars.svg";

export const SpeechRecognition = () => {
  const [language, setLanguage] = useState("en");
  const [listening, setListening] = useState(false);
  const [result, setResult] = useState("");

  // Speech Recognition
  let recognition;
  if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = language;
  }

  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = (SpeechRecognitionEvent) => {
      const { results } = SpeechRecognitionEvent;
      const transcript = results[results.length - 1][0].transcript;
      setResult(transcript);
      setListening(false);
      recognition.stop();
    };
  }, [recognition]);

  return (
    <div className='w-5/6 h-fit p-4 mt-4 bg-neutral-200 flex flex-col items-center rounded-lg gap-3'>
      <h1 className='text-lg font-semibold'>Speech Recognition</h1>
      <select
        className='w-full p-1 rounded-md'
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
          console.log(language);
        }}
      >
        {languages.map((lang) => {
          return (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          );
        })}
      </select>
      <hr className=' bg-neutral-300  w-full' style={{ height: "2px" }} />

      {listening && (
        <button
          onClick={() => {
            setListening(false);
            recognition.stop();
          }}
          className='bg-sky-800 text-white w-full rounded-md p-2 flex justify-center items-center gap-2'
        >
          <img src={SoundWave} className='w-6' />
          Listening...
        </button>
      )}

      {!listening && (
        <button
          onClick={() => {
            setResult("");
            setListening(true);
            recognition.start();
          }}
          className='bg-sky-800 text-white w-full rounded-md p-2 flex justify-center items-center gap-2'
        >
          <BiMicrophone />
          Start Listening
        </button>
      )}

      <h1 className='self-start text-xl'>Result:</h1>
      <div className=' w-full h-36 overflow-y-auto p-4 bg-neutral-100 rounded-lg border-neutral-300 border'>
        {result}
      </div>
      <div className='flex gap-2 w-full'>
        <button
          onClick={() => {
            setResult("");
          }}
          className='bg-sky-800 text-white w-full rounded-md p-2 flex justify-center items-center gap-2 text-sm'
        >
          <BiSolidTrashAlt />
          Clear
        </button>
        <button
          onClick={() => {
            const element = document.createElement("a");
            const file = new Blob([result], { type: "text/plain" });
            element.href = URL.createObjectURL(file);
            element.download = "speech.txt";
            document.body.appendChild(element); // Required for Firefox
            element.click();
            document.body.removeChild(element); // Clean up
          }}
          className='bg-sky-800 text-white w-full rounded-md p-2 flex justify-center items-center gap-2 text-sm'
        >
          <BiDownload />
          Download
        </button>
      </div>
    </div>
  );
};
