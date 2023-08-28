import React from 'react'
import planet from '../Assets/planet.png'
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div>
        <img src={planet} alt='planet logo' />
      </div>
      <div>
        <ul>
          <li><NavLink to='/'>Rocket</NavLink></li>
          <li><NavLink to='/mission'>Mission</NavLink></li>
          <li><NavLink to='/profile'>Profile</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation