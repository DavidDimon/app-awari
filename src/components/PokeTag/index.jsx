import React from 'react'
import PropTypes from 'prop-types'

import { POKE_TYPES } from '@constants/pokeTypes'
import { Container } from './styles'

const PokeTag = ({ type }) => {
  const pokeType = React.useMemo(() => POKE_TYPES[type], [type])

  return (
    <Container color={pokeType.color}>
      {pokeType.icon({ fill: 'red' })}
      {type}
    </Container>
  )
}

PokeTag.propTypes = {
  type: PropTypes.oneOfType(Object.keys(POKE_TYPES)),
}

export default PokeTag
