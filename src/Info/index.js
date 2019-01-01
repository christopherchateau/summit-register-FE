import React, { Component } from "react";
import HourlyForecast from "../HourlyForecast";
import Green from "../utilities/Images/green.png";
import Blue from "../utilities/Images/blue.png";
import Black from "../utilities/Images/black.png";
import DoubleBlack from "../utilities/Images/double_black.png";
import PropTypes from "prop-types";
import "./Info.css";

class Info extends Component {
  constructor() {
    super();
    this.state = {
      display: "info"
    };
  }

  toggleView = () => {
    this.state.display === "info"
      ? this.setState({ display: "weather" })
      : this.setState({ display: "info" });
  };

  render() {
    const {
      currentMountainWeather,
      withinRange,
      handleViewLogButton
    } = this.props;

    const {
      altitude,
      difficulty,
      range
    } = this.props.currentMountainData.attributes;

    const difficultyIcons = {
      Green,
      Blue,
      Black,
      "Double Black": DoubleBlack
    };

    let displayText;
    withinRange
      ? (displayText =
          "Congratulations, you're within range to sign the register!")
      : (displayText =
          "You are not currenlty within range to sign the register.");

    const hourlyForecasts = currentMountainWeather.data
      .slice(0, 12)
      .map(forecast => <HourlyForecast key={forecast.time} {...forecast} />);

    const info = (
      <div>
        <img
          className="difficulty-icon"
          alt={difficulty}
          src={difficultyIcons[difficulty]}
        />
        <h3>Altitude: {altitude} ft</h3>
        <h3>Range: {range}</h3>
        <hr />
        <h3 className="display-text">{displayText}</h3>
      </div>
    );

    const weather = (
      <div className="weather">
        <h3 className="weather-summary-text">
          {currentMountainWeather.summary}
        </h3>
        <section className="hourly-forecast-section">{hourlyForecasts}</section>
      </div>
    );

    return (
      <div className="Info">
        <section className="info-section">
          {this.state.display === "info" ? info : weather}
          <div className="btn-container">
            <button
              className="view-log-btn"
              onClick={() => handleViewLogButton()}
            >
              Log
            </button>
            <button className="weather-btn" onClick={() => this.toggleView()}>
              {this.state.display === "info" ? "Weather" : "Info"}
            </button>
          </div>
        </section>
      </div>
    );
  }
}

Info.propTypes = {
  handleBackButton: PropTypes.func,
  currentMountainData: PropTypes.object,
  handleviewLogButton: PropTypes.func,
  handleLogUpdate: PropTypes.func
};

export default Info;
