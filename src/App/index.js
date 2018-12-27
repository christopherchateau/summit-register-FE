import React, { Component } from "react";
import firebase from "firebase";
import Header from "../Header";
import Start from "../Start";
import Info from "../Info";
import Log from "../Log";
import SignIn from "../SignIn";
import Footer from "../Footer";
import LoadingScreen from "../LoadingScreen";
import RegisterForm from "../RegisterForm";
import { mountainData } from "../utilities/Data/mountain-data";
import * as apiCalls from "../utilities/helper/apiCalls";
import { generateTimeStamp } from "../utilities/helper/timeStamp";
import "./App.css";
import { access } from "fs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: ["start"],
      currentMountain: "",
      currentMountainData: {},
      currentMountainLog: [],
      currentLocation: {},
      peakLocations: [],
      withinRange: false,
      isSignedIn: false
    };
  }

  componentDidMount = async () => {
    await this.getLocation();
    const peakLocations = await mountainData.data.reduce((acc, mountain) => {
      const location = mountain.attributes.summit.split(",");
      acc.push({
        name: mountain.attributes.name,
        location: +location[0] + Math.abs(location[1])
      });
      return acc;
    }, []);
    await this.setState({ peakLocations });
  };

  componentDidUpdate = () => {
    if (Object.keys(this.state.currentLocation).length) {
      this.validateLocation(this.state.currentLocation.sum);
    }
  };

  validateLocation = userLocation => {
    // const { peakLocations } = this.state;
    // const peakProximities = peakLocations.map(location => {
    //   const proximity = userLocation - location
    //   return {};
    //   return difference < 0.003 && difference > -0.003;
    // });
    //console.log(currentMountain);
    // currentMountain
    //   ? (this.state.withinRange = true)
    //   : (this.state.withinRange = false);
  };

  validateSignIn = boolean => {
    if (boolean === true) {
      this.setState({
        isSignedIn: true
      });
    }
    this.updateCurrentDisplayLog("start");
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
    const currentMountainLog = await apiCalls.getMountain(
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

  handleSignIn = () => {
    this.updateCurrentDisplayLog("signIn");
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
      longitude: Math.abs(position.coords.longitude),
      latitude: position.coords.latitude,
      sum: position.coords.latitude + Math.abs(position.coords.longitude)
    };
    this.setState({ currentLocation });
  };

  render() {
    const {
      currentDisplay,
      currentMountain,
      currentMountainData,
      currentMountainLog,
      currentLocation,
      isSignedIn
    } = this.state;

    return (
      <div className="App">
        <Header
          currentDisplay={currentDisplay[0]}
          currentMountainData={currentMountainData}
          handleBackButton={this.handleBackButton}
        />

        {currentDisplay[0] === "start" && (
          <Start
            currentMountain={currentMountain}
            currentLocation={currentLocation}
            handleSelectButton={this.handleSelectButton}
            handleSignIn={this.handleSignIn}
          />
        )}
        {currentDisplay[0] === "info" && (
          <Info
            currentMountainData={currentMountainData}
            handleViewLogButton={this.handleViewLogButton}
            currentLocation={this.state.currentLocation}
          />
        )}
        {currentDisplay[0] === "log" && (
          <Log currentMountainLog={currentMountainLog} />
        )}
        {currentDisplay[0] === "registerForm" && (
          <RegisterForm handleLogUpdate={this.handleLogUpdate} />
        )}
        {currentDisplay[0] === "loadingScreen" && (
          <LoadingScreen className="Main" />
        )}
        {this.state.currentDisplay[0] === "signIn" && (
          <SignIn validateSignIn={this.validateSignIn} />
          // <StyledFirebaseAuth
          //   uiConfig={this.uiConfig}
          //   firebaseAuth={firebase.auth()}
          // />
        )}
        <Footer
          currentDisplay={currentDisplay}
          currentLocation={currentLocation.sum}
          handleSignIn={this.handleSignIn}
          handleSignLog={this.handleSignLog}
        />
      </div>
    );
  }
}

export default App;
