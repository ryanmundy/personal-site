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
const Skycons = require("skycons")(window);

const DARK_SKY = process.env.DARK_SKY;

function initializeReactGA() {
  ReactGA.initialize('UA-136265121-1');
  ReactGA.pageview('/homepage');
}

class App extends Component {

  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  state = {
    origin: {
      lat: '',
      lng: ''
    },
    weather: {
      currentWeather: '-- ',
      currentDescription: '--',
      currentIcon: ''
    }
  }

  componentDidMount() {
    initializeReactGA();
    this.getGeoLocation();
  }

  getWeather = () => {
    axios({
      method: 'GET',
      url: `/forecast/?lat=${this.state.origin.lat}&lng=${this.state.origin.lng}`
    }).then((response) => {
      console.log(response)
      this.setState({
        ...this.state,
        weather: {
          currentWeather: Math.round(response.data.currently.temperature),
          currentDescription: response.data.currently.summary,
          currentIcon: response.data.currently.icon
        }
      })
      const skycons = new Skycons({ color: "white" });
      // skycons.add(this.ref.current, Skycons.PARTLY_CLOUDY_DAY);
      let skycon = '';
      if (this.state.weather.currentIcon === 'clear-day') {
        skycon = Skycons.CLEAR_DAY
      }
      else if (this.state.weather.currentIcon === 'clear-night') {
        skycon = Skycons.CLEAR_NIGHT
      }
      else if (this.state.weather.currentIcon === 'partly-cloudy-day') {
        skycon = Skycons.PARTLY_CLOUDY_DAY
      }
      else if (this.state.weather.currentIcon === 'partly-cloudy-night') {
        skycon = Skycons.PARTLY_CLOUDY_NIGHT
      }
      else if (this.state.weather.currentIcon === 'cloudy') {
        skycon = Skycons.CLOUDY
      }
      else if (this.state.weather.currentIcon === 'rain') {
        skycon = Skycons.RAIN
      }
      else if (this.state.weather.currentIcon === 'SLEET') {
        skycon = Skycons.SLEET
      }
      else if (this.state.weather.currentIcon === 'snow') {
        skycon = Skycons.SNOW
      }
      else if (this.state.weather.currentIcon === 'wind') {
        skycon = Skycons.WIND
      }
      else if (this.state.weather.currentIcon === 'fog') {
        skycon = Skycons.FOG
      }
      skycons.add(this.ref.current, skycon);
      skycons.play();
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
          this.getWeather();

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
          <div id="weatherDiv">
          <p id="weather">Current Weather:</p>
          <canvas ref={this.ref} width="15" height="15" />
          <p id="weather">{this.state.weather.currentWeather}° F , {this.state.weather.currentDescription}</p>
          <a target="_blank" href="https://darksky.net/poweredby/"><p style={{ fontSize: "10px" }}><em>Powered by Dark Sky</em></p></a>
          </div>
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
