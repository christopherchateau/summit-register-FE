import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SignRegister.css";

class SignRegister extends Component {
  render() {
    const { withinRange, handleSignLog } = this.props;

    return (
      <button
        className={withinRange ? "SignRegister active" : "SignRegister"}
        disabled={!withinRange}
        onClick={() => handleSignLog()}
      >
        Sign Register
      </button>
    );
  }
}

SignRegister.propTypes = {
  handleSignLog: PropTypes.func,
  withinRange: PropTypes.bool
};

export default SignRegister;
