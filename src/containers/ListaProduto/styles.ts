import styled from 'styled-components'
import { Container } from '../ListaReceita/styles'
import { cores } from '../../styles'
import { Button } from '../../components/CardProduto/styles'
import { Texto } from '../../components/Text/styles'

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

  .produto {
    background-color: ${cores.rosa};
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    ${Button} {
      display: block;
      margin: 0 auto;
      max-width: 80%;
    }
  }
`
export const Modal = styled.div`
  position: fixed;

  top: 0;
  display: none;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  justify-content: center;
  align-items: center;

  &.visible {
    display: block;
  }
  img {
    width: 100%;
    max-width: 320px;
  }
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  display: grid;
  padding: 48px;
  grid-template-column: 1fr 2fr;
  gap: 5%;
  background-color: ${cores.rosa};
  display: flex;
  margin: 0 auto;
  max-width: 960px;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    padding: 32px;
    max-width: 80%;
    display: block;
    & > img {
      max-width: 100%;
      object-fit: cover;
    }
  }

  img {
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .fechar {
    position: absolute;
    top: 0;
    right: 0;
    padding: 32px;
    cursor: pointer;
    max-width: 120px;
  }
`
