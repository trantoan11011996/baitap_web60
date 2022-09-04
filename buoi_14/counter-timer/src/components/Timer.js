import react, { useEffect, useState } from "react";
import "../css/index.css";
const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <div className="container">
      <h1>Create Timer By Using Reactjs</h1>
      <div className="counter">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="btn-counter">
        <button onClick={() => setTimeOn(true)}>start</button>
        <button onClick={() => setTimeOn(false)}>stop</button>
        <button onClick={() => setTimeOn(true)}>resume</button>
        <button onClick={() => setTime(0)}>restart</button>
      </div>
    </div>
  );
};
export default Timer;
