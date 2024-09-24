// import React from "react";

// const WeatherCard = ({ dayData, unit, index }) => {
//   const getTemperature = (temp) => {
//     return unit === "C"
//       ? (temp - 273.15).toFixed(1) + "৹C"
//       : (((temp - 273.15) * 9) / 5 + 32).toFixed(1) + "°F";
//   };

//   console.log(dayData.weather);
//   return (
//     <div className={`card${index + 1} card`}>
//       <h6 className="day">
//         {new Date(dayData.dt * 1000).toLocaleDateString("en", {
//           weekday: "short",
//         })}
//       </h6>
//       <img
//         className="mainImg2"
//         src={`/${dayData.weather[0].main}.png`}
//         alt={dayData.weather[0].description}
//       />
//       <div className="foot-card">
//         <p className="maxTemp">{getTemperature(dayData.main.temp_max)}</p>
//         <p className="minTemp">{getTemperature(dayData.main.temp_min)}</p>
//       </div>
//     </div>
//   );
// };

// export default WeatherCard;

import React from "react";
import Clear from "../assets/images/Clear.png";
import HeavyCloud from "../assets/images/HeavyCloud.png";
import LightRain from "../assets/images/LightRain.png";
import Snow from "../assets/images/Snow.png";
import Thunderstorm from "../assets/images/Thunderstorm.png";
import Shower from "../assets/images/Shower.png";

const WeatherCard = ({ dayData, unit, index }) => {
  const getTemperature = (temp) => {
    return unit === "C"
      ? (temp - 273.15).toFixed(1) + "৹C"
      : (((temp - 273.15) * 9) / 5 + 32).toFixed(1) + "°F";
  };

  const getImageForWeather = (weatherType) => {
    // Conditional rendering for weather images
    switch (weatherType) {
      case "Clouds":
      case "Mist":
        return HeavyCloud;
      case "Rain":
        return LightRain;
      case "Clear":
        return Clear;
      case "Snow":
        return Snow;
      case "Thunderstorm":
        return Thunderstorm;
      case "Drizzle":
        return Shower;
      default:
        return Clear;
    }
  };

  console.log(dayData);

  return (
    <div className={`card${index + 1} card`}>
      <h6 className="day">
        {new Date(dayData.dt * 1000).toLocaleDateString("en", {
          weekday: "short",
        })}
      </h6>
      <img
        className="mainImg2"
        src={getImageForWeather(dayData.weather[0].main)}
        alt={dayData.weather[0].description || "Weather icon"}
      />
      <div className="foot-card">
        <p className="maxTemp">{getTemperature(dayData.main.temp_max)}</p>
        <p className="minTemp">{getTemperature(dayData.main.temp_min)}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
