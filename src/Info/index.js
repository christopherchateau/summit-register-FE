import React, { Component } from "react";
import logo from "../utilities/Images/logo.png";
import "./Info.css";

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <header className="header">
          <button className="back-btn">Back</button>
          <img className="logo-small" alt="logo" src={logo} />
        </header>
        <h1>{this.props.mountainName}</h1>
        <button className="sign-log-btn">Sign Log</button>
      </div>
    );
  }
}

export default Info;
