import React from 'react';
import './Content.css';

function Content() {
  return (
    <div className="container">
      <div className="even-columns">
        <div className="col grid1">
          <div className="profile">
            <ion-icon name="heart" />
          </div>
          <div className="action">:</div>
          <div className="time">time</div>
          <div className="star">*</div>
        </div>
      </div>
    </div>
  );
}
export default Content;
