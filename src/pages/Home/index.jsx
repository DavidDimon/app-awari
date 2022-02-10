import React from 'react'
import { Link } from 'react-router-dom'

import { Header } from '../../components'

const headerItems = ['Home', 'Pokedex', 'Guides']

const Home = () => {
  return (
    <div>
      <Header headerItems={headerItems} />
      {/* <p>Home</p>
      <Link to="/about">{'About'}</Link> */}
    </div>
  )
}

export default Home
