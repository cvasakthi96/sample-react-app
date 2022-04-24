import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Switch from 'react-router';
import './GotoSection.scss';

export default function GotoSection() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    if (showTop) return;
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showTop]);
  const handleScroll = () => {
    console.log('scroll', window.scrollY);
    if (window.scrollY > 100) {
      if (!showTop) setShowTop((prev) => !prev);
    }
  };
  return (
    <div className="layout container custom">
      <div
        className={`flt-btn btn btn-sm btn-success ${!showTop && 'd-none'} `}
        onClick={() => {
          window.location.replace('#Home');
        }}
      >
        top
      </div>
      <div className="navbar navbar-expand-lg">
        <div className="navbar-nav">
          <div className="nav-item">
            <a className="nav-link" href="#Home">
              Home
            </a>
          </div>
          <div className="nav-item">
            <a className="nav-link" href="#About">
              About
            </a>
          </div>
          <div className="nav-item">
            <a className="nav-link" href="#Users">
              Users
            </a>
          </div>
        </div>
      </div>
      <div id="Home" className="section text-white">
        Home
      </div>
      <div id="About" className="section text-white">
        About
      </div>
      <div id="Users" className="section text-white">
        Users
      </div>
    </div>
  );
}
