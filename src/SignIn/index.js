import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./SignIn.css";

firebase.initializeApp({
  apiKey: "AIzaSyCOPftNFUOFLFm0alfd8hswAh9kF-wojsc",
  authDomain: "summit-register-dad45.firebaseapp.com"
});

class SignIn extends Component {
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  render() {
    return (
      <div className="SignIn">
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}

export default SignIn;
