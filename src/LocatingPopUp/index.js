import React, { Component } from "react";
import loading from "../utilities/Images/loading.gif";
import "./LocatingPopUp.css";

class LocatingPopUp extends Component {
  render() {
    return (
      <div className="LocatingPopUp">
        <h3>Locating...</h3>
        <img className="loading-gif" alt="loading" src={loading} />
      </div>
    );
  }
}

export default LocatingPopUp;
