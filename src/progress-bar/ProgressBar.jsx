import React, { useState, useEffect } from 'react';
import './ProgressBar.scss';
export default function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  // useEffect(() => {
  //   increasePercentage(percentage);
  // }, []);
  // const increasePercentage = (percentage) => {
  //   let interval = null;
  //   if (percentage <= 100) {
  //     interval = setInterval(() => {
  //       setPercentage((prev) => prev + 10);
  //     }, 500);
  //   } else {
  //     clearInterval(interval);
  //   }
  // };
  useEffect(() => {
    if (percentage < 100) {
      setTimeout(() => {
        setPercentage((prev) => prev + 5);
      }, 500);
    } else {
      return;
    }
  }, [percentage]);

  return (
    <div className="layout-center container">
      <button
        className="btn btn-sm btn-danger my-3"
        onClick={() => setPercentage(0)}
      >
        Reset
      </button>

      <span className="my-2"> {percentage}% </span>
      <div className="progress_bar_wrapper">
        <div className="progress_bar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
