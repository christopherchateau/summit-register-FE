import React, { Component } from "react";
import Start from "../Start";
import Info from "../Info";
import Log from "../Log";
import { mountainData } from "../utilities/data/mountain-data";
import * as apiCalls from "../utilities/helper/apiCalls";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: "start",
      currentMountain: "",
      currentMountainData: [],
      currentMountainLog: []
    };
  }

  handleBackButton = () => {
    if (this.state.currentDisplay === "info") {
      this.setState({ currentDisplay: "start" });
    }
    if ( this.state.currentDisplay === 'log') {
      this.setState({ currentDisplay: 'info'})
    }
  };

  handleViewLogButton = async () => {
    console.log(this.state.currentMountainData.id)
      const currentMountainLog = await apiCalls.getMountainLog(this.state.currentMountainData.id)
      await this.setState({ 
        currentDisplay: 'log',
        currentMountainLog: currentMountainLog.data.attributes.registries.data
    });
  }

  handleSelectButton = async currentMountain => {
    const mountain = mountainData.data.find(mountain => {
      return mountain.attributes.name === currentMountain 
    })
    await console.log(mountain.id)
    let currentMountainData = await apiCalls.getMountain(mountain.id);

    await this.setState({
      currentMountain,
      currentDisplay: "info",
      currentMountainData: currentMountainData.data
    });
  };

  render() {
    const { currentDisplay, currentMountain, currentMountainData, currentMountainLog } = this.state;
    return (
      <div className="App">
        {currentDisplay === "start" && (
          <Start
            currentMountain={currentMountain}
            handleSelectButton={this.handleSelectButton}
          />
        )}
        {currentDisplay === "info" && (
          <Info
            handleBackButton={this.handleBackButton}
            currentMountainData={currentMountainData}
            handleViewLogButton={this.handleViewLogButton}
            />
            )}
        {currentDisplay === "log" && (
          <Log
          currentMountainLog={currentMountainLog}
          handleBackButton={this.handleBackButton}
          />
        )}
      </div>
    );
  }
}

export default App;
