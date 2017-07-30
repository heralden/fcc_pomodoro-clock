import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Timer />
      </div>
    );
  }
}

export default App;
