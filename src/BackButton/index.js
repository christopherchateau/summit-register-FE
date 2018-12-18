import React, { Component } from 'react';
import './BackButton.css';

class BackButton extends Component {
  render() {
    return (
      <div className="BackButton">
        <button className="back-btn" onClick={this.props.handleBackButton}>Back</button>
      </div>
    );
  }
}

export default BackButton;