import { useEffect } from "react";
const Widget = () =>{


    // useEffect(() => {
    //     // OpenWeatherMap Widget Script
    //     if(!window.myWidgetParam){
    //         window.myWidgetParam = [];
    //     }

    //     window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
    //     window.myWidgetParam.push({
    //       id: 11,
    //       cityId: '2332453', // Replace with your desired city ID
    //       appid: '0f7ccf743853d94ac08d56cefbe74d7d', // Replace with your API key
    //       units: 'Fahrenheit', // or 'imperial' for Fahrenheit
    //       containerId: 'openweathermap-widget-11',
    //     })
    // ;

    // const script = document.createElement('script');
    // script.async = true;
    // script.src =
    //   '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';

    // const s = document.getElementById('openweathermap-widget-11');
    // s.parentNode.insertBefore(script, s);

    // return () => {
    //     // Cleanup if needed (e.g., remove the script when the component is unmounted)
    //     s.removeChild(script);
    //   };
    // }, []);

    return (
        <div className="border-4 w-full h-[10em]" id="openweathermap-widget-11">
    
        </div>
    );
}

export default Widget;