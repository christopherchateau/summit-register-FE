import React, { Component } from "react";
import BackButton from "../BackButton";
import logo from "../utilities/images/logo.png";
import "./Info.css";

class Info extends Component {
  render() {
    const {
      name,
      altitude,
      difficulty,
      range
    } = this.props.currentMountainData;
    return (
      <div className="Info">
        <header className="header">
          <BackButton handleBackButton={this.props.handleBackButton} />
          <img className="logo-small" alt="logo" src={logo} />
        </header>
        <section className="info-section">
        <h1>{name}</h1>
        <h3>Altitude: {altitude}</h3>
        <h3>Difficulty: {difficulty}</h3>
        <h3>Range: {range}</h3>
        </section>
        <button className="sign-register-btn">Sign Register</button>
      </div>
    );
  }
}

export default Info;
