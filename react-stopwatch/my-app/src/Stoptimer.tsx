import { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import './Stoptimer.css';

export default function Stopwatch() {
  const [time, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null); // stores the timer

  useEffect(() => {
    // Start the timer and store the interval ID in the ref
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      // Stop the timer when paused.
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    // Clears the timer.
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  // Toggle play/pause icon.
  function toggleTimer() {
    setIsRunning((prev) => !prev); // Toggle running state
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
        <button onClick={toggleTimer} className="button">
          {isRunning ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
}
