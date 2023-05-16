import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

// Calculate the date 10 days from now
const dateInTenDays = Date.now() + 10 * 24 * 60 * 60 * 1000;

ReactDOM.render(
  <Countdown date={dateInTenDays} />,
  document.getElementById('root')
);





