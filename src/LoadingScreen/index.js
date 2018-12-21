import React, { Component } from "react";
import logo from "../utilities/Images/logo.png";
import loading from "../utilities/Images/loading.gif";
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
        <img className="loading" alt="loading" src={loading} />
      </div>
    );
  }
}

LoadingScreen.propTypes = {};

export default LoadingScreen;
