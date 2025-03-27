import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    const newCount = count + 1;
    setCount(newCount);
  }

  let color = 'purple';

  if (count <= 3) {
    color = 'purple';
  } else if (count <= 6) {
    color = 'blue';
  } else if (count <= 9) {
    color = 'red';
  } else if (count <= 12) {
    color = 'orange';
  } else if (count <= 15) {
    color = 'yellow';
  } else {
    color = 'white';
  }

  return (
    <>
      <button
        onClick={handleButtonClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: 'black',
          backgroundColor: color,
          border: '5px, solid',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>
        Hot Button
      </button>
      <p>Clicks: {count}</p>
    </>
  );
}
