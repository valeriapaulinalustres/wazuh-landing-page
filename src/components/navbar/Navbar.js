import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap'

function Navbar() {

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#fff4ac"});
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#FEDD0B" });
  };

  return (
    <div className='navbar-container'>
      <img className='brand' alt="Wazuh brand image"></img>
      <nav>
        <NavLink to="/src/views/platform" className="navbar-container__links">Platform</NavLink>
        <NavLink to="/src/views/cloud" className="navbar-container__links">Cloud</NavLink>
        <NavLink to="/src/views/documentation" className="navbar-container__links">Documentation</NavLink>
        <NavLink to="/src/views/services" className="navbar-container__links">Services</NavLink>
        <NavLink to="/src/views/install"><button className='button navbar-btn' onMouseEnter={onEnter} onMouseLeave={onLeave}>Install Wazuh</button></NavLink>
      </nav>
    </div>
  )
}

export default Navbar