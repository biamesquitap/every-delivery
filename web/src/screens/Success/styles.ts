import styled from 'styled-components'

export const BackButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  align-self: flex-start;
  padding: 2.5rem 10rem;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2.5rem 10rem;
  gap: 2rem;

  > p {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 18px;

    padding: 0 0 1rem 1rem;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 32px;
    color: ${(props) => props.theme['yellow-dark']};
  }

  > span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 2.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};

    border: 1px solid #8047f8;
    border-radius: 6px 36px;
    padding: 2.5rem;

    > div {
      display: flex;
      flex-direction: row;
      color: ${(props) => props.theme['base-text']};
      gap: 2rem;
      font-size: 16px;

      > p {
        font-size: 16px;
      }
      > span {
        font-size: 14px;
      }
    }
  }
`
