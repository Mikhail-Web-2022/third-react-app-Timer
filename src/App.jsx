import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [stopwatch, setStopwatch] = useState(0);

  const timeCounter = () => {
    const timeLimit = 1000;
    let currentTime = 0;

    const intervalId = setInterval(() => {
      currentTime++;
      setStopwatch(currentTime);

      if (currentTime === timeLimit) {
        clearInterval(intervalId);
      }
    }, 1000);
  };

  useEffect(() => {
    timeCounter();
  }, []);

  return (
    <div>
      <p>{stopwatch}</p>
    </div>
  );
};

export default App;
