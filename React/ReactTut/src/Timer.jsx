import React, { useState } from "react";

const Timer = ({state}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTiem] = useState(0);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      setStartTime(Date.now() - elapsedTime)
    //   234563738383
    }
  };

  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      setElapsedTiem(Date.now() - startTime)

    }
  };

  const reset = ()=>{
    setIsRunning(false)
    setElapsedTiem(0)
    setStartTime(null)
  }

  const currentTime = isRunning ? Date.now() - startTime : elapsedTime
const timeFormat= (ms) =>{
    console.log(ms);
    
    const totalSeconds = Math.floor(ms/1000)
    const minutes = Math.floor(totalSeconds/60)
    const seconds = totalSeconds % 60
    console.log(totalSeconds,minutes, seconds );

    return `${minutes.toString().padStart(2, "0")}: ${seconds.toString().padStart(2, "0")}`
    
}


  return <div>

    <h1>{timeFormat(currentTime)}</h1>
    <button onClick={handleStart}>
        start
    </button>
    <button onClick={handleStop}>
        stop
    </button>
    <button onClick={reset}>
        reste
    </button>
  </div>;
};

export default Timer;
