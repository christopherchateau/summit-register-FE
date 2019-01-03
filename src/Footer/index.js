import React, { Component } from "react";
import SignRegister from "../SignRegister";
import PropTypes from "prop-types";
import MyMountains from "../MyMountains";
import "./Footer.css";

class Footer extends Component {
  render() {
    const {
      handleSignLog,
      handleSignIn,
      currentDisplay,
      handleMyMountains,
      withinRange,
      handleSignOut,
      isSignedIn
    } = this.props;
    return (
      <footer className="Footer">
        {currentDisplay[0] !== "registerForm" &&
          currentDisplay[0] !== "start" && (
            <SignRegister
              handleSignLog={handleSignLog}
              withinRange={withinRange}
            />
          )}

        {isSignedIn === true && (
          <button className="sign-in-btn" onClick={handleMyMountains}>
            My Mountains
          </button>
        )}
        {isSignedIn === true && (
          <button className="sign-in-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        )}
        {this.props.isSignedIn === false && (
          <button className="sign-in-btn" onClick={handleSignIn}>
            SignIn/SignUp
          </button>
        )}
      </footer>
    );
  }
}

Footer.propTypes = {};

export default Footer;
