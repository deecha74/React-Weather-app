import React, { useEffect, useState } from "react";

import "./Weather.css";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import axios from "axios";

import cloudy from "../../assets/images/cloudy.png";
import rainy from "../../assets/images/rainy.png";
import sunny from "../../assets/images/sunny.png";
import drizzle from "../../assets/images/drizzle.png";
import sunrise from "../../assets/images/sunrise.png";

const WeatherReact = () => {
  const [data, setData] = useState({
    name: "Kathmandu",
    speed: 2,
    humidity: 10,
    celcius: 10,
    image: sunrise,
  });
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [showWeather, setShowWeather] = useState(false);

  const handleClick = () => {
    if (city.trim() !== " ") {
      //.trim removes the empty
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f9a8bc67db857feafdab6e9583cf3016&units=metric`;

      axios
        .get(apiUrl)
        .then((res) => {
          let imgurl = "";
          if (res.data.weather[0].main === "Clouds") {
            imgurl = cloudy;
            document.querySelector(".main").style.backgroundImage =
              "url({cloudy})";
          } else if (res.data.weather[0].main === "Clear") {
            imgurl = sunny;
          } else if (res.data.weather[0].main === "Rain") {
            imgurl = rainy;
          } else if (res.data.weather[0].main === "Drizzle") {
            imgurl = drizzle;
          } else {
            imgurl = sunrise;
          }
          document.querySelector(".weather").style.display = "block";

          setData({
            ...data,
            name: res.data.name,
            speed: Math.round(res.data.wind.speed),
            humidity: res.data.main.humidity,
            celcius: Math.round(res.data.main.temp),
            image: imgurl,
          });
          setShowWeather(true);
        })
        .catch((err) => {
          if (err.response.status == 404) {
            setError("Invalid City Name !");
          } else setError("Server Error");

          console.log(err);
        });
    } else {
    }
  };

  return (
    <>
      <div className="flex items-center main  justify-center h-lvh bg-blue-200">
        <div className="h-auto rounded-xl flex flex-col   shadow-md p-6  bg-gradient-to-tl from-blue-100  to-blue-700 w-auto">
          <div className="flex searchbox items-center gap-3 justify-center">
            <input
              type="text"
              name="input"
              id=""
              className="border-black border-2 rounded-full p-2 px-3 text-blue-600 font-bold "
              placeholder="Enter City Name "
              spellCheck="false"
              onClick={(e) => {
                setCity(e.target.value);
              }}
            />
            <button
              type="submit"
              className=" bg-amber-400 active:scale-95 shadow-md transition-all ease-in-out duration-150 rounded-full  p-2"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
          <div className="error text-red-200 font-bold flex items-center justify-center">
            {error}
          </div>
          <div className="weather">
            <div className="flex flex-col items-center justify-center ">
              <img
                src={data.image}
                alt=""
                className="h-28 w-28 flex transition-all ease-in-out duration-200 items-center justify-center image p-1"
              />
              <h1 className="temp text-5xl font-bold">
                {data.celcius}°<span className="text-3xl">C</span>
              </h1>

              <h1 className="city text-3xl font-bold p-3">{data.name}</h1>
            </div>
            <div className="flex items-center justify-between pt-6">
              <div className="flex flex-row items-center justify-center ">
                <WiHumidity className="text-3xl" />
                <div>
                  <h1 className="humadity">{data.humidity}%</h1>
                  <h1>Humidity</h1>
                </div>
              </div>
              <div className="flex flex-row items-center gap-1 justify-center">
                <FaWind className="text-3xl" />
                <div>
                  <h1 className="speed">{data.speed} k/hr</h1>
                  <h1>Wind Speed</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherReact;
