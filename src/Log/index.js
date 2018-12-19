import React, { Component } from 'react';
import logo from "../utilities/images/logo.png";
import BackButton from "../BackButton";
import './Log.css';

class Log extends Component {
  render() {
    const { name, hometown, comments } = this.props.currentMountainLog
    let singleLog = this.props.currentMountainLog.map( log => {
      return <li>name: {log.attributes.name}, hometown:{log.attributes.hometown},Date:{log.attributes.date}</li>
    })

    return (
      <div className="Log">
        <header className="header">
          <BackButton handleBackButton={this.props.handleBackButton} />
          <img className="logo-small" alt="logo" src={logo} />
        </header>
        <h1>{name}</h1>
        <ol>{singleLog}</ol>
      </div>
    );
  }
}

export default Log;