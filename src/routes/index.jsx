import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

import { Home, About } from '../pages'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home />} exact />
      <Route path="/about" element={<About />} />
    </Switch>
  </BrowserRouter>
)

export default Routes
