import React from "react";
import axios from "axios";



class UserList extends React.Component {
    state = {
        users: [],
      };

     



  render() {
    return (
      <div>
        <h2>Our Users</h2>

        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const endpoint = "http://localhost:4000/api/users";
    const token = localStorage.getItem('jwt')
    const options = {
headers:{
    authorization:token
}
    }
      axios.get(endpoint, options).then(res => {
          console.log('users',res.data)
            this.setState({ users: res.data })
        }) 
        .catch(error => console.log('users error', error.response)) ; 
    } 
    logout = () => {
      localStorage.removeItem('jwt');
  
      this.props.history.push('/login');
    };   

}
 export default UserList;