import React, { Component } from "react";
import SignRegister from "../SignRegister";
import PropTypes from "prop-types";
import MyMountains from '../MyMountains'
import "./Footer.css";

class Footer extends Component {
  render() {
    const { handleSignLog, handleSignIn, currentDisplay } = this.props;
    return (
      <footer className="Footer">
        {this.props.currentDisplay[0] !== "registerForm" && (
          <SignRegister handleSignLog={this.props.handleSignLog} withinRange={this.props.withinRange} />
        )}

        {this.props.isSignedIn === true && (
          <div>
        
          <button className="sign-in-btn" onClick={this.props.handleMyMountains}>
          My Mountains
          </button>

          <button className="sign-in-btn" onClick={this.props.handleSignOut}>
          Sign Out
          </button>
          </div>
          
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
