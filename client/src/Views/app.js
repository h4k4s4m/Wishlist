import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Navbar from '../Components/Navbar';
import Card from '../Components/ProductCard';
import FeedEvent from "../Components/FeedEvent";
import SearchBar from "../Components/SearchBar";

//Example object - REMOVE ME FOR PRODUCTION
const props = {
  item: {
    name: "Trumpet",
    url: "https://images-na.ssl-images-amazon.com/images/I/5114BVcTzpL.jpg",
    cost: 149.99
  },
  user: {
    username: "Sahm"
  },
  event: {
    for: "Sarah",
    what: "birthday"
  }
};

const somethingHappened = {
  who: "Sahm",
  what: "Added new gift",
  body: "something goes here"
};


const ProductWrapper = () => (
  <Card {...props} />
);
const FeedWrapper = () => (
  <FeedEvent {...somethingHappened} />
);

export default props => <Router>
  <div className="app">
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/card" component={ProductWrapper} />
      <Route exact path="/feed" component={FeedWrapper} />
      <Route exact path="/search" component={SearchBar} />
    </Switch>
  </div>
</Router>
