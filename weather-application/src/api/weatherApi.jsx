// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_KEY = "25c01fde9cba2a86991082780f31863d";

// export const fetchWeatherData = async (city) => {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
//   );
//   if (!response.ok) {
//     throw new Error("City not found");
//   }
//   const data = await response.json();
//   return data;
// };

export const getWeatherData = async (city) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};
