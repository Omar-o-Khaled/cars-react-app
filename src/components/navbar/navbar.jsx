import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = (props) => {
  return (
    <div className='list' >
      <ul className='ulNav'>
        <li ><NavLink to='/'>Home</NavLink></li>
        <li ><NavLink to='/about'>About</NavLink></li>
        <li ><NavLink to='/services'>Services</NavLink></li>
        <li ><NavLink to='/cars'>Cars</NavLink></li>
        <li><NavLink to='/contact'>Contact us</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar