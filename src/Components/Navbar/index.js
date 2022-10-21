import React from 'react'
import "./style.css"
import logo from "../../logo.svg"


function Navbar() {
  return (
    <nav className='navbar'>
        <img src={logo} alt="sehirlerimiz"/>

    </nav>
  )
}

export default Navbar