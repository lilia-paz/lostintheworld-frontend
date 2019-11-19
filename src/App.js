import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

// import ExternalApi from "./components/ExternalApi";
import NavBar from './components/NavBar'
import PrivateRoute from './components/PrivateRoute'
import Profile from './components/Profile'
import Search from './components/Search'
import Home from './components/Home'
// import List from './components/List';

function App () {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path='/' exact component={Home} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <PrivateRoute exact path='/search' component={Search} />
          {/* <Route exact path='/search' component={Search} /> */}
          {/* <Route path='/list' component={List} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
