import React from "react";

const WeatherDisplay = ({ weather }) => {

  // conditional color check
  const colorStyle = {
    color: weather.temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      {/* temperature span inside p */}
      <p>
        Temperature: <span style={colorStyle}>{weather.temperature}°C</span>
      </p>

      {/* conditions */}
      <p>Condition: {weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
