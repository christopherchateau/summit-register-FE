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
    return (
      <div className="App">
        {this.state.currentDisplay === "start" && <Start updateDisplay={this.updateDisplay} />}
        {this.state.currentDisplay === "info" && <Info mountainName={this.state.currentMountain}/>}
      </div>
    );
  }
}

export default App;
