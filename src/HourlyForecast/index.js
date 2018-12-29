import React, { Component } from "react";
import { convertUnixTimeStamp } from "../utilities/helper/timeStamp";
import Skycons from "react-skycons";
import PropTypes from "prop-types";
import "./HourlyForecast.css";

class HourlyForecast extends Component {
  covertToPercent = num => {
    return num * 100 + "%";
  };

  render() {
    let {
      time,
      icon,
      summary,
      humidity,
      windSpeed,
      temperature,
      precipProbability
    } = this.props;

    icon = icon.toUpperCase().replace(/-/g, "_");
    return (
      <div className="HourlyForecast">
        <div className="skycon">
          <Skycons icon={icon} autoplay={true} />
        </div>
        <h3>{convertUnixTimeStamp(time)}</h3>
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
