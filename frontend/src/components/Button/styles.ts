import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface ButtonProps {
  color?: string
  isTransparent?: boolean
  width?: string
}

export const Container = styled.button<ButtonProps>`
  height: 3rem;
  padding: 1rem 2rem;
  background-color: ${(props) =>
    props.color ? props.color : props.theme['purple-500']};
  cursor: pointer;

  width: ${(props) => (props.width !== null ? props.width : 'auto')};

  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    margin-right: 0.5rem;
  }

  border: none;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 0.8rem;
  color: ${(props) => props.theme.white};

  transition: 100ms;

  &:hover {
    transition: 100ms;
    background-color: ${(props) => props.theme['purple-300']};
  }

  &:disabled {
    background-color: ${(props) => props.theme['gray-200']};
  }

  ${(props) =>
    props.isTransparent &&
    `
    background-color: transparent;
    border: 1px solid ${props.theme['purple-600']};
    color: ${props.theme['purple-600']};
    
    &:hover {
      color: ${props.theme.white};
      background-color: ${props.theme['purple-800']};
    }
  `}
`
export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  color: ${(props) => props.theme.white};
`
