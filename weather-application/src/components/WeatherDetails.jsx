import React from "react";
import background from "../assets/images/Cloud-background.png";
import Clear from "../assets/images/Clear.png";
import HeavyCloud from "../assets/images/HeavyCloud.png";
import LightRain from "../assets/images/LightRain.png";
import Snow from "../assets/images/Snow.png";
import Thunderstorm from "../assets/images/Thunderstorm.png";
import Shower from "../assets/images/Shower.png";

// Mapping weather assets
const weatherIcons = {
  Clear,
  Clouds: HeavyCloud,
  Rain: LightRain,
  Snow,
  Thunderstorm,
  Drizzle: Shower,
  Mist: HeavyCloud,
};

const WeatherDetails = ({ weatherData, unit }) => {
  const tempC = (weatherData.list[0].main.temp - 273.15).toFixed(2);
  const tempF = (
    ((weatherData.list[0].main.temp - 273.15) * 9) / 5 +
    32
  ).toFixed(2);

  // Image based on weather condition
  const weatherCondition = weatherData.list[0].weather[0].main;
  const weatherIcon = weatherIcons[weatherCondition] || Clear;

  // console.log zone
  console.log(unit);
  return (
    <>
      <div className="img1-left">
        <img className="bgImg" src={background} alt="back" />
        <img className="mainImg" src={weatherIcon} alt="weather-icon" />
      </div>

      <div className="temp-left">
        <div className="temp-left">
          <h2>
            <span>{unit === "C" ? tempC : tempF}</span> ৹{unit}
          </h2>
        </div>
      </div>
      <div className="type-left">
        <h4>{weatherData.list[0].weather[0].description}</h4>
      </div>
      <div className="foot1-left">
        <p>
          Today -{" "}
          <span>
            {new Date().toLocaleDateString("en", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </span>
        </p>
      </div>
      <div className="foot2-left">
        <i className="fa-solid fa-location-dot"></i>
        <p>{weatherData.city.name}</p>
      </div>
    </>
  );
};

export default WeatherDetails;
