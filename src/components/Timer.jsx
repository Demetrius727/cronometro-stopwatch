import { useState, useEffect } from "react";

import TimerControls from "./TimerControls"
import TimerDisplay from "./TimerDisplay"
import LapList from "./LapList"

import "./Timer.css";

const Timer = () => {

    const [milliseconds, setMilliseconds] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [laps, setLaps] = useState([]);

    const formatTime = () => {
        const minutes = ("0" + Math.floor((milliseconds / 60000) % 60)).slice(-2);
        const seconds = ("0" + Math.floor((milliseconds / 1000) % 60)).slice(-2);
        const centiseconds = ("0" + ((milliseconds / 10) % 100)).slice(-2);

        return `${minutes}:${seconds}:${centiseconds}`;
    };

    const startTime = (interval) => {
        return setInterval(() => {
            setMilliseconds(prevMilliseconds => prevMilliseconds + 10);
        }, 10)
    }

    const stopTimer = (interval) => {
        clearInterval(interval);
        return interval;
    }

    const addlap = () => {
        setLaps([...laps, formatTime()]);
    }

    const resetTimer = () => {
        setMilliseconds(0);
        setTimerOn(false);
        setLaps([]);
    }

    useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = startTime(interval);
        } else {
            interval = stopTimer(interval);
        }

        return () => stopTimer(interval); // Clear Memory ???
    }, [timerOn])

    return (
        <div className="timer-container">
            <TimerDisplay time={formatTime()} />
            <TimerControls
                timerOn={timerOn}
                onStart={() => setTimerOn(true)}
                onStop={() => setTimerOn(false)}
                onReset={resetTimer}
                onLap={addlap}
            />
            <LapList laps={laps} />
        </div>
    )
}

export default Timer
