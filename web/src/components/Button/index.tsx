import React from 'react'
import { Container, LinkStyle } from './styles'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  value: string
  width?: string
  color?: string
  icon?: any
  isTransparent?: boolean
  disabled?: boolean
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Button(props: ButtonProps) {
  return (
    <Container
      disabled={props.disabled}
      isTransparent={props.isTransparent}
      color={props.color}
      type={props.type}
      onClick={props.handleClick}
      width={props.width}
    >
      {props.icon && <img src={props.icon} alt="" />}
      {props.value}
    </Container>
  )
}
