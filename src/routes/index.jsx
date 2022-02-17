import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

import { Layout } from '@components'
import { Home, About } from '../pages'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
        exact
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
    </Switch>
  </BrowserRouter>
)

export default Routes
