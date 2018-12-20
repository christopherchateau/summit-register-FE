import React, { Component } from "react";
import logo from "../utilities/images/logo.png";
import PropTypes from "prop-types";
import "./LoadingScreen.css";

class LoadingScreen extends Component {
  render() {
    return (
      <div className="LoadingScreen">
        <header className="header">
          <button className="back-btn" onClick={this.props.handleBackButton}>
            Back
          </button>
          <img className="logo-small" alt="logo" src={logo} />
        </header>
        <h1>LOADING</h1>
      </div>
    );
  }
}

LoadingScreen.propTypes = {};

export default LoadingScreen;
