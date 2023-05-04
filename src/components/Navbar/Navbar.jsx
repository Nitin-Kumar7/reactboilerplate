import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="ui pointing menu">
  <Link to="/home" className="active item">
    Home
  </Link>
  <Link to="/dashboard" className="item">
    Messages
  </Link>
  <Link to="#" className="item">
    Friends
  </Link>
  <div className="right menu">
    <div className="item">
      <div className="ui transparent icon input">
        <input type="text" placeholder="Search..." />
        <i className="search link icon"></i>
      </div>
    </div>
  </div>
</div>
 
    </>
  )
}

export default Navbar
