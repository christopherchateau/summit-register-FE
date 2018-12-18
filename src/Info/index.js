import React, { Component } from "react";
import BackButton from "../BackButton"
import logo from "../utilities/Images/logo.png";
import "./Info.css";

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <header className="header">
          <BackButton handleBackButton={this.props.handleBackButton}/>
          <img className="logo-small" alt="logo" src={logo} />
        </header>
        <h1>{this.props.mountainName}</h1>
        <button className="sign-log-btn">Sign Log</button>
      </div>
    );
  }
}

export default Info;
