import React, { Component } from "react";
import { mountainData } from "../utilities/data/mountain-data";
import logo from "../utilities/images/logo.png";
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
        <button className="sign-register-btn">Sign Register</button>
      </div>
    );
  }
}

export default Start;
