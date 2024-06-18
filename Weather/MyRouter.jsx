import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./src/Component/WeatherApp/Weather";
import WeatherReact from "./src/Component/WeatherApp/WeatherReact";
import Quiz from "./src/Component/Quiz/Quiz";

const MyRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/react" element={<Weather />} />
          <Route path="/" element={<WeatherReact />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );
};

export default MyRouter;
