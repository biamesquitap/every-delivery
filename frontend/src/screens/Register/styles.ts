import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
`

export const RegisterFormContainer = styled.form`
  background-color: ${(props) => props.theme['off-white']};
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 25rem;
  gap: 0.3rem;
  padding: 2rem 1.8rem;

  > p {
    color: ${(props) => props.theme['red-600']};
    font-size: 12px;
    margin-bottom: -12px;
  }
`

export const RequiredFields = styled.div`
  color: ${(props) => props.theme['purple-800']};
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 10px;
`

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  > img {
    max-width: 40rem;
    max-height: 40rem;
    align-self: flex-start;
    justify-self: flex-start;
  }
`

export const RegisterSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 100%;
  background-color: transparent;
  padding: 0.3rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['orange-400']};
  margin-bottom: 8px;

  box-shadow: 0;
  outline: 0;

  &:focus {
    border: none;
    border-bottom: 2px solid ${(props) => props.theme['purple-800']};
    box-shadow: none;
  }
`
