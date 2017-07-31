import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import Timer from './Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      breakLen: 5,
      sessionLen: 25,
      breakTime: 5*60,
      sessionTime: 25*60,
      timer: 25*60,
      pause: true,
      session: true
    };
  }

  handleChange = e => {
    let target = e.target.id.concat("Len");
    this.setState({
      [target]: e.target.value
    });
  }
  handleClick = e => {
    this.setState(prevState => ({
      pause: !prevState.pause
    }));
  }
  handleReset = () => {
    this.setState(prevState => ({
      pause: true,
      breakTime: prevState.breakLen * 60,
      sessionTime: prevState.sessionLen * 60,
      timer: prevState.sessionLen * 60
    }));
  }
  decTimer = () => {
    this.setState(prevState => ({
      timer: prevState.timer - 1
    }));
  }

  render() {
    return (
      <div className="App">
        <AppHeader 
          breakLen={this.state.breakLen}
          sessionLen={this.state.sessionLen}
          onChange={this.handleChange}
          onReset={this.handleReset}
        />
        <Timer 
          breakTime={this.state.breakTime}
          sessionTime={this.state.sessionTime}
          pause={this.state.pause}
          timer={this.state.timer}
          decTimer={this.decTimer}
          onClick={this.handleClick}
          session={this.state.session}
        />
      </div>
    );
  }
}

export default App;
