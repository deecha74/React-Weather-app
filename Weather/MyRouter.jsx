import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./src/Component/WeatherApp/Weather";
import WeatherReact from "./src/Component/WeatherApp/WeatherReact";

const MyRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/react" element={<Weather />} />
          <Route path="/" element={<WeatherReact />} />
        </Routes>
      </Router>
    </>
  );
};

export default MyRouter;
