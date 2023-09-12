import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  // Create a ref 'active' to keep track of whether the timer is active or not.
  const active = useRef(false);

  // Create a ref 'refInterval' to store the interval ID of the timer.
  const refInterval = useRef(0);

  const startTimer = () => {
    // Set up an interval to increment the 'time' state every second.
    refInterval.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    // Disable the 'active' ref to indicate that the timer is active.
    active.current.disabled = true;
  };

  const stopTimer = () => {
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };

  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
