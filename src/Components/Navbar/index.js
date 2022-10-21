import React from 'react'
import logo from '../../logo.svg'
import './style.scss';

function Navbar() {
  return (
    <nav className='navbar'>
        <img src={logo} alt='city' />
    </nav>
  )
}

export default Navbar