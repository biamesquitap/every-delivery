import styled from 'styled-components'

export const Container = styled.div``

export const MenuContent = styled.div`
  background-color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  padding: 6rem 10rem;

  gap: 3.5rem;

  > div {
    display: flex;
    align-items: flex-start;

    flex-direction: column;
    gap: 4rem;

    > h1 {
      font-family: 'Baloo 2', sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 130%;

      margin-bottom: 1rem;

      color: ${(props) => props.theme['base-title']};
    }

    > h4 {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;

      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const MenuBody = styled.div``

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > img {
    padding: 2rem;
    max-width: 40rem;
    max-height: 40rem;
  }

  > div {
    > h1 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: bold;
      font-size: 48px;
      text-align: center;

      max-width: 30rem;
      margin-bottom: 2rem;
      color: ${(props) => props.theme['purple-500']};
    }

    > h4 {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 20px;
      text-align: center;
      margin-bottom: 2rem;
      color: ${(props) => props.theme['gray-500']};
    }
  }
`

export const IconsGrid = styled.div`
  display: grid;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  gap: 1rem;

  color: ${(props) => props.theme['base-text']};

  > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`

export const MenuContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 0 10rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  gap: 2rem;
`

export const SearchProduct = styled.input`
  border-radius: 30px;
  background-color: ${(props) => props.theme['purple-100']};
  padding: 0.5rem;
  width: 20rem;
  border-color: ${(props) => props.theme['purple-300']};
`

export const SelectItem = styled.select`
  border-radius: 30px;
  background-color: ${(props) => props.theme['purple-100']};
  padding: 0.5rem;
  width: 10rem;
  border-color: ${(props) => props.theme['purple-300']};
`
