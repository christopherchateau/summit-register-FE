import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SignRegister.css";

class SignRegister extends Component {
  render() {
    const { withinRange, handleSignLog } = this.props;
    let buttonText;

    withinRange
      ? (buttonText = "Sign Register")
      : (buttonText = "Out of Range");

    return (
      <button className={withinRange ? "SignRegister active" : "SignRegister"} onClick={() => handleSignLog()}>
        {buttonText}
      </button>
    );
  }
}

SignRegister.propTypes = {
  handleLogUpdate: PropTypes.func
};

export default SignRegister;
