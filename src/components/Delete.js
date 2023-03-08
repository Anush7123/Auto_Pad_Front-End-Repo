import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
    sno: ''
    };
  }

  handleSnodelete = (event) => {
    this.setState({ sno: event.target.value });
  };

  handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://127.0.0.1:8080/delete/${this.state.sno}`);
  };

  render() {
    return (
		<div className='register'>
      <body>
      <form onSubmit={this.handleDelete}>
      <br/><br/><h2>Delete Auto</h2><br/><br/>
        <input
          type="number"
		  placeholder='Enter Sno to delete'
          value={this.state.sno}
          onChange={this.handleSnodelete}
        /><br/><br/>

        <button  type="submit">
          Delete
        </button><br/><br/>
		<Link to="/">Go back</Link>
      </form></body></div>
    );
  }
}

export default Delete;