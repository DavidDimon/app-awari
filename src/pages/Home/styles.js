import styled from 'styled-components'
import { Icon } from '@components'

export const Container = styled.div`
  display: flex;
  height: 100%;
`

export const ListWrapper = styled.div`
  min-height: 50rem;
  width: 100%;
`

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 52px;
  padding-top: 100px;
`

export const DarkIcon = styled(Icon.Dark)`
  height: 100px;
  width: 100px;
`
