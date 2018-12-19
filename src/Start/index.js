import React, { Component } from "react";
import { mountainData } from "../utilities/data/mountain-data";
import logo from "../utilities/images/logo.png";
import "./Start.css";

class Start extends Component {
  render() {
    const mountainNames = mountainData.data.map((mountain, index) => {
      return (
        <option value={mountain.name} key={index}>
          {mountain.name}
        </option>
      );
    });

    return (
      <div className="Start">
        <h1 className="main-title">Summit Register</h1>
        <img className="logo" alt="logo" src={logo} />
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
