import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Crud from './components/Crud';
import Create1 from './components/Create1';
import Update from './components/Update';
import Delete from './components/Delete';
import Showdata from './components/show';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Crud} />
        <Route path="/create1" component={Create1} />
        <Route path="/update" component={Update} />
        <Route path="/delete" component={Delete} />
        <Route path="/show" component={Showdata} />
      </div>
    );
  }
}

export default App;
