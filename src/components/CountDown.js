import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const fetchEndTime = async () => {
    const response = await fetch('http://localhost:3001/countdown-end-time');
    const data = await response.json();
    return data.endTime; // use the timestamp directly
  };

  const getRemainingTime = (endTime) => {
    const currentTime = new Date().getTime(); // gets current time in milliseconds
    const difference = endTime - currentTime;
    
    const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const remainingMinutes = Math.floor((difference / (1000 * 60)) % 60);
    const remainingSeconds = Math.floor((difference / 1000) % 60);
    
    return { days: remainingDays, hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds };
  };

  const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    let interval;
    const updateRemainingTime = async () => {
      const endTime = await fetchEndTime();

      interval = setInterval(() => {
        const newRemainingTime = getRemainingTime(endTime);

        if (newRemainingTime.days <= 0 && newRemainingTime.hours <= 0 && newRemainingTime.minutes <= 0 && newRemainingTime.seconds <= 0) {
          clearInterval(interval);
        } else {
          setRemainingTime(newRemainingTime);
        }
      }, 1000);
    };

    updateRemainingTime();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { days: d, hours: h, minutes: m, seconds: s } = remainingTime;
  return (
    <div className='countDown'>
      {d} {d === 1 ? 'day' : 'days'} {h} {h === 1 ? 'hour' : 'hours'} {m} {m === 1 ? 'minute' : 'minutes'} {s} {s === 1 ? 'second' : 'seconds'}
    </div>
  );
};

export default CountdownTimer;





