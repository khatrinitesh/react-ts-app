import React from "react";

const Controls = () => {
  const { start, stop, isRunning } = useCarStore();
  return (
    <>
      <div style={{ marginTop: 20 }}>
        <button onClick={start} disabled={isRunning}>
          Start
        </button>
        <button onClick={stop} disabled={!isRunning}>
          Stop
        </button>
      </div>
    </>
  );
};

export default Controls;
