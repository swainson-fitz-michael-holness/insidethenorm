import React, { Component } from 'react';
import $ from "jquery";
import '../App.css';
import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCP4EMBCFQFw2VpqGIpTC_QRSbTi8DNyhw",
    authDomain: "project-manager-7e24a.firebaseapp.com",
    databaseURL: "https://project-manager-7e24a.firebaseio.com",
    projectId: "project-manager-7e24a",
    storageBucket: "project-manager-7e24a.appspot.com",
    messagingSenderId: "260315914640"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

      alert('working');
  } else {
    // No user is signed in.
      alert('signed out')
  }
});

const login = () => {
    const userEmail = document.getElementById('user').value;
    const userPassword = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorCode+' :: '+ errorMessage);
        // ...
    });
}

class Login extends Component {
  render() {
    return (
        <form>

            <div className="form-group login-box border-primary rounded shadow-lg">
                <div>
                    <input type="email" id="user" placeholder="Email address..." className="form-control label"/>
                </div>

                <div>
                    <input type="password" id="password" placeholder="password..." className="form-control label"/>
                </div>

                <div className="login-btn">
                    <button onClick={login} type="button" class="btn btn-block btn-danger">
                    Submit
                    </button>
                </div>

            </div>
        </form>

    );
  }
}

export default Login;
