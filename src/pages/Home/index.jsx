import React from 'react'

import { SideMenu, Icon, PokeCard } from '@components'
import { Container, ListWrapper, ListGrid, DarkIcon } from './styles'

import { PREFIX_API } from '@constants/api'

const Home = () => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [currentPage, setCurrentPage] = React.useState(0)
  const [countTotal, setCountTotal] = React.useState(0)

  const loadPokemons = async () => {
    try {
      const response = await fetch(
        `${PREFIX_API}pokemon?limit=20&offset=${currentPage}`,
        { method: 'get', headers: { 'Content-Type': 'application/json' } }
      )
      const result = await response.json()
      setData(result.results)
      setCountTotal(result?.count)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const getId = (url) => {
    if (!url) return ''
    return url
      ?.replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace(/[/]/g, '')
  }

  React.useEffect(() => {
    loadPokemons()
  }, [currentPage])

  return (
    <Container>
      <SideMenu>
        <span>test</span>
        <Icon.Bug />
        <DarkIcon />
      </SideMenu>
      <ListWrapper>
        <ListGrid>
          {!!data?.length &&
            data?.map((item, index) => (
              <PokeCard
                key={`pokemon_${index}`}
                {...item}
                id={getId(item.url)}
              />
            ))}
        </ListGrid>
      </ListWrapper>
    </Container>
  )
}

export default Home
