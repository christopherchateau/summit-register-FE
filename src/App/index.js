import React, { Component } from "react";
import Start from "../Start";
import Info from "../Info";
import Log from "../Log";
import RegisterForm from "../RegisterForm";
import { mountainData } from "../utilities/data/mountain-data";
import * as apiCalls from "../utilities/helper/apiCalls";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: ["start"],
      currentMountain: "",
      currentMountainData: [],
      currentMountainLog: []
    };
  }

  handleBackButton = () => {
    let updatedDisplay = this.state.currentDisplay.slice(1);
    this.setState({ currentDisplay: updatedDisplay });
  };

  handleViewLogButton = async () => {
    const currentMountainLog = await apiCalls.getMountainLog(
      this.state.currentMountainData.id
    );
    await this.setState({
      currentMountainLog: currentMountainLog.data.attributes.registries.data
    });
    this.updateCurrentDisplayLog("log");
  };

  handleSelectButton = async currentMountain => {
    const mountain = mountainData.data.find(mountain => {
      return mountain.attributes.name === currentMountain;
    });
    let currentMountainData = await apiCalls.getMountain(mountain.id);
    await this.setState({
      currentMountain,
      currentMountainData: currentMountainData.data
    });
    await this.updateCurrentDisplayLog("info");
  };

  handleLogUpdate = currentMountainLog => {
    this.updateCurrentDisplayLog("registerForm");
  };

  updateCurrentDisplayLog = display => {
    const updatedDisplay = this.state.currentDisplay;
    this.setState({ currentDisplay: [display, ...updatedDisplay] });
  };

  render() {
    const {
      currentDisplay,
      currentMountain,
      currentMountainData,
      currentMountainLog
    } = this.state;
    return (
      <div className="App">
        {currentDisplay[0] === "start" && (
          <Start
            currentMountain={currentMountain}
            handleSelectButton={this.handleSelectButton}
            handleLogUpdate={this.handleLogUpdate}
          />
        )}
        {currentDisplay[0] === "info" && (
          <Info
            handleBackButton={this.handleBackButton}
            currentMountainData={currentMountainData}
            handleViewLogButton={this.handleViewLogButton}
            handleLogUpdate={this.handleLogUpdate}
          />
        )}
        {currentDisplay[0] === "log" && (
          <Log
            currentMountainLog={currentMountainLog}
            handleBackButton={this.handleBackButton}
            handleLogUpdate={this.handleLogUpdate}
          />
        )}
        {currentDisplay[0] === "registerForm" && (
          <RegisterForm
            //currentDisplay={currentDisplay}
            handleBackButton={this.handleBackButton}
            handleLogUpdate={this.handleLogUpdate}
          />
        )}
      </div>
    );
  }
}

export default App;
