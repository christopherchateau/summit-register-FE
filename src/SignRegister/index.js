import React, { Component } from "react";
import PropTypes from 'prop-types'
import "./SignRegister.css";

class SignRegister extends Component {
  render() {
    return (
      <button 
      className="SignRegister"
      onClick={() => this.props.handleLogUpdate()}
      >
        Sign Register
      </button>
    );
  }
}

SignRegister.propTypes = {
  handleLogUpdate: PropTypes.func

}

export default SignRegister;