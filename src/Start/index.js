import React, { Component } from "react";
import LocatingPopUp from "../LocatingPopUp";
import PropTypes from "prop-types";
import { sortMountainNames } from "../utilities/Data/mountain-data";
import "./Start.css";

class Start extends Component {
  render() {
    const mountainsNames = sortMountainNames();
    const mountainDropDownMenu = mountainsNames.map((name, index) => {
      return (
        <option value={name} key={index}>
          {name}
        </option>
      );
    });

    return (
      <div className="Start">
        {!Object.keys(this.props.currentLocation).length && <LocatingPopUp />}
        <div className="drop-down-controls">
          <select
            className="drop-down-menu"
            ref={input => (this.menu = input)}
            defaultValue={this.props.currentMountain}
          >
            {mountainDropDownMenu}
          </select>
          <button
            className="select-btn"
            onClick={() => this.props.handleSelectButton(this.menu.value)}
          >
            Select
          </button>
        </div>
      </div>
    );
  }
}

Start.propTypes = {
  handleSelect: PropTypes.func,
  currentMountain: PropTypes.string,
  handleLogUpdate: PropTypes.func,
  handleSignIn: PropTypes.func
};

export default Start;
