import React, { Component } from "react";
import "./BackButton.css";

class BackButton extends Component {
  render() {
    return (
      <button className="BackButton" onClick={this.props.handleBackButton}>
        Back
      </button>
    );
  }
}

export default BackButton;
