import React, { Component } from "react";
import LocatingPopUp from "../LocatingPopUp";
import PropTypes from "prop-types";
import { sortMountainNames } from "../utilities/Data/mountain-data";
import "./Start.css";

class Start extends Component {
  render() {
    const { currentMountain, currentLocation, handleSelectButton } = this.props;
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
        {!Object.keys(currentLocation).length && <LocatingPopUp />}
        <div className="drop-down-controls">
          <select
            className="drop-down-menu"
            ref={input => (this.menu = input)}
            defaultValue={currentMountain}
          >
            {mountainDropDownMenu}
          </select>
          <button
            className="select-btn"
            onClick={() => handleSelectButton(this.menu.value)}
          >
            Select
          </button>
        </div>
      </div>
    );
  }
}

Start.propTypes = {
  currentMountain: PropTypes.string,
  currentLocation: PropTypes.object,
  handleSelectButton: PropTypes.func
};

export default Start;
