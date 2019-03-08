import React from 'react';
import './Footer.css'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
    &copy; 2019 Ryan Mundy
    <br/>
    <a target="_blank" href="https://github.com/ryanmundy"><img className="linkImage" height="25px" src="GitHub-Mark-Light-32px.png" alt="github" /></a>
    <a target="_blank" href="https://www.linkedin.com/in/ryan-mundy-4b147b88/"><img height="25px" src="In-White-48px-R.png" alt="github" /></a>
  </footer>
);

export default Footer;
