import React from "react";

const WeatherHighlights = ({ weatherData }) => {
  return (
    <>
      <div className="heading-right">
        <h2>Today's Highlights</h2>
      </div>
      <div className="containers-right">
        <div className="top-cont">
          <div className="container1 cont">
            <h6 className="status">Wind status</h6>
            <h5 className="percent">
              <span>{(weatherData.wind.speed * 2.237).toFixed(2)}</span> mph
            </h5>
            <div className="foot-cont">
              <i className="fa-solid fa-location-arrow"></i>
              <p>WSW</p>
            </div>
          </div>
          <div className="container2 cont">
            <h6 className="status">Humidity</h6>
            <h5 className="percent">
              <span>{weatherData.main.humidity}</span> %
            </h5>
            <div className="units">
              <p>0</p>
              <p>50</p>
              <p>100</p>
            </div>
            <progress
              id="progBar"
              value={weatherData.main.humidity}
              max="100"
            ></progress>
          </div>
        </div>
        <div className="bottom-cont">
          <div className="container3 con">
            <h6 className="visible">Visibility</h6>
            <h5 className="visibleValue">
              <span>{(weatherData.visibility / 1609).toFixed(2)}</span> miles
            </h5>
          </div>
          <div className="container4 con">
            <h6 className="Ap">Air Pressure</h6>
            <h5 className="Apvalue">
              <span>{weatherData.main.grnd_level}</span> hPa
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherHighlights;
