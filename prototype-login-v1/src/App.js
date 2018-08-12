import React, { Component } from 'react';
import $ from "jquery";
import './App.css';
//import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import fyr from './components/system/FireSys';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: {},
        }
    }

    componentDidMount(){
       this.authListener();
    }

    authListener(){
        fyr.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                this.setState({ user });
                console.log(user);
//                localStorage.setItem('user', user.uid);
            } else {
                // No user is signed in.
                this.setState({user: null});
                console.log('signed out')
//                localStorage.removeItem('user');
            }
        });
    }

    render() {
        return (
            <Router>
                <div>

                </div>
            </Router>
        );
    }
}

export default App;


