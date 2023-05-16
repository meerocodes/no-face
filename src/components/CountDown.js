import React from 'react';
import Countdown from 'react-countdown';

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <span>You are good to go!</span>;
  } else {
    // Render a countdown
    return <span className='countDown'>{days} days, {hours} hours, {minutes} minutes, {seconds} seconds remaining</span>;
  }
};

export default function CountdownTimer() {
  // Calculate the time 10 days from now
  const tenDaysFromNow = Date.now() + 10 * 24 * 60 * 60 * 1000;

  return (
    <Countdown
      date={tenDaysFromNow}
      renderer={renderer}
    />
  );
}







