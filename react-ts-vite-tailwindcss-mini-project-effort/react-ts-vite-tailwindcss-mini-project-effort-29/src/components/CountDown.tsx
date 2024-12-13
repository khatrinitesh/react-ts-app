import React, { useState } from 'react';
import { useTimerStore } from '../store/store';

const CountDown = () => {
    const { timeLeft, isActive, startTimer, stopTimer, resetTimer } = useTimerStore((state) => state);
  const [inputTime, setInputTime] = useState<number>(0);

  const handleStart = () => {
    if (inputTime > 0) {
      startTimer(inputTime);
    }
  };

  const handleStop = () => {
    stopTimer();
  };

  const handleReset = () => {
    resetTimer();
    setInputTime(0); // Reset input time too
  };
  return (
    <>
       <h2>Countdown Timer</h2>
      <div>
        <input
          type="number"
          value={inputTime}
          onChange={(e) => setInputTime(Number(e.target.value))}
          disabled={isActive}
          min={1}
          placeholder="Enter time in seconds"
        />
        <button onClick={handleStart} disabled={isActive || inputTime <= 0}>
          Start Timer
        </button>
        <button onClick={handleStop} disabled={!isActive}>
          Stop Timer
        </button>
        <button onClick={handleReset}>
          Reset Timer
        </button>
      </div>

      <div style={{ marginTop: '20px', fontSize: '2rem', fontWeight: 'bold' }}>
        {timeLeft > 0 ? timeLeft : 'Time’s up!'}
      </div>
    </>
  );
}

export default CountDown;
