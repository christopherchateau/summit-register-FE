import React, { Component } from "react";
import PropTypes from "prop-types";
import { mountainData } from "../utilities/Data/mountain-data";
import logo from "../utilities/Images/logo.png";
import SignRegister from "../SignRegister";
import "./Start.css";

class Start extends Component {
  compareNames = (a, b) => {
    if (a.attributes.name < b.attributes.name) return -1;
    if (a.attributes.name > b.attributes.name) return 1;
    return 0;
  };

  render() {
    const mountainNames = mountainData.data
      .sort(this.compareNames)
      .map((mountain, index) => {
        return (
          <option value={mountain.attributes.name} key={index}>
            {mountain.attributes.name}
          </option>
        );
      });

    return (
      <div className="Start">
        <h1 className="main-title">
          Summit Register
          <img className="logo" alt="logo" src={logo} />
        </h1>
        <div className="drop-down-controls">
          <select
            className="drop-down-menu"
            ref={input => (this.menu = input)}
            defaultValue={this.props.currentMountain}
          >
            {mountainNames}
          </select>
          <button
            className="select-btn"
            onClick={() => this.props.handleSelectButton(this.menu.value)}
          >
            Select
          </button>
        </div>
        <SignRegister handleSignLog={this.props.handleSignLog} />
        <button 
        onClick={this.props.handleSignIn}
        >
          SignIn/SignUp
        </button>
      </div>
    );
  }
}

Start.propTypes = {
  handleSelect: PropTypes.func,
  currentMountain: PropTypes.string,
  handleLogUpdate: PropTypes.func,
  handleSignIn: PropTypes.func
};

export default Start;
