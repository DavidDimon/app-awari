import React from 'react'

import * as Pokemons from '@assets/images/pokemon'

import Button from '@components/Button'
import PokeTag from '@components/PokeTag'
import { Container, PokeName, PokeImage } from './styles'
import { PREFIX_IMAGE, PREFIX_API } from '@constants/api'

import { PokeCardProps } from '../../types/components/pokeCard'

const PokeCard: React.FC<PokeCardProps> = ({ name, id, onClick }) => {
  const [types, setTypes] = React.useState([])
  // @ts-ignore
  const pokemonImage: string = React.useMemo(
    () => `${PREFIX_IMAGE}/${id}.png`,
    [name]
  )

  const loadTypes = async () => {
    try {
      const response = await fetch(`${PREFIX_API}pokemon/${id}`)
      const data = await response.json()
      setTypes(data?.types)
    } catch (error) {
      console.error(error)
    }
  }

  console.log(types)

  React.useEffect(() => {
    if (id) loadTypes()
  }, [id])

  return (
    <Container>
      <PokeImage src={pokemonImage} />
      <PokeName>{name}</PokeName>
      {types?.map((type: any, index: number) => (
        <PokeTag type={type?.type?.name} key={`${type}_${index}`} />
      ))}
      <Button>{'See more'}</Button>
    </Container>
  )
}
export default PokeCard
