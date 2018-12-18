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
      currentMountainData: []
    };
  }

  handleBackButton = () => {
    if (this.state.currentDisplay === "info") {
      this.setState({ currentDisplay: "start" });
    }
  };

  handleSelectButton = async currentMountain => {
    const selectedMountain = this.state.selectedMountain;
    const currentMountainData = await apiCalls.getMountain();

    await this.setState({
      currentMountain,
      currentDisplay: "info",
      currentMountainData
    });
  };

  render() {
    const { currentDisplay, currentMountain, currentMountainData } = this.state;
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
          />
        )}
      </div>
    );
  }
}

export default App;
