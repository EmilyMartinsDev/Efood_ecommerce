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
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  .produto {
    background-color: ${cores.rosa};
    padding: 6px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: end;
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
  .imageProduct {
    width: 100%;
    height: 280px;
    object-fit: cover;
    max-width: 280px;
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
  padding: 32px;
  grid-template-column: 1fr 2fr;
  gap: 5%;
  background-color: ${cores.rosa};
  display: flex;
  margin: 0 auto;
  max-width: 1024px;
  height: 344px;
  z-index: 1;
  position: relative;
  ${Button} {
    width: 100%;
    max-width: 218px;
  }
  ${Texto} {
    line-height: 22px;
  }
  @media (max-width: 768px) {
    height: 100%;
    max-width: 85%;
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
  }
  span {
    margin: 16px 0;
    color: ${cores.brancoRosa};
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
