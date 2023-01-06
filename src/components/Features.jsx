import React from "react";

function Features({ getWeather }) {
  return (
    <div className="flex justify-evenly w-full pt-4">
      <p>Wind:</p>
      <p>Humidity: {getWeather}%</p>
      <p>UV Index:</p>
      <p>Visibility:</p>
      <p>Pressure:</p>
    </div>
  );
}

export default Features;
