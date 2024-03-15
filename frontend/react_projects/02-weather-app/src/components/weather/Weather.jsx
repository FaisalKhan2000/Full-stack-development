import { useEffect, useState } from "react";
import Search from "../search/Search";

function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchWeatherData(param) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=a8a2d720fa166493dd402f9fe3ed9fc5`
      );
      const data = await res.json();
      console.log(data);
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error);
      console.error(error);
      setLoading(false);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  useEffect(() => {
    fetchWeatherData("mumbai");
  }, []);

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading && <div>Loading....</div>}
      {errorMsg && <div>{errorMsg.toString()}.</div>}
      {weatherData && (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
