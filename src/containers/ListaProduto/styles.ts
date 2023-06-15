import styled from 'styled-components'
import { Container } from '../ListaReceita/styles'

export const ContainerProduct = styled(Container)`
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    img {
      width: 100%;
    }
  }
  @media (max-width: 512px) {
    grid-template-columns: 1fr;
  }
`
