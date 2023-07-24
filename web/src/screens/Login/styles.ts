import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['off-white']};
`

export const LoginContainer = styled.div`
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

export const FormContainer = styled.form`
  background-color: ${(props) => props.theme['off-white']};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 25rem;
  min-width: 15rem;

  gap: 0.3rem;
  padding: 2rem 1.8rem;

  > p {
    color: ${(props) => props.theme['red-600']};
    font-size: 12px;
    margin-bottom: -12px;
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

export const MessageError = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme['red-300']};
  cursor: pointer;
`
