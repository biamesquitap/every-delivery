import React, { useState, ChangeEvent } from 'react'
import { Controller } from 'react-hook-form'

import OpenPassword from '../../assets/eye.svg'
import ClosePassword from '../../assets/ClosePassword.svg'

import {
  Container,
  HandlePassword,
  MaskInput,
  ErrorMessage,
  LabelForm,
  SeePassword,
  TextArea,
} from './styles'

interface InputProps {
  name: string
  labelContent: string
  control: any
  formState: any
  type: string
  mask?: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const noMaskValue = (str: string) => (str = str.replace(/[(). -]/g, ''))

export function Input(props: InputProps) {
  const [showPassword, setShowPassword] = useState(props.type !== 'password')
  const [openPassword, setOpenPassword] = useState(false)

  function handleSeePassword() {
    setShowPassword((state) => {
      return !state
    })
    setOpenPassword((state) => {
      return !state
    })
  }

  return (
    <Container>
      <LabelForm htmlFor={props.name}> {props.labelContent} </LabelForm>
      <Controller
        control={props.control}
        name={props.name}
        render={({ field, field: { onChange, value } }) => {
          function handleChange(event: any) {
            onChange({
              ...event,
              target: {
                ...event.target,
                value: props.mask
                  ? noMaskValue(event.target.value)
                  : event.target.value,
              },
            })
          }

          return (
            <>
              {props.type === 'textarea' ? (
                <TextArea
                  id={props.name}
                  {...field}
                  value={value}
                  placeholder={props.placeholder}
                />
              ) : (
                <HandlePassword>
                  <MaskInput
                    id={props.name}
                    {...field}
                    mask={props.mask || ''}
                    maskChar=""
                    value={value}
                    onChange={handleChange}
                    type={
                      showPassword
                        ? props.type === 'password'
                          ? 'text'
                          : props.type
                        : 'password'
                    }
                  />
                  {props.type === 'password' && (
                    <SeePassword onClick={handleSeePassword}>
                      {openPassword ? (
                        <img src={ClosePassword} alt="" />
                      ) : (
                        <img src={OpenPassword} alt="" />
                      )}
                    </SeePassword>
                  )}
                </HandlePassword>
              )}
            </>
          )
        }}
      />
      {props.formState && (
        <ErrorMessage>{props.formState.message}</ErrorMessage>
      )}
    </Container>
  )
}
