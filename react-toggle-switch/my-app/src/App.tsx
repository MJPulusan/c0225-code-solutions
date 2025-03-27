import { useState } from 'react';
import './ToggleSwitch.css';

import './App.css';

export default function ToggleSwitch() {
  const [isSwitchOn, setSwitchOn] = useState(false);

  function handleToggle() {
    setSwitchOn(!isSwitchOn);
  }

  return (
    <div
      className={`toggle-switch ${isSwitchOn ? 'on' : 'off'}`}
      onClick={handleToggle}>
      <div className="slider"></div>
      <span className="state-label">{isSwitchOn ? 'ON' : 'OFF'}</span>
    </div>
  );
}
