import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Resume from '../Resume/Resume';
import Skills from '../Skills/Skills';

import './App.css';

class App extends Component {

  render() {
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
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
