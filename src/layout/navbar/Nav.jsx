import React, { useState } from 'react';
import './Nav.scss';

function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`nav__bar active ${toggle || 'toggle'}`}>
      <div className="toggle-switch">
        <i className="fa fa-bars" onClick={() => setToggle(!toggle)} />
      </div>

      <div className="navs">
        <ul>
          <li>
            <i class="bi bi-calendar-week-fill"></i>
            <span className="nav__title">Sun</span>
            <div className="tip">Sun</div>
          </li>

          <li>
            <i className="fa fa-id-card-o" />
            <span className="nav__title">Contact</span>
            <div className="tip">Contact</div>
          </li>
          <li>
            <i className="fa fa-pie-chart" />
            <span className="nav__title">Chart</span>
            <div className="tip">Chart</div>
          </li>
          <li>
            <i className="fa fa-ticket" />
            <span className="nav__title">Ticket</span>
            <div className="tip">Ticket</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
