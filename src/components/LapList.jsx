const LapList = ({ laps }) => {

  const convertToMilliseconds = (time) => {
    const [minutes, seconds, centiseconds] = time.split(':').map(Number);
    return (minutes * 60000) + (seconds * 1000) + (centiseconds * 10);
  };

  const formatTime = (milliseconds) => {
    const minutes = String(Math.floor(milliseconds / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((milliseconds % 60000) / 1000)).padStart(2, '0');
    const centiseconds = String(Math.floor((milliseconds % 1000) / 10)).padStart(2, '0');
    return `${minutes}:${seconds}:${centiseconds}`;
  };

  return (
    <div className="timer-laps">
      <h3>Laps: </h3>
      <ul>
        
        {laps.map((lap, index) => {
          
          if (index > 0) {
          
            const prevLapTime = convertToMilliseconds(laps[index - 1]);
            const currentLapTime = convertToMilliseconds(lap);
            
            const lapDif = currentLapTime - prevLapTime;
            
            const formatDif = formatTime(lapDif);
            
            return (
              <li key={index}>
                Lap {index + 1}: {lap} <span>(+{formatDif})</span>
              </li>
            );
          }

          return (
            <li key={index}>
              Lap {index + 1}: {lap}
            </li>
          );
        })}

      </ul>
    </div>
  );
};

export default LapList;
