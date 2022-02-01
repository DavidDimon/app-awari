import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom'

import { Home, About } from '../pages'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
    </Switch>
  </Router>
)

export default Routes
