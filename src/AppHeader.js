import React from 'react';
import './AppHeader.css';

const AppHeader = props => (
  <div className="AppHeader">

    <h2 className="AppName">
      Pomodoro Clock
    </h2>

    <button type="button" className="Input">
      Reset
    </button>
    <button type="button" className="Input">
      Pause
    </button>

    <div className="session-slider">
      <label htmlFor="session">Session Length</label>
      <input type="range" className="Input"
        min="1" max="60" step="1" list="tickmarks"
        id="session"/>
    </div>

    <div className="break-slider">
      <label htmlFor="break">Break Length</label>
      <input type="range" className="Input"
        min="1" max="60" step="1" list="tickmarks"
        id="break"/>
    </div>

  </div>
);

export default AppHeader;
