import React from "react";
import axios from "axios"
class LogIn extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    let target = e.target;
    let name = target.name;
    this.setState({ [name]: target.value });
  };


  handleSubmit = event => {
    event.preventDefault();
    const endpoint = "http://localhost:4000/api/auth/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log('RESPONSE', res.data);
        localStorage.setItem('jwt', res.data.token)
      })
      .catch(err => {
        console.error("login error", err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
            name="username"
          />

          <label>Password</label>
          <input
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="text"
            name="password"
          />
           <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
