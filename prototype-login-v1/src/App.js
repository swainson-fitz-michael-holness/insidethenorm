import React, { Component } from 'react';
import $ from "jquery";
import './App.css';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
        <Login />
    );
  }
}

export default App;

//Junk
//<label className="label" for="password" >password:</label>
//<label className="label-top" for="user">email:</label>
