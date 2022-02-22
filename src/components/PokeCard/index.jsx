import React from 'react'
import PropTypes from 'prop-types'
import { POKE_TYPES } from '@constants/pokeTypes'
import * as Pokemons from '@assets/images/pokemon'

import Button from '@components/Button'
import PokeTag from '@components/PokeTag'
import { Container, PokeName, PokeImage } from './styles'

const PokeCard = ({ name, types, onClick }) => (
  <Container>
    <PokeImage src={Pokemons[name]} />
    <PokeName>{name}</PokeName>
    {types.map((type, index) => (
      <PokeTag type={type} key={`${type}_${index}`} />
    ))}
    <Button>{'See more'}</Button>
  </Container>
)

PokeCard.propTypes = {
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.oneOfType(Object.keys(POKE_TYPES))),
  onClick: PropTypes.func,
}

export default PokeCard
