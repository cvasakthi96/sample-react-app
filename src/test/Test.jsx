import React, { useEffect, useState } from 'react';
import './Test.scss';

export default function Test() {
  const [userName, setUserName] = useState('');
  return (
    <div className="layout-center">
      <div className="form">
        <input
          className="form__input"
          type="text"
          name="userName"
          id="userName"
          placeholder=" "
          defaultValue={userName}
          onChange={(evt) => {
            setUserName(evt.target.value);
          }}
        />
        <label className="form__label" for="userName">
          User Name
        </label>
        {userName && <span className="text-danger">X</span>}
      </div>
    </div>
  );
}
