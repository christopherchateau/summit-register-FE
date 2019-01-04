import React, { Component } from "react";
import loading from "../utilities/Images/loading.gif";
import "./LoadingScreen.css";

class LoadingScreen extends Component {
  render() {
    return (
      <div className="LoadingScreen">
        <img className="loading" alt="loading" src={loading} />
      </div>
    );
  }
}

export default LoadingScreen;
