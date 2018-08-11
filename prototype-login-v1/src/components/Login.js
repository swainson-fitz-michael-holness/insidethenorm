import React, { Component } from 'react';
import $ from "jquery";
import '../App.css';


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
                    <button  type="button" class="btn btn-primary">
                    Submit
                    </button>
                </div>

            </div>
        </form>

    );
  }
}

export default Login;
