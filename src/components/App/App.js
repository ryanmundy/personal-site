import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Resume from '../Resume/Resume';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import './App.css';
import ReactGA from 'react-ga';
import axios from 'axios';

const DARK_SKY = process.env.DARK_SKY;

function initializeReactGA() {
  ReactGA.initialize('UA-136265121-1');
  ReactGA.pageview('/homepage');
}

class App extends Component {
  state = {
    origin: {
      lat: '',
      lng: ''
    }
  }

  componentWillMount() {
    this.getGeoLocation();
  }

  componentDidMount() {
    initializeReactGA();
    
    axios({
      method: 'GET',
      url: `/forecast/?lat=${this.state.origin.lat}&lng=${this.state.origin.lng}`
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    });
    
  }

  // captures users current location 
  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('lat: ', position.coords.latitude, 'lng:', position.coords.longitude)
          // sets origin coordinates latituude and longitude
          this.setState({
            ...this.state,
            origin: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
        }
      )
    } else {
      alert('Location services not supported by your browser');
    }
  }


  render() {
    console.log(this.state);
    
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route
              exact
              path="/resume"
              component={Resume}
            />
            <Route
              exact
              path="/skills"
              component={Skills}
            />
            <Route
              exact
              path="/contact"
              component={Contact}
            />
            <Route
              exact
              path="/portfolio"
              component={Portfolio}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect()(App);
