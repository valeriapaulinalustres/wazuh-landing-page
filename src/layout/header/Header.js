import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Social from '../../components/social/Social';
import './header.css'

function Header() {
  return (
    <div className='header'>
      <Social />
      <Navbar />
    </div>
  )
}

export default Header