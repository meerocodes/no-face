import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>You are good to go!</span>;
  } else {
    return <span>{days} days, {hours} hours, {minutes} minutes, {seconds} seconds remaining</span>;
  }
};

export default function CountdownTimer() {
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    fetch('/api/countdown')
      .then(response => response.json())
      .then(data => setEndDate(data.countdownEnd));
  }, []);

  if (endDate === null) {
    return <div>Loading...</div>;
  }

  return <Countdown date={endDate} renderer={renderer} />;
}








