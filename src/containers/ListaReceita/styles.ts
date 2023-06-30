import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  padding: 4rem 0;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  column-gap: 2rem;
  row-gap: 3rem;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    img {
      width: 100%;
    }
  }
`
