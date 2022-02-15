import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.backgroundGradient};
  height: 6.5rem;
  width: 100%;
  box-shadow: 0px 3px 12px rgba(69, 62, 7, 0.3);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 4.58rem;
  position: fixed;
  z-index: 10;
`

export const NavbarItem = styled.nav`
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4rem;
  font-weight: 500;
  font-size: 1.125rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0px;
  }

  ${({ isFirst }) => (isFirst ? 'margin-left: 7.9rem;' : '')}
`
