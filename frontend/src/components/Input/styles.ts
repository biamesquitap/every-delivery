import InputMask from 'react-input-mask'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: transparent;
`

export const HandlePassword = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 1rem;
  /* border-bottom: 2px solid ${(props) => props.theme['purple-500']};
  background-color: transparent;

  &:focus,
  &:hover {
    border: none;
    border-bottom: 2px solid ${(props) => props.theme['purple-500']};
    box-shadow: none;
  } */
`

interface MaskInputProps {
  width?: string
}

export const MaskInput = styled(InputMask)<MaskInputProps>`
  width: ${(props) => props.width || '100%'};
  background-color: transparent;
  padding: 0.2rem 0;
  border: 0;
  display: flex;
  border-bottom: 2px solid ${(props) => props.theme['purple-500']};
  margin-bottom: 1rem;
  box-shadow: 0;
  outline: 0;

  &:focus {
    border: none;
    border-bottom: 2px solid ${(props) => props.theme['purple-500']};
    box-shadow: none;
  }
`
export const SeePassword = styled.a`
  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;

  padding-bottom: 15px;
  border: none;
  background-color: transparent;

  &:focus {
    border: none;
    box-shadow: none;
  }

  &:hover {
    cursor: pointer;
  }
`

export const ErrorMessage = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  margin-top: -12px;
  margin-bottom: 1rem;
  color: ${(props) => props.theme['red-600']};
`

export const LabelForm = styled.label`
  color: ${(props) => props.theme['purple-500']};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
`

export const BorderContainer = styled.div`
  border-bottom: 2px solid ${(props) => props.theme['purple-500']};
  background-color: transparent;
`

export const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 1rem 0;
  border: 1px solid ${(props) => props.theme['gray-900']};
  outline: none;
  width: 100%;
  min-height: 5rem;
  resize: none;
  margin-top: 0.5rem;
`

export const Select = styled.select`
  font-family: 'Poppins', sans-serif;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 100%;
  background-color: transparent;
  padding: 0.3rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['purple-500']};
  margin-bottom: 8px;

  box-shadow: 0;
  outline: 0;

  &:focus {
    border: none;
    border-bottom: 2px solid ${(props) => props.theme['purple-500']};
    box-shadow: none;
  }
`

export const Option = styled.option`
  font-size: 12px;
  padding: 4px;
  color: ${(props) => props.theme['gray-300']};
  font-family: Poppins, 'sans-serif';

  font-weight: 500;
`
