import React, { useState, useEffect } from 'react';
import { differenceInSeconds, addSeconds } from 'date-fns';

const CountdownTimer = () => {
  const getRemainingTime = (endTime) => {
    const currentTime = new Date();
    const totalSeconds = differenceInSeconds(endTime, currentTime);
    const remainingDays = Math.floor(totalSeconds / 60 / 60 / 24);
    const remainingHours = Math.floor((totalSeconds / 60 / 60) % 24);
    const remainingMinutes = Math.floor((totalSeconds / 60) % 60);
    const remainingSeconds = Math.floor(totalSeconds % 60);
    return { days: remainingDays, hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds };
  };

  const fetchEndTime = async () => {
    const response = await fetch('http://localhost:3001/countdown-end-time');
    const data = await response.json();
    return addSeconds(new Date(), data.endTime); // we use `addSeconds` from `date-fns` here to parse the timestamp
  };

  const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateRemainingTime = async () => {
      const endTime = await fetchEndTime();
      setRemainingTime(getRemainingTime(endTime));

      const interval = setInterval(() => {
        setRemainingTime(getRemainingTime(endTime));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    };

    updateRemainingTime();
  }, []);

  const { days: d, hours: h, minutes: m, seconds: s } = remainingTime;
  return (
    <div className='countDown'>
      {d} {d === 1 ? 'day' : 'days'} {h} {h === 1 ? 'hour' : 'hours'} {m} {m === 1 ? 'minute' : 'minutes'} {s} {s === 1 ? 'second' : 'seconds'}
    </div>
  );
};

export default CountdownTimer;



