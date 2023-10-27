import React, { useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BsArrowsExpand, BsDroplet, BsEmojiSmile } from "react-icons/bs";
import { FiWind } from "react-icons/fi";
import { WiDegrees } from "react-icons/wi";
import coldBg from "../assets/cold.jpg";
import hotBg from "../assets/hot1.jpg";
import "./WeatherA.css";
import { getFormattedWeatherData } from "./WeatherService.js";

export const Weather = () => {
  const [city, setCity] = useState("delhi");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      //dynamic
      //below 20 in C and below 60 in F
      const threshold = units === "metric" ? 20 : 68;
      if (data.temp <= threshold) setBg(coldBg);
      else setBg(hotBg);
    };

    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innetText;

    const isCelsius = currentUnit === "C";
    button.innetText = isCelsius ? "F" : "C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  //13 is code for enter key
  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      //to remove cursor after searching
      e.currentTarget.blur();
    }
  };

  return (
    <div className="fullview" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {
          //container will render if weather is not null
          weather && (
            <div className="container">
              {/* enter section */}
              <div className="section section_inputs">
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  onKeyDown={enterKeyPressed}
                />
                <button onClick={(e) => handleUnitsClick(e)}>
                  <WiDegrees />F
                </button>
              </div>

              {/* show section */}
              <div className="section section_temperature">
                <div className="area_desc">
                  <h3>{`${weather.name}, ${weather.country}`}</h3>
                  <img src={weather.iconURL} alt="weaatherIcon" />
                  <h3>{weather.description}</h3>
                </div>

                <div className="temperature">
                  <h1>
                    {`${weather.temp.toFixed()}`}
                    <WiDegrees />
                    {`${units === "metric" ? "C" : "F"}`}
                  </h1>
                </div>
              </div>

              {/* description section */}
              <div className="section section_description">
                <div className="card">
                  <div className="decription_card-icon">
                    <AiOutlineArrowDown />
                    <small>Min</small>
                  </div>
                  <h2>
                    {`${weather.temp_min.toFixed()}`}
                    <WiDegrees />
                    {`${units === "metric" ? "C" : "F"}`}
                  </h2>
                </div>
                <div className="card">
                  <div className="decription_card-icon">
                    <AiOutlineArrowUp />
                    <small>Max</small>
                  </div>
                  <h2>
                    {`${weather.temp_max.toFixed()}`}
                    <WiDegrees />
                    {`${units === "metric" ? "C" : "F"}`}
                  </h2>
                </div>
                <div className="card">
                  <div className="decription_card-icon">
                    <BsEmojiSmile />
                    <small>Feels Like</small>
                  </div>
                  <h2>
                    {`${weather.feels_like}`}
                    <WiDegrees />
                    {`${units === "metric" ? "C" : "F"}`}
                  </h2>
                </div>
                <div className="card">
                  <div className="decription_card-icon">
                    <BsArrowsExpand />
                    <small>Pressure</small>
                  </div>
                  <h2>
                    {`${weather.feels_like}`}
                    <WiDegrees />
                    {`${units === "metric" ? "m/s" : "m/h"}`}
                  </h2>
                </div>
                <div className="card">
                  <div className="decription_card-icon">
                    <BsDroplet />
                    <small>Humidity</small>
                  </div>
                  <h2>{`${weather.feels_like}`} %</h2>
                </div>
                <div className="card">
                  <div className="decription_card-icon">
                    <FiWind />
                    <small>Wind Speed</small>
                  </div>
                  <h2>
                    {`${weather.feels_like}`}
                    <WiDegrees />
                    {`${units === "metric" ? "m/s" : "m/h"}`}
                  </h2>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Weather;
