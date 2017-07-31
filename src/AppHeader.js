import React from 'react';
import './AppHeader.css';

const AppHeader = 
  ({ breakLen, sessionLen, onChange, onReset }) => (
  <div className="AppHeader">

    <h2 className="AppName">
      Pomodoro Clock
    </h2>

    <button type="button" className="Input"
      onClick={onReset}>
      Reset
    </button>

    <div className="session-slider">
      <label htmlFor="session">
        Session Length: {sessionLen} min
      </label>
      <input type="range" className="Input"
        min="1" max="60" step="1" list="tickmarks"
        id="session" value={sessionLen} onChange={onChange}/>
    </div>

    <div className="break-slider">
      <label htmlFor="break">
        Break Length: {breakLen} min
      </label>
      <input type="range" className="Input"
        min="1" max="60" step="1" list="tickmarks"
        id="break" value={breakLen} onChange={onChange}/>
    </div>

  </div>
);

export default AppHeader;
