import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const getRemainingTime = (endTime) => {
        const currentTime = new Date();
        const difference = endTime - currentTime;
        const remainingDays = Math.floor(difference / 1000 / 60 / 60 / 24);
        const remainingHours = Math.floor((difference / 1000 / 60 / 60) % 24);
        const remainingMinutes = Math.floor((difference / 1000 / 60) % 60);
        const remainingSeconds = Math.floor((difference / 1000) % 60);
        return { days: remainingDays, hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds };
      };
      

  const fetchEndTime = async () => {
    const response = await fetch('http://localhost:3001/countdown-end-time');
    const data = await response.json();
    return new Date(data.endTime);
  };

  const [remainingTime, setRemainingTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

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


