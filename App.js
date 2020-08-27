import React from "react";
import "./App.css";

function App() {
  return (
    <div className="gradient w-full mx-auto h-screen justify-center flex flex-wrap">
      <div className="lg:w-1/2 sm:w-5/12 flex flex-col sm:h-full flex-wrap justify-center items-center ">
        <div className="flex justify-center p-4 sm:my-8 bg-white rounded-full lg:w-62 lg:h-62 sm:w-64 sm:h-64 items-center">
          <img
            src={require("../src/assets/img/icon.png")}
            alt=""
            className="icon object-center lg:object-cover m-8 w-24 h-24 "
          />
        </div>
      </div>
      <div className="lg:w-1/2 md:w-full lg:px-66 sm:54 flex flex-col justify-center items-center text-center bg-white">
        <h1 className="text-2xl text-black-500 mx-38 mb-4">Upload Your Reports</h1>
        <div className="mx-8 px-12 text-center flex flex-col items-center border border-dashed border-black ">
          <label className="w-full mx-20 my-12 text-blue cursor-pointer hover:bg-blue">
            <div className="flex flex-col items-center">
              <img
                src={require("../src/assets/img/upload.png")}
                className="object-center w-24 h-22 "
              />
              <input type="file" className="hidden" />
              <span className="mt-2 text-sm font-bold">
                Drag and Drop to upload
              </span>
              <span className="text-xs font-light text-center ">
                or browse to choose a file.
              </span>
            </div>
          </label>
        </div>
        <div className="my-3 flex space-x-4 > * + *">
          <button className="bg-transparent border border-green-700 text-green-500 px-8 py-2 rounded text-lg focus:outline-none">
            Pass
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white px-8 py-2 rounded text-lg focus:outline-none ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
