import React, { Component } from "react";
import Start from "../Start";
import Info from "../Info";
import Log from "../Log";
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
      const currentMountainLog = await apiCalls.getMountainLog()
      await this.setState({ 
        currentDisplay: 'log',
        currentMountainLog,
    });
  }

  handleSelectButton = async currentMountain => {
    const currentMountainData = await apiCalls.getMountain();

    await this.setState({
      currentMountain,
      currentDisplay: "info",
      currentMountainData
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
