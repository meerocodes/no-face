import React, { useEffect } from 'react';
import useCountDown from 'react-countdown-hook';

const CountdownTimer = () => {
  const fetchEndTime = async () => {
    const response = await fetch('http://localhost:3001/countdown-end-time');
    const data = await response.json();
    return data.endTime; // use the timestamp directly
  };

  const initialTime = 0; // initial time in milliseconds, it will be updated after fetching end time
  const interval = 1000; // interval to change remaining time amount, defaults to 1000

  const [timeLeft, { start }] = useCountDown(initialTime, interval);

  useEffect(() => {
    const setEndTime = async () => {
      const endTime = await fetchEndTime();
      const currentTime = new Date().getTime();
      const remainingTime = endTime - currentTime;
      start(remainingTime);
    };

    setEndTime();
  }, []);

  const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const h = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const m = Math.floor((timeLeft / (1000 * 60)) % 60);
  const s = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className='countDown'>
      {d} {d === 1 ? 'day' : 'days'} {h} {h === 1 ? 'hour' : 'hours'} {m} {m === 1 ? 'minute' : 'minutes'} {s} {s === 1 ? 'second' : 'seconds'}
    </div>
  );
};

export default CountdownTimer;






