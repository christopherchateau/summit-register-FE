import React, { Component } from "react";
import { mountainData } from "../utilities/Data/mountain-data";
import logo from "../utilities/Images/logo.png";
import "./Start.css";

class Start extends Component {
  render() {
    const mountainNames = mountainData.sort().map(name => {
      return <option value="${name}">{name}</option>;
    });

    return (
      <div className="Start">
        <h1 className="main-title">Summit Register</h1>
        <img className="logo" src={logo}/>
        <div className="drop-down-controls">
          <select className="drop-down-menu">{mountainNames}</select>
          <button className="select-btn">Select</button>
        </div>
        <button className="sign-log-btn">Sign Log</button>
      </div>
    );
  }
}

export default Start;
