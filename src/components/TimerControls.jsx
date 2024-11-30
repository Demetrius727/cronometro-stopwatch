

const TimerControls = ({ timerOn, onStart, onStop, onReset, onLap }) => {
  return (
    <div className="timer-controls">

      {!timerOn && <button onClick={onStart}>Start</button>}
      {timerOn && <button onClick={onStop}>Stop</button>}
      {timerOn && <button onClick={onLap}>Lap</button>}

      <button onClick={onReset}>Clear</button>
    </div>
  )
}

export default TimerControls