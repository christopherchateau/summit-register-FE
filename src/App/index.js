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
  render() {
    return (
      <div className="App">
        <Start />
      </div>
    );
  }
}

export default App;
