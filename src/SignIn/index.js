import React, { Component } from "react";
import firebase from 'firebase'
import PropTypes from "prop-types";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import logo from "../utilities/Images/logo.png";
import "./SignIn.css";

firebase.initializeApp({
  apiKey: 'AIzaSyCOPftNFUOFLFm0alfd8hswAh9kF-wojsc',
  authDomain: 'summit-register-dad45.firebaseapp.com'
})

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false
    }
  }

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }


  componentDidMount = () => {
    firebase.auth().onAuthStateChanged( user => {
      this.setState({isSignedIn: !!user})
      if(user){
        this.props.validateSignIn(user.I)
      }
    })
    
  };



  render() {
    return (
      <div className="SignIn">
        <header className="header">
          <button className="back-btn" onClick={this.props.handleBackButton}>
            Back
          </button>
          <img className="logo-small" alt="logo" src={logo} />
        </header>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}

SignIn.propTypes = {
  handleBackButton: PropTypes.func,
  validateSignIn: PropTypes.func
};

export default SignIn;

//===This code gives you back the Token for the current User to send to the backend when we get to the iteration ===//

// console.log(firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     user.getIdToken().then(function(data) {
//       console.log(data)
//     });
//   }
// }))
