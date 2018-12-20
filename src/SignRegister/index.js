import React, { Component } from "react";
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

export default SignRegister;