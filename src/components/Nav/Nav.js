import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <img className="nav-image" src="logo4.png" alt="logo" />
    </Link>
    {/* <h1>Ryan Mundy</h1> */}
    {/* <h3>Full Stack Software Developer</h3> */}
    <hr></hr>
    <br/>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        Home
      </Link>
      <Link className="nav-link" to="/resume">
        Resume
      </Link>
      <Link className="nav-link" to="/skills">
        Skills
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </div>
  </div>
);

export default Nav;
