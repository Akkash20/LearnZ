import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
       <div className="nav">
        <div className="navigation">
           <Link to='/'>
           <div className="nav_header">
             <h2 className="nav-logo"><span>LearnZ</span></h2>
            </div>
           </Link>
           <div className="links">
            <ul>
              <li>Courses</li>
              <li>HackerSpace</li>
              <li>Coding Ground</li>
              <li>Blog</li>
            </ul>
           </div>
           <div className="nav_button">
            <button>login</button>
            <button>register</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
