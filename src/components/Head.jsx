import Features from "./Features";
import React, { useEffect } from "react";
import { useState } from "react";
import background from "../assets/bggg.jpg"
import Widget from "./Widget";
// import Widget from "./Widget";
function Head() {
  const apiKey = "0f7ccf743853d94ac08d56cefbe74d7d";
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [visibility, setVisibility] = useState("");
  const [pressure, setPressure] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    answer()
  },[weatherData])

  const getWeather = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      );
      const data = await response.json();
      setWeatherData(data);
      setCity("");
      answer();
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  
  const answer = () => {
    setHumidity(weatherData?.main?.humidity);
    setWind(weatherData?.wind?.speed);
    setVisibility(weatherData?.visibility);
    setPressure(weatherData?.main?.pressure);
  };

  


  return (
       <>
      <div 
      style={{
      backgroundImage : `url(${background})`, 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }} 
      className=" h-screen ">
        <div className="grid place-items-center w-3/4 m-auto py-8">
          <div className="flex justify-center gap-4 items-center">
          
            <div>
              <form onSubmit={getWeather}>
                <input
                  className="border-2"
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter City..."
                  value={city}
                  style={{ marginRight: "1rem", padding: "3px 10px" }}
                />

                <button
                  style={{ border: "1px solid grey", padding: "3px 10px" }}
                  type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {loading && <p>Loading...</p>}

          <div className=" text-[rgb(235,235,235)]  shadow-3xl px-2 py-6  w-full rounded-xl mt-8">
            <div className="pb-4">
              <p className="text-4xl font-bold ">{weatherData?.name}  </p>
            </div>
            <div className="flex gap-4 w-fit  items-center ">
              <p className="text-xl font-semibold">
                
              <span className="text-[rgb(215,255,0)] text-4xl"> {weatherData?.main?.temp} </span> &deg;F
              </p>
              <p className="text-xl font-semibold">
                {weatherData?.weather?.[0]?.main} 
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 w-full gap-4 mt-[3rem]          ">
              <Features 
              weather1={humidity}
              weather2={wind}
              weather3 = {visibility}
              weather4 = {pressure}
               />
              <Widget/>
          </div>
          <button className="bg-yellow-500 p-4 rounded" onClick={() => answer()}>
            Click me
          </button>
        </div>
      </div>
      
      </>
  );  
}

export default Head;
