import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <button>Back</button>
        <h1>{this.props.mountainName}</h1>
        <button className="sign-log-btn">Sign Log</button>
      </div>
    );
  }
}

export default Info;
