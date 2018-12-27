import React, { Component } from "react";
import SignRegister from "../SignRegister";
import PropTypes from "prop-types";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        {this.props.currentDisplay[0] !== "registerForm" &&
          this.props.currentDisplay[0] !== "start" && (
            <SignRegister handleSignLog={this.props.handleSignLog} />
          )}
        <button className="sign-in-btn" onClick={this.props.handleSignIn}>
          SignIn/SignUp
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {};

export default Footer;
