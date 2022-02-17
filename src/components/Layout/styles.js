import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export const MainContent = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.pxToRem(105)};
`
