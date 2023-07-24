import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div``

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 10rem;
  gap: 2rem;

  > p {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 18px;

    padding: 0 0 1rem 1rem;
  }
`

export const Content = styled.div`
  > p {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 18px;

    padding: 0 0 1rem 1rem;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PaymentMethod = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 2rem;
  border-radius: 6px;

  width: 40rem;
  height: 207px;

  > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-family: 'Roboto';
    font-weight: 400;

    > p {
      font-size: 16px;
    }
    > span {
      font-size: 14px;
    }
  }
`

export const Type = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 1rem;
`

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 1.5rem;

  width: 28rem;

  border-radius: 6px 44px;

  font-family: 'Roboto', sans-serif;

  > div {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
    font-weight: 400;
    font-size: 14px;

    > strong {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: space-between;
      justify-content: space-between;

      font-weight: 700;
      font-size: 20px;
    }
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 46px;
  border: none;
  border-radius: 6px;
  box-shadow: none;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;

  text-transform: uppercase;

  color: ${(props) => props.theme.white};
  font-stretch: 100;

  cursor: pointer;
`

export const LinkStyle = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const ButtonCheckout = styled.button`
  padding: 1rem 2rem;
  background-color: ${(props) =>
    props.color ? props.color : props.theme['purple-100']};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    margin-right: 0.75rem;
  }

  border: none;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  text-align: center;

  font-weight: 700;
  font-size: 0.8rem;
  color: ${(props) => props.theme['purple-300']};

  transition: 100ms;

  &:hover {
    transition: 100ms;
    opacity: 0.6;
  }

  &:focus {
    background-color: ${(props) => props.theme['purple-500']};
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
  }

  &:disabled {
    background-color: ${(props) => props.theme['gray-200']};
  }
`

export const ReviewItems = styled.div``
