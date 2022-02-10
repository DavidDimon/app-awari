import React from 'react'

import { HeaderContainer, NavbarItem } from './styles'
import logoPokemon from '@assets/images/logo.png'

const Header = ({ headerItems }) => (
  <HeaderContainer>
    <img src={logoPokemon} />

    {!!headerItems?.length &&
      headerItems?.map((item, index) => (
        <NavbarItem key={item} isFirst={index === 0}>
          {item}
        </NavbarItem>
      ))}
  </HeaderContainer>
)

export default Header
