import React from 'react';
import './Timer.css';

const Timer = props => (
  <div className="Timer">
    <h1 className="Timer-clock">25:00</h1>
    <TimerBackground />
  </div>
);

export default Timer;

const TimerBackground = props => (
  <ul className="flex-container">
    {Array(23).fill('').map(e => 
      <FlexItem />
    )}
  </ul>
);

const FlexItem = props => (
  <li className="flex-item"/>
);
