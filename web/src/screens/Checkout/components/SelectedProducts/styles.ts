import styled from 'styled-components'

export const Container = styled.div``

export const ItemContent = styled.div`
  background-color: ${(props) => props.theme['purple-100']};
  border-radius: 8px;
  padding: 2rem;
  margin-top: 1rem;
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
`
export const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  :first-child {
    font-weight: bold;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;

  padding: 0.4rem;
  gap: 0.3rem;

  > button {
    border: none;
    box-shadow: none;
    background-color: transparent;
  }

  > input {
    background: transparent;
    height: 2rem;
    border: 0;

    font-weight: bold;
    font-size: 1, 125rem;
    color: black;
    text-align: center;
    justify-content: center;
    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme.purple};
    }
    &::placeholder {
      color: black;
    }
    width: 1.5rem;
  }
`

export const SelectItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > button {
    border: none;
    box-shadow: none;
    background-color: transparent;
  }
`
