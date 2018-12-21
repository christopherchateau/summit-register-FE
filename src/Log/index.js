import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "../utilities/Images/logo.png";
import SignRegister from "../SignRegister";
import "./Log.css";

class Log extends Component {
  render() {
    const { name } = this.props.currentMountainLog;
    let singleLog = this.props.currentMountainLog.reverse().map(log => {
      return (
        <div className="comment" key={log.id}>
          <h4>Name: {log.attributes.name}</h4>
          <h4>Hometown: {log.attributes.hometown}</h4>
          <h4>Comments: {log.attributes.comments} </h4>
          <h4>Date: {log.attributes.date}</h4>
        </div>
      );
    });

    if (!singleLog.length) {
      singleLog = (
        <section className="empty-log-msg">
          <h2>No entries found</h2>
        </section>
      );
    }

    return (
      <div className="Log">
        <header className="header">
          <button className="back-btn" onClick={this.props.handleBackButton}>
            Back
          </button>
          <img className="logo-small" alt="logo" src={logo} />
        </header>
        <h1>{name}</h1>
        <section className="comment-container">{singleLog}</section>
        <SignRegister handleSignLog={this.props.handleSignLog} />
      </div>
    );
  }
}

Log.propTypes = {
  handleBackButton: PropTypes.func,
  currentMountainLog: PropTypes.array,
  handleLogUpdate: PropTypes.func
};

export default Log;
