import React, { Component } from "react";
import PropTypes from "prop-types";
import Green from "../utilities/Images/green.png";
import Blue from "../utilities/Images/blue.png";
import Black from "../utilities/Images/black.png";
import DoubleBlack from "../utilities/Images/double_black.png";
import "./Info.css";

class Info extends Component {
  render() {
    let locationCheck = this.props.currentLocation.sum - -65.4857898;
    let locationValidation = locationCheck < 0.007 && locationCheck > -0.007;
    const {
      name,
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
    return (
      <div className="Info">
        <section className="info-section">
          <h1>{name}</h1>
          <h3>Altitude: {altitude} ft</h3>
          <h3>
            Difficulty:{" "}
            <img className="difficulty-icon" alt={difficulty} src={difficultyIcons[difficulty]} />
          </h3>
          <h3>Range: {range}</h3>
          <h3>Latitude: {this.props.currentLocation.latitude}</h3>
          <h3>Longitude: {this.props.currentLocation.longitude}</h3>
          <h3>{locationCheck}</h3>
          <h3>You at the top?: {locationValidation.toString()}</h3>
        </section>
        <button
          className="view-log-btn"
          onClick={() => this.props.handleViewLogButton()}
        >
          View Log
        </button>
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
