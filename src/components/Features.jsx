import React from "react";

function Features({weather1, weather2, weather3, weather4, weather5}) {

  return (
    <section className="text-white ">
        <div className="grid grid-cols-3 text-center gap-6 justify-evenly w-full pt-4">
        
          <p className=" py-6 lg:p-6 rounded-lg shadow-3xl"> <span className="font-bold text-lg text-[rgb(210,225,0)]">Wind </span> <br />{weather2}</p>
          <p className=" py-6 lg:p-6 rounded-lg shadow-3xl"> <span className="font-bold text-lg text-[rgb(210,225,0)]">Humidity </span> <br /> {weather1}%</p>
          <p className=" py-6 lg:p-6 rounded-lg shadow-3xl"> <span className="font-bold text-lg text-[rgb(210,225,0)]">UV Index </span> </p>
          <p className=" py-6 lg:p-6 rounded-lg shadow-3xl"> <span className="font-bold text-lg text-[rgb(210,225,0)]">Visibility </span> <br />{weather3}</p>
          <p className=" py-6 lg:p-6 rounded-lg shadow-3xl"> <span className="font-bold text-lg text-[rgb(210,225,0)]">Pressure </span> <br /> {weather4}</p>
          <p className=" py-6 lg:p-6 rounded-lg shadow-3xl"> <span className="font-bold text-lg text-[rgb(210,225,0)]">Feels Like </span> <br /> {weather5}</p>


        </div>
    </section>
  );
}

export default Features;
