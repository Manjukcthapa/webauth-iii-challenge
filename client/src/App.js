import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import LogIn from "./auth/LogIn.js";
import UserList from './Users/User.js'
import "./App.css";

class App extends Component {
 
  render() {
    return (
      <div>
        <nav>
        <NavLink to="/login">LogIn</NavLink>
        <NavLink to="/user">UserList</NavLink>
        <button onClick={this.logout}>Logout</button>
        </nav>
        <div>
        <Route path="/login" component={LogIn} />
        <Route path="/user" component={UserList} />
        </div>
        {/* <LogIn /> */}
      </div>
    );
  }
}

export default App;
