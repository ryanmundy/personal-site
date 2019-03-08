import React from 'react';
import './Home.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Home = () => (
  <div>
    <div className="div__container container__background--large">
        <h2>Thank you for visiting my page!</h2>
        <img id="profilePhoto" src="photo.jpg" alt="photo of Ryan" />
        <h2>Profile</h2>
        <p>I am an organized, respectful, patient, loyal, and reliable individual who has years of experience interacting with a variety of individuals from diverse backgrounds in team based environments. I am an exceptional listener and communicator who genuinely cares about others and has a desire to solve real world problems wherever I am given the opportunity to do so.</p>
        <p>Feel free to explore my page and contact me if you like the work I do.</p>
    </div>
  </div>
);

export default Home;
