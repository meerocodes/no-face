import React, { useEffect, useState } from "react";
import axios from "axios";
import useCountdown from "react-countdown-hook";

const Countdown = () => {
  const [timeLeft, { start }] = useCountdown(0, 1000);
  const [hasFetchedTime, setHasFetchedTime] = useState(false);

  useEffect(() => {
    if (!hasFetchedTime) {
      axios
        .get("/endtime")
        .then((response) => {
          const now = new Date();
          const endTime = new Date(response.data.endTime);
          const timeToCountDown = endTime - now;

          console.log('Now:', now);
          console.log('End time:', endTime);
          console.log('Time to count down:', timeToCountDown);

          if (timeToCountDown > 0) {
            start(timeToCountDown);
          }

          setHasFetchedTime(true);
        })
        .catch((error) => {
          console.error('Error fetching end time:', error);
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


















