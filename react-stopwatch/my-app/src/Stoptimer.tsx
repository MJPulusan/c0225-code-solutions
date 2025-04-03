import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import './Stoptimer.css';

export default function Stopwatch() {
  const [time, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  function handlePlay() {
    const id = setInterval(() => setTimer((prevTime) => prevTime + 1), 1000);
    setIntervalId(id);
    setIsRunning(true);
  }

  function handlePause() {
    clearInterval(intervalId);
    setIntervalId(undefined);
    setIsRunning(false);
  }

  // Reset the timer (circle).
  function handleCircleClick() {
    if (!isRunning) {
      setTimer(0); // Reset time when paused
    }
  }

  return (
    <div className="container">
      <div className="stopwatch">
        {/* Stopwatch */}
        <div className="circle" onClick={handleCircleClick}>
          <span className="time">{time}</span>
        </div>

        {/* Play/Pause button */}
        <button className="button">
          {isRunning ? (
            <FaPause onClick={handlePause} />
          ) : (
            <FaPlay onClick={handlePlay} />
          )}
        </button>
      </div>
    </div>
  );
}
