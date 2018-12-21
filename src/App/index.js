import React, { Component } from "react";
import Start from "../Start";
import Info from "../Info";
import Log from "../Log";
import LoadingScreen from "../LoadingScreen";
import RegisterForm from "../RegisterForm";
import { mountainData } from "../utilities/Data/mountain-data";
import * as apiCalls from "../utilities/helper/apiCalls";
import { generateTimeStamp } from "../utilities/helper/timeStamp";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: ["start"],
      currentMountain: "",
      currentMountainData: {},
      currentMountainLog: [],
      currentLocation: {}
    };
  }

  componentDidMount = () => {
    this.getLocation();
  };

  componentDidUpdate = () => {
    if (Object.keys(this.state.currentLocation).length) {
      return;
    } else {
      console.log("unable to track location");
    }
  };

  handleBackButton = () => {
    let currentDisplay = this.state.currentDisplay[0];
    let updatedDisplay = this.state.currentDisplay
      .slice(1)
      .filter(
        screen => screen !== "loadingScreen" && screen !== "registerForm"
      );
    if (updatedDisplay[0] === currentDisplay) {
      updatedDisplay = updatedDisplay.slice(1);
    }
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

  handleSignLog = () => {
    this.updateCurrentDisplayLog("registerForm");
  };

  handleLogUpdate = async logEntry => {
    const timeStamp = generateTimeStamp();
    this.updateCurrentDisplayLog("loadingScreen");
    const response = await apiCalls.postToLog(
      this.state.currentMountainData.id,
      logEntry,
      timeStamp
    );
    if (response) {
      await this.setState({ currentMountainLog: response });
      await this.updateCurrentDisplayLog("log");
    }
  };

  updateCurrentDisplayLog = display => {
    const updatedDisplay = this.state.currentDisplay;
    this.setState({ currentDisplay: [display, ...updatedDisplay] });
  };

  getLocation = () => {
    return navigator.geolocation.watchPosition(this.showPosition);
  };

  showPosition = position => {
    const currentLocation = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };
    this.setState({ currentLocation });
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
            handleSignLog={this.handleSignLog}
          />
        )}
        {currentDisplay[0] === "info" && (
          <Info
            handleBackButton={this.handleBackButton}
            currentMountainData={currentMountainData}
            handleViewLogButton={this.handleViewLogButton}
            handleLogUpdate={this.handleLogUpdate}
            handleSignLog={this.handleSignLog}
            currentLocation={this.state.currentLocation}
          />
        )}
        {currentDisplay[0] === "log" && (
          <Log
            currentMountainLog={currentMountainLog}
            handleBackButton={this.handleBackButton}
            handleLogUpdate={this.handleLogUpdate}
            handleSignLog={this.handleSignLog}
          />
        )}
        {currentDisplay[0] === "registerForm" && (
          <RegisterForm
            handleBackButton={this.handleBackButton}
            handleLogUpdate={this.handleLogUpdate}
          />
        )}
        {currentDisplay[0] === "loadingScreen" && <LoadingScreen />}
      </div>
    );
  }
}

export default App;
