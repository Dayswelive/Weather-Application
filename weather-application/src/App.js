import React, { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import SearchBar from "./components/SearchBar";
import WeatherHighlights from "./components/WeatherHighlights";
import { getWeatherData } from "./api/weatherApi";
import "./stylesheets/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

const App = () => {
  // state management
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Pantnagar");
  const [unit, setUnit] = useState("C");
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDayData, setSelectedDayData] = useState(null);

  // useeffect to fetch the weather details
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

  // handle search for city
  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  // Toggle between celcius and farenhite
  const toggleUnit = (unitType) => {
    setUnit(unitType);
  };

  const convertTemperature = (kelvinTemp) => {
    return unit === "C"
      ? (kelvinTemp - 273.15).toFixed(2)
      : ((kelvinTemp - 273.15) * 9) / 5 + 32;
  };
  // Function to filter weather data based on selected date
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const filteredDayData = weatherData.list.find((item) => {
      const itemDate = new Date(item.dt * 1000);
      return itemDate.toDateString() === date.toDateString();
    });
    if (filteredDayData) {
      setSelectedDayData(filteredDayData);
      setIsModalOpen(true);
    } else {
      toast.error("No weather data available for this date.");
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
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
          {/* Date Picker for filtering by date */}
          <div className="date-picker-container">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              placeholderText="Select a date"
              className="date-picker"
            />
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Weather Details"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Weather Details for {selectedDate?.toDateString()}</h2>
        {selectedDayData ? (
          <div>
            <p>
              Temperature: {convertTemperature(selectedDayData.main.temp)}°{" "}
              {unit}
            </p>
            <p>Humidity: {selectedDayData.main.humidity}%</p>
            <p>Weather: {selectedDayData.weather[0].description}</p>
            <button onClick={closeModal} className="close-modal-button">
              Close
            </button>
          </div>
        ) : (
          <p>No data available for this date.</p>
        )}
      </Modal>
    </div>
  );
};

export default App;
