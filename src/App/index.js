import React, { Component } from "react";
import Start from "../Start";
import Info from "../Info";
import Log from "../Log";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentMountain: "",
      currentDisplay: "start"
    };
  }

  handleBackButton = () => {
    if (this.state.currentDisplay === 'info') {
      this.setState({ currentDisplay: 'start'})
    }
    //document.querySelector('.drop-down-menu').value
  };

  updateDisplay = currentMountain => {
    const selectedMountain = this.state.selectedMountain;
    this.setState({ currentMountain, currentDisplay: "info" });
  };

  render() {
    const { currentDisplay, currentMountain } = this.state;
    return (
      <div className="App">
        {currentDisplay === "start" && (
          <Start currentMountain={currentMountain} updateDisplay={this.updateDisplay} />
        )}
        {currentDisplay === "info" && (
          <Info
            handleBackButton={this.handleBackButton}
            mountainName={currentMountain}
          />
        )}
      </div>
    );
  }
}

export default App;
