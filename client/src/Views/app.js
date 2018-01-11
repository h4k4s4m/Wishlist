import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Navbar from '../Components/Navbar';

export default props => <Router>
  <div className="app">
  <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
  </div>
</Router>
