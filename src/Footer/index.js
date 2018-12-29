import React, { Component } from "react";
import SignRegister from "../SignRegister";
import PropTypes from "prop-types";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { handleSignLog, handleSignIn, currentDisplay } = this.props;
    return (
      <footer className="Footer">
        {currentDisplay[0] !== "registerForm" &&
          currentDisplay[0] !== "start" && (
            <SignRegister
              withinRange={this.props.withinRange}
              handleSignLog={handleSignLog}
            />
          )}
        <button className="sign-in-btn" onClick={handleSignIn}>
          SignIn
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {};

export default Footer;
