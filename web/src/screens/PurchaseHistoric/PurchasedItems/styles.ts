import styled from 'styled-components'

export const Container = styled.div``

export const PurchasedItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  max-width: 80rem;
  min-width: 30rem;

  width: 100%;
  align-self: stretch;
  flex-grow: 0;

  background-color: ${(props) => props.theme['purple-100']};
  border-radius: 8px;
  padding: 2rem;

  > div {
    display: flex;
    flex-direction: row;
    align-self: stretch;
    align-items: center;
    justify-content: space-between;
  }
`

export const PurchaseVariable = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme['purple-500']};
`
