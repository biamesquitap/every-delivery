import styled from 'styled-components'

export const Address = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  width: 40rem;
  height: 23.25rem;
  align-self: stretch;
  flex-grow: 0;

  background-color: ${(props) => props.theme['purple-100']};
  border-radius: 8px;
  padding: 2rem;

  > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    > p {
      font-size: 16px;
    }
    > span {
      font-size: 14px;
    }
  }
`

export const AddressInput = styled.input`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;

  border: 1px solid ${(props) => props.theme['purple-300']};
  border-radius: 4px;

  ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme['gray-200']};
  }

  &:active,
  &:focus,
  &:hover {
    border: 1px solid ${(props) => props.theme['purple-500']};
    border-radius: 4px;
  }
`
