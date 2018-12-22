import React, { Component } from "react";
import SignRegister from "../SignRegister";
import PropTypes from "prop-types";
import "./Footer.css";

class Footer extends Component {
  render() {
    let buttonDisplay;
    if (this.props.currentDisplay[0] === "registerForm") {
      buttonDisplay = (
        <button
          className="submit-btn"
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      );
    } else {
      buttonDisplay = <SignRegister handleSignLog={this.props.handleSignLog} />;
    }
    return (
      <footer className="Footer">
        {buttonDisplay}
        <button className="sign-in-btn" onClick={this.props.handleSignIn}>
          SignIn/SignUp
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {};

export default Footer;
