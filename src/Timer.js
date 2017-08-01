import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  componentDidMount() {
    this.intervalID = setInterval(
      () => clockTick(this.props),
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

const clockTick = ({ timer, pause, decTimer, sessionChange }) => {
  if (timer < 1) {
    sessionChange();
  } else if (!pause) {
    decTimer();
  }
}

const formatSeconds = sec => {
  let minutes = parseInt(sec / 60, 10);
  let seconds = sec % 60;
  if (seconds < 10) 
    seconds = "".concat('0', seconds.toString());
  return "".concat(minutes, ':', seconds);
}

const percentage = (session, timer, breakTime, sessionTime) => {
  if (session) {
    return 100 - parseInt(timer / sessionTime * 100, 10);
  } else {
    return parseInt(timer / breakTime * 100, 10);
  }
}
