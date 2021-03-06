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

function initializeReactGA() {
  ReactGA.initialize('UA-136265121-1');
  ReactGA.pageview('/homepage');
}

class App extends Component {

  componentDidMount() {
    initializeReactGA();
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
