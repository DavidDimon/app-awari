import styled from 'styled-components'

export const ButtonStyled = styled.button`
  height: 2.3125rem;
  border-radius: ${({ theme }) => theme.pxToRem(24)};
  // background-color: ${({ theme }) => theme.primary};
  border: 0px;
  color: ${({ theme }) => theme.white};
  padding: 0.75rem 2rem;
  cursor: pointer;
  background: ${({ theme }) => theme.backgroundGradient};
`
