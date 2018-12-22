import React, { Component } from "react";
import SignRegister from '../SignRegister'
import PropTypes from "prop-types";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <button
          className="submit-btn"
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
        <SignRegister handleSignLog={this.props.handleSignLog} />
        <button className="sign-in-btn" onClick={this.props.handleSignIn}>SignIn/SignUp</button>
      </footer>
    );
  }
}

Footer.propTypes = {};

export default Footer;
