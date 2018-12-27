import React, { Component } from "react";
import PropTypes from "prop-types";
import Green from "../utilities/Images/green.png";
import Blue from "../utilities/Images/blue.png";
import Black from "../utilities/Images/black.png";
import DoubleBlack from "../utilities/Images/double_black.png";
import "./Info.css";

class Info extends Component {
  render() {
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
    return (
      <div className="Info">
        <section className="info-section">
          <img
            className="difficulty-icon"
            alt={difficulty}
            src={difficultyIcons[difficulty]}
          />
          <h3>Altitude: {altitude} ft</h3>
          <h3>Range: {range}</h3>
          <h3>You at the top?: {this.props.withinRange || false}</h3>
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
