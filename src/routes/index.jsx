import React from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

import { Layout } from '@components'
import { Home, About } from '../pages'

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default Routes
