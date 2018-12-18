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

  updateDisplay = currentMountain => {
    this.setState({ currentMountain, currentDisplay: "info" });
  };

  render() {
    const { currentDisplay, currentMountain } = this.state
    return (
      <div className="App">
        {currentDisplay === "start" && <Start updateDisplay={this.updateDisplay} />}
        {currentDisplay === "info" && <Info mountainName={currentMountain}/>}
      </div>
    );
  }
}

export default App;
