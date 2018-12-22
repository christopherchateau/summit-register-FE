import React, { Component } from "react";
import logo from "../utilities/Images/summit-2.png";
import PropTypes from "prop-types";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <button className="back-btn" onClick={this.props.handleBackButton}>
          Back
        </button>
        <h1 className="main-title">Summit Register</h1>
        <img className="logo" alt="logo" src={logo} />
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
