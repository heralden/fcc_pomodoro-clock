import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.props.pause || this.props.decTimer(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className="Timer"
        onClick={this.props.onClick}>
        <h1 className="Timer-clock">
          {formatSeconds(this.props.timer)}
        </h1>
        <TimerBackground 
          perc={percentage(
            this.props.session,
            this.props.timer,
            this.props.breakTime,
            this.props.sessionTime
          )}
        />
      </div>
    );
  }
}

export default Timer;

const TimerBackground = ({ perc }) => (
  <ul className="flex-container">
    {Array(perc).fill('').map(e => 
      <FlexItem />
    )}
  </ul>
);

const FlexItem = props => (
  <li className="flex-item"/>
);

const formatSeconds = sec => {
  let minutes = parseInt(sec / 60, 10);
  let seconds = sec % 60;
  if (seconds < 10) 
    seconds = "".concat('0', seconds.toString());
  return "".concat(minutes, ':', seconds);
}

const percentage = (session, timer, breakTime, sessionTime) => {
  let targetTime = breakTime;
  if (session)
    targetTime = sessionTime;

  return 100 - parseInt(timer / targetTime * 100, 10);
}
