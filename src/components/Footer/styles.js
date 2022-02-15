import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 17.43rem;
  background: ${({ theme }) => theme.backgroundGradient};
  box-shadow: 0px 3px 12px rgba(69, 62, 7, 0.3);
  align-self: flex-end;
`

export const Logo = styled.img`
  width: 9.18rem;
  height: 2.51rem;
`
