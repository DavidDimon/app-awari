import React from 'react'

import { SideMenu, Icon, PokeCard } from '@components'
import { Container, ListWrapper, ListGrid, DarkIcon } from './styles'

import { POKE_TYPES } from '@constants/pokeTypes'

const mockPokemon = {
  name: 'charizard',
  types: [Object.keys(POKE_TYPES)[0]],
  onClick: () => '',
}

const Home = () => {
  return (
    <Container>
      <SideMenu>
        <span>test</span>
        <Icon.Bug />
        <DarkIcon />
      </SideMenu>
      <ListWrapper>
        <ListGrid>
          <PokeCard {...mockPokemon} />
        </ListGrid>
      </ListWrapper>
    </Container>
  )
}

export default Home
