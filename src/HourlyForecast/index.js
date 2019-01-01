import React, { Component } from "react";
import clearDay from "../utilities/Images/weather-icons/clear-day.svg";
import clearNight from "../utilities/Images/weather-icons/clear-night.svg";
import cloudy from "../utilities/Images/weather-icons/cloudy.svg";
import fog from "../utilities/Images/weather-icons/fog.svg";
import partlyCloudyDay from "../utilities/Images/weather-icons/partly-cloudy-day.svg";
import partlyCloudyNight from "../utilities/Images/weather-icons/partly-cloudy-night.svg";
import snow from "../utilities/Images/weather-icons/snow.svg";
import rain from "../utilities/Images/weather-icons/rain.svg";
import sleet from "../utilities/Images/weather-icons/sleet.svg";
import wind from "../utilities/Images/weather-icons/wind.svg";
import { convertUnixTimeStamp } from "../utilities/helper/timeStamp";
import PropTypes from "prop-types";
import "./HourlyForecast.css";

class HourlyForecast extends Component {
  covertToPercent = num => {
    return (num * 100).toFixed(0) + "%";
  };

  render() {
    const weatherIcons = {
      "clear-day": clearDay,
      "clear-night": clearNight,
      "partly-cloudy-night": partlyCloudyDay,
      "partly-cloudy-day": partlyCloudyNight,
      cloudy,
      rain,
      sleet,
      snow,
      wind,
      fog
    };

    const {
      time,
      icon,
      summary,
      humidity,
      windSpeed,
      temperature,
      precipProbability
    } = this.props;

    return (
      <div className="HourlyForecast">
        <h3 className="time">{convertUnixTimeStamp(time)}</h3>
        <img className="weather-icon" src={weatherIcons[icon]} alt={summary} />
        <h3>{summary}</h3>
        <h3>{temperature.toFixed(0)} °F</h3>
        <h3>Wind: {windSpeed.toFixed(0)} mph</h3>
        <h3>Chance of Rain: {this.covertToPercent(precipProbability)}</h3>
        <h3>Humidity: {this.covertToPercent(humidity)}</h3>
      </div>
    );
  }
}

HourlyForecast.propTypes = {};

export default HourlyForecast;
