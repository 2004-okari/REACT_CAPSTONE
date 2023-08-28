import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../Assets/planet.png';
import './navigation.css';

function Navigation() {
  return (
    <div className="nav-div">
      <div className="image-div">
        <img src={planet} alt="planet logo" />
        <h1 className="space-text">Space Travellers&apos; Hub</h1>
      </div>
      <div className="list-div">
        <ul className="list">
          <li className="list-item"><NavLink className="list-nav" to="/">Rocket</NavLink></li>
          <li className="list-item"><NavLink className="list-nav" to="/mission">Mission</NavLink></li>
          <li className="list-item"><NavLink className="list-nav" to="/profile">Profile</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
