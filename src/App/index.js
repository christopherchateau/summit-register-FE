import React, { Component } from "react";
import firebase from "firebase";
import Header from "../Header";
import Start from "../Start";
import Info from "../Info";
import Log from "../Log";
import SignIn from "../SignIn";
import Footer from "../Footer";
import MyMountains from '../MyMountains';
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
      currentMountainWeather: {},
      currentLocation: {},
      isSignedIn: false,
      userData: {},
      withinRange: false,
    };
  }

  componentDidMount = async () => {
    await this.getLocation();
  };


  componentDidUpdate = () => {
   this.checkUser()
  }

  validateLocation = userLocation => {
    const peakLocation = this.retrievePeakLocation(this.state.currentMountain);
    const latProximity = userLocation.latitude - peakLocation[0];
    const longProximity = userLocation.longitude - peakLocation[1];

    this.checkProximity(latProximity) && this.checkProximity(longProximity)
      ? this.setState({ withinRange: true })
      : this.setState({ withinRange: false });
  };

  retrievePeakLocation = () => {
    return this.state.currentMountainData.attributes.summit.split(",");
  };


  validateSignIn = boolean => {
    if (boolean === true) {
      this.setState({
        isSignedIn: true
      });
    }
    this.updateCurrentDisplayLog("start");
  };

  handleMyMountains = () => {
    this.updateCurrentDisplayLog("myMountains")
  }

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
    const currentMountainData = await apiCalls.getMountain(mountain.id);
    await this.setState({
      currentMountain,
      currentMountainData: currentMountainData.data
    });
    await this.validateLocation(this.state.currentLocation);
    await this.getWeatherData();
    await this.updateCurrentDisplayLog("info");
  };

  getWeatherData = async () => {
    const peakLocation = await this.retrievePeakLocation();
    const currentMountainWeather = await apiCalls.getWeather(peakLocation);
    await this.setState({ currentMountainWeather });
  };

  handleSignLog = () => {
    this.validateLocation(this.state.currentLocation);
    if (this.state.withinRange) {
      this.updateCurrentDisplayLog("registerForm");
    }
  };

  handleSignIn = () => {
    this.updateCurrentDisplayLog("signIn");
  };

  handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      this.setState({
        isSignedIn: false,
        userData: {}
      })
    }).catch(function(error) {
      throw new Error(error)
    });
  }

  checkUser = () => {

    if( this.state.isSignedIn && !Object.keys(this.state.userData).length) {
      // var name, email, photoUrl, uid, emailVerified;
      var data = apiCalls.getCurrentUser();
  
  
      let userData = {
        name: data.displayName,
        email: data.email,
        photoUrl: data.photoURL,
        emailVerified: data.emailVerified,
        uid: data.uid
      } 
      console.log('Name:', data.displayName,"Email:", data.email,"UID:", data.uid)
      this.setState({ userData })
    }

  }

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
    const displayHistory = this.state.currentDisplay;
    this.setState({ currentDisplay: [display, ...displayHistory] });
  };

  getLocation = () => {
    return navigator.geolocation.watchPosition(this.showPosition);
  };

  checkProximity = num => {
    return num < 0.005 && num > -0.005;
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
      currentMountainLog,
      currentMountainWeather,
      currentLocation,
      withinRange,
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
            currentLocation={this.state.currentLocation}
            currentMountainData={currentMountainData}
            currentMountainWeather={currentMountainWeather}
            handleViewLogButton={this.handleViewLogButton}
            withinRange={withinRange}
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
        )}
        {this.state.currentDisplay[0] === "myMountains" && (
          <MyMountains validateSignIn={this.validateSignIn} />
        )}
        <Footer
          currentDisplay={currentDisplay}
          handleSignIn={this.handleSignIn}
          handleSignOut={this.handleSignOut}
          handleLogUpdate={this.handleLogUpdate}
          handleSignLog={this.handleSignLog}
          handleMyMountains={this.handleMyMountains}
          isSignedIn={isSignedIn}
          withinRange={withinRange}
        />
      </div>
    );
  }
}

export default App;
