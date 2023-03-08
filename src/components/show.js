import axios from "axios";
import { Link } from 'react-router-dom';
import React, { Component } from "react";

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <div className="register">
        
      <table border={1}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Price</th>
          <th>Top_Speed</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.sno}</td>
            <td>{user.brand}</td>
            <td>{user.model}</td>
            <td>{user.price}</td>
            <td>{user.top_speed}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
    <Link to="/">Go back</Link>
    </div>
    );

  }}
  
export default Showdata;