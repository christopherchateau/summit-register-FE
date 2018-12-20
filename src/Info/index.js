import React, { Component } from "react";
import PropTypes from 'prop-types'
import logo from "../utilities/images/logo.png";
import SignRegister from "../SignRegister";
import "./Info.css";

class Info extends Component {
  render() {
    const {
      name,
      altitude,
      difficulty,
      range
    } = this.props.currentMountainData.attributes;
    return (
      <div className="Info">
        <header className="header">
          <button className="back-btn" onClick={this.props.handleBackButton}>
            Back
          </button>
          <img className="logo-small" alt="logo" src={logo} />
        </header>
        <section className="info-section">
          <h1>{name}</h1>
          <h3>Altitude: {altitude} ft</h3>
          <h3>Difficulty: {difficulty}</h3>
          <h3>Range: {range}</h3>
        </section>
        <button
          className="view-log-btn"
          onClick={() => this.props.handleViewLogButton()}
        >
          View Log
        </button>
        <SignRegister handleLogUpdate={this.props.handleLogUpdate} />
      </div>
    );
  }
}

Info.propTypes = {
  handleBackButton: PropTypes.func,
  currentMountainData: PropTypes.object,
  handleviewLogButton: PropTypes.func,
  handleLogUpdate: PropTypes.func

}

export default Info;
