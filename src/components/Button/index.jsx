import React from 'react'

import { ButtonStyled } from './styles'

const Button = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
)

export default Button
