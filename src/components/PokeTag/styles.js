import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  border-radius: 24px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`
