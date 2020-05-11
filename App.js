import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React app.</h1>
        <p>This is really Working.</p>
        <Person />
      </div>
    );
  }
}

export default App;
