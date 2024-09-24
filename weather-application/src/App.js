import React, { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import SearchBar from "./components/SearchBar";
import WeatherHighlights from "./components/WeatherHighlights";
import { getWeatherData } from "./api/weatherApi";
import "./stylesheets/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Pantnagar");
  const [unit, setUnit] = useState("C");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherData(city);
      if (data) {
        setWeatherData(data);
        setError(null);
        toast.success("Weather data successfully retrieved!");
      } else {
        setWeatherData(null);
        setError("Oops! This city is not present.");
        toast.error("City not found. Please try again.");
      }
    };

    fetchData();
  }, [city]);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  const toggleUnit = (unitType) => {
    setUnit(unitType);
  };

  return (
    <div className="weather-app">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="left-main">
        <SearchBar onSearch={handleSearch} />
        {error ? (
          <p>{error}</p>
        ) : weatherData && weatherData.list ? (
          <WeatherDetails weatherData={weatherData} unit={unit} />
        ) : (
          <p>Loading weather details...</p>
        )}
      </div>

      <div className="right-main">
        <div className="wrapper">
          <div className="head-right">
            {!error && (
              <>
                <h6
                  onClick={() => toggleUnit("C")}
                  className={`cel ${unit === "C" ? "active" : ""}`}
                >
                  ৹C
                </h6>
                <h6
                  onClick={() => toggleUnit("F")}
                  className={`fah ${unit === "F" ? "active" : ""}`}
                >
                  ৹F
                </h6>
              </>
            )}
          </div>

          <div className="cards-right">
            {weatherData && weatherData.list ? (
              weatherData.list
                .filter(
                  (item, index, self) =>
                    new Date(item.dt * 1000).getDate() !==
                    new Date(self[index - 1]?.dt * 1000).getDate()
                )
                .slice(0, 5)
                .map((day, index) => (
                  <WeatherCard
                    key={index}
                    dayData={day}
                    unit={unit}
                    index={index}
                  />
                ))
            ) : (
              <p>Loading forecast...</p>
            )}
          </div>
          {weatherData && weatherData.list ? (
            <WeatherHighlights weatherData={weatherData.list[0]} />
          ) : (
            <p>Loading highlights...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
