import React from 'react'

import { Header, Footer } from '@components'
import { Main } from './styles'

const headerItems = ['Home', 'Pokedex', 'Guides']

const Home = () => {
  return (
    <React.Fragment>
      <Header headerItems={headerItems} />
      <Main>
        <Footer />
      </Main>
    </React.Fragment>
  )
}

export default Home
