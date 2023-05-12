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
      
    const fetchDuration = async () => {
    const response = await fetch('http://localhost:3001/countdown-duration');
    const data = await response.json();
    return data.duration;
    };
    

  const [remainingTime, setRemainingTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    let interval;
    const updateRemainingTime = async () => {
      const duration = await fetchDuration();
      const endTime = new Date().getTime() + duration;

      interval = setInterval(() => {
        setRemainingTime(getRemainingTime(new Date(endTime)));
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


