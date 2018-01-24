import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Profile from './Profile';
import Layout from './Layout';
import SearchBar from "../Components/SearchBar";

let isLoggedin = sessionStorage.getItem('isLoggedin');
console.log(isLoggedin);




export default props => (

  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/search" component={SearchBar} />
        <Route path="/" component={Home} />
      </Switch>
      <Layout />
    </div>
  </Router>
)
