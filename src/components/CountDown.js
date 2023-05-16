// Countdown.js

import React, { useEffect, useState } from "react";
import useCountdown from "react-countdown-hook";

const Countdown = () => {
  const [timeLeft, { start }] = useCountdown(0, 1000); // Initialize with 0
  const [hasFetchedTime, setHasFetchedTime] = useState(false);

  useEffect(() => {
    if (!hasFetchedTime) {
      fetch("http://localhost:3001/endtime")
        .then((res) => res.json())
        .then((data) => {
          const now = new Date();
          const endTime = new Date(data.endTime);
          const timeToCountDown = endTime - now;

          if (timeToCountDown > 0) {
            start(timeToCountDown);
          }

          setHasFetchedTime(true);
        });
    }
  }, [hasFetchedTime, start]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return <div className="countDown">{`${days}d ${hours}h ${minutes}m ${seconds}s`}</div>;
};

export default Countdown;









