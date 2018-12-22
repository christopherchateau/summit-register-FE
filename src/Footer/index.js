import React, { Component } from "react";
import SignRegister from '../SignRegister'
import PropTypes from "prop-types";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <SignRegister handleSignLog={this.props.handleSignLog} />
        <button onClick={this.props.handleSignIn}>SignIn/SignUp</button>
      </footer>
    );
  }
}

Footer.propTypes = {};

export default Footer;
