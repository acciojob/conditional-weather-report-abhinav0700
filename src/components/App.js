import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import './../styles/App.css';
const App = () => {

  // hardcoded weather data stored using useState
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  return (
    <div>
      {/* Do not remove main div */}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
