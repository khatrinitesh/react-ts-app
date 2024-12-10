import React from 'react';

const RespondingEvents = () => {

    const handleStart = () => {
        alert('start')
    }
    const handleEnd = () => {
        alert('end')
    }
  return (
    <div>
      <Example onStart={handleStart} onEnd={handleEnd}/>
    </div>
  );
}

export default RespondingEvents;

function Example({onStart,onEnd}){
    return(
        <>
        <button onClick={onStart}>Start</button>
        <button onClick={onEnd}>End</button>
        </>
    )
}