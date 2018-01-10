import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import Feed from "../Components/Feed";
import Comments from "../Components/Comments";

export default props => <Router>
  <div className="app">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/feed">Feed</Link>
      </li>
      <li>
        <Link to="/comments">Comments</Link>
      </li>
    </ul>

    <hr/>

    <Route exact path="/" component={Home}/>
    <Route exact path="/feed" component={Feed}/>
    <Route path="/comments" component={Comments}/>
  </div>
</Router>
