import React, { Component } from 'react';
import $ from "jquery";
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import fire from './components/system/FireSys';


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
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                this.setState({ user });
                console.log(user);
//                localStorage.setItem('user', user.uid);
            } else {
                // No user is signed in.
                this.setState({ user: null });
                console.log('signed out')
//                localStorage.removeItem('user');
            }
        });
    }

    render() {
        return (
            <div className='App'>
               { this.state.user ? (<Home/>) : (<Login/>) }
            </div>
        );
    }
}

export default App;


