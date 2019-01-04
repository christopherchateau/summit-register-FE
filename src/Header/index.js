import React, { Component } from "react";
import logo from "../utilities/Images/summit-2.png";
import PropTypes from "prop-types";
import "./Header.css";

class Header extends Component {
  render() {
    const {
      currentDisplay,
      handleBackButton,
      currentMountainData
    } = this.props;

    let displayText = "Summit Register";

    if (currentDisplay === "myMountains") {
      displayText = "My Mountains";
    } else if (currentMountainData.attributes && currentDisplay !== "start") {
      displayText = currentMountainData.attributes.name;
    }

    return (
      <header className="Header">
        {currentDisplay !== "start" && (
          <button className="back-btn" onClick={handleBackButton}>
            Back
          </button>
        )}
        <h1 className="main-title">{displayText}</h1>
        <img className="logo" alt="logo" src={logo} />
      </header>
    );
  }
}

Header.propTypes = {
  currentDisplay: PropTypes.string,
  handleBackButton: PropTypes.func,
  currentMountainData: PropTypes.object
};

export default Header;
