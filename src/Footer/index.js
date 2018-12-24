import React, { Component } from "react";
import SignRegister from "../SignRegister";
import PropTypes from "prop-types";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        {this.props.currentDisplay[0] !== "registerForm" && (
          <SignRegister handleSignLog={this.props.handleSignLog} />
        )}
        {this.props.isSignedIn === true && (
          <MyMountains

          <button className="sign-in-btn" onClick={this.props.handleSignOut}>
          Sign Out
          </button>
        )}
        {this.props.isSignedIn === false && (
          <button className="sign-in-btn" onClick={this.props.handleSignIn}>
            SignIn/SignUp
          </button>
        )}
      </footer>
    );
  }
}

Footer.propTypes = {};

export default Footer;
