import React, { Component } from "react";
import PropTypes from 'prop-types'
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

BackButton.propTypes = {
  handleBackButton: PropTypes.func
}


export default BackButton;
