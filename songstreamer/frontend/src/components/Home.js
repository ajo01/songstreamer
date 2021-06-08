import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import CreateRoom from './CreateRoom'
import JoinRoom from './JoinRoom'

const Home = () => {
    return (
        <Router>
          <Switch>
              <Route exact path="/">
                  <p>Home page</p>
              </Route>
              <Route path="/join" component={JoinRoom}/>
              <Route path="/create" component={CreateRoom}/>
          </Switch>
      </Router>
    )
}

export default Home