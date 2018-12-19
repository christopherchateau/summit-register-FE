import React, { Component } from 'react';
import logo from "../utilities/images/logo.png";
import BackButton from "../BackButton";
import './Log.css';

class Log extends Component {
  render() {
    const { name, hometown, comments } = this.props.currentMountainLog
    return (
      <div className="Log">
        <header className="header">
          <BackButton handleBackButton={this.props.handleBackButton} />
          <img className="logo-small" alt="logo" src={logo} />
        </header>
        <h1>{name}</h1>
        <h3>Hometown: {hometown}</h3>
        <h3>Comments: {comments}</h3>
      </div>
    );
  }
}

export default Log;