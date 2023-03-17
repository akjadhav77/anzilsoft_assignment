import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><Link to="/">Assignment1</Link></li>
            <li><Link to="/assignment2">Assignment2</Link></li>
        </ul>
    </div>
  )
}

export default NavBar