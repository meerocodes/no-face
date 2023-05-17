import {useState, useEffect} from 'react';
import {getRemainingTimeUntilMsTimestamp} from './CountDownUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const Countdown = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="countdown-timer">
            <span className="two-numbers">{remainingTime.days}</span>
            <span className='date-count'>d</span>
            <span className="two-numbers">{remainingTime.hours}</span>
            <span className='date-count'>h</span>
            <span className="two-numbers">{remainingTime.minutes}</span>
            <span className='date-count'>m</span>
            <span className="two-numbers">{remainingTime.seconds}</span>
            <span className='date-count'>s</span>
        </div>
    );
}

export default Countdown;



















