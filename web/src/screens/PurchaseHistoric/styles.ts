import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 10rem;
  gap: 1.5rem;
  width: 100%;
`
export const BackButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  align-self: flex-start;
`

export const Title = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 24px;
  align-self: flex-start;
`

export const HistoricContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 2rem;
`
