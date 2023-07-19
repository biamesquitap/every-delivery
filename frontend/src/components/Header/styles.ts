import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  gap: 1rem;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  background-color: ${(props) => props.theme.white};

  > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`

export const RegisterLink = styled.p`
  margin-top: 2rem;
  align-self: center;

  font-size: 12px;
  font-weight: bold;
  text-decoration: underline;
  color: ${(props) => props.theme['purple-500']};
  cursor: pointer;
`

export const ShoppingCartDiv = styled.button`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 3rem;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  background-color: ${(props) => props.theme['purple-500']};
  border-radius: 8px;
  border: none;
`

export const QuantityCart = styled.div`
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme['green-500']};
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -0.75rem;
  margin-top: -0.75rem;
  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 12px;
    color: ${(props) => props.theme.white};
  }
`

export const CartContainer = styled.div`
  display: flex;
`
