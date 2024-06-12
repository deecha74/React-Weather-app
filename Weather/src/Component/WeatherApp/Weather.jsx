import React from "react";
import sunrise from "../../assets/images/sunrise.png";
import "./Weather.css";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import "./script.js";

const Weather = () => {
  return (
    <>
      <div className="flex items-center  justify-center h-lvh bg-blue-200">
        <div className="h-3/4 rounded-xl flex flex-col   shadow-md p-6  bg-gradient-to-tl from-blue-100  to-blue-700 w-auto">
          <div className="flex searchbox items-center gap-3 justify-center">
            <input
              type="text"
              name="input"
              id=""
              className="border-black border-2 rounded-full p-2 px-3 text-blue-600 font-bold "
              placeholder="Enter City Name "
              spellCheck="false"
            />
            <button
              type="submit"
              className=" bg-amber-400 active:scale-95 shadow-md transition-all ease-in-out duration-150 rounded-full  p-2"
            >
              Search
            </button>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img
              src={sunrise}
              alt=""
              className="h-28 w-28 flex items-center justify-center image"
            />
            <h1 className="temp text-5xl font-bold">
              7°<span className="text-3xl">C</span>
            </h1>

            <h1 className="city text-3xl font-bold p-3">Kathmandu </h1>
          </div>
          <div className="flex items-center justify-between pt-6">
            <div className="flex flex-row items-center justify-center ">
              <WiHumidity className="text-3xl" />
              <div>
                <h1 className="humadity">53%</h1>
                <h1>Humidity</h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-1 justify-center">
              <FaWind className="text-3xl" />
              <div>
                <h1 className="speed">53 k/hr</h1>
                <h1>Wind Speed</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
