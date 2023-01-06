import Features from "./Features";
import React from "react";
import { useState } from "react";

function Head() {
  const apiKey = "0f7ccf743853d94ac08d56cefbe74d7d";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [visibility, setVisibility] = useState("");
  const [pressure, setPressure] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
          answer();
        });
    }
  };

  const answer = () => {
    setHumidity(weatherData.main.humidity);

    // setWind(weatherData.wind.speed);
    // setVisibility(weatherData.visibility);
    // setPressure(weatherData.main.pressure);
  };

  return (
    <div className="grid place-items-center w-3/4 m-auto">
      <div className="flex justify-center gap-4 items-center">
        <div>
          <h1 className="text-2xl font-bold">MyWeather</h1>
        </div>
        <div>
          <input
            className="border-2"
            type="text"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City..."
            value={city}
            onKeyUp={getWeather}
          />
        </div>
      </div>
      <div className=" bg-lime-400 px-2 py-6  w-full rounded-t-lg mt-8">
        <div className="pb-4">
          <p className="text-4xl font-bold ">{weatherData.name} Location </p>
        </div>
        <div className="flex gap-3">
          <p className="text-xl font-semibold">
            {weatherData.main.temp} &deg;F
          </p>
          <p className="text-xl font-semibold">
            {weatherData.weather[0].main} condition
          </p>
        </div>
      </div>

      <Features getWeather={humidity} />
      {/* <button className="bg-yellow-500 p-4 rounded" onClick={() => answer()}>
        Click me
      </button> */}
    </div>
  );
}

export default Head;
