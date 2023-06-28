import styled from 'styled-components'
import { cores } from '../../styles'
import { Button } from '../CardProduto/styles'
import lixeira from '../../images/reciclagem.png'

type widthInput = {
  maxWidth?: string
}

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.7;
`
export const CardContainer = styled.div`
  width: 100%;
  display: none;
  position: fixed;
  justify-content: end;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;

  &.open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  height: 100%;
  padding: 16px;
  width: 100%;
  display: none;
  z-index: 1;
  max-width: 360px;
  background-color: ${cores.rosa};
  &.handleCart {
    display: block;
  }
  &.handleAddress {
    display: block;
  }
  &.handleCard {
    display: block;
  }
  &.success {
    display: block;
    h3 {
      margin-top: 8px;
      color: ${cores.rosaClaro};
      font-size: 16px;
    }
    p {
      line-height: 22px;
      font-size: 14px;
      color: ${cores.brancoRosa};
      margin: 16px 0;
    }
  }
  p.semItem {
    color: ${cores.brancoRosa};
    font-weight: bold;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }
`
export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  background-color: ${cores.rosaClaro};
  margin-bottom: 8px;
  @media (max-width: 768px) {
    display: block;
  }

  img {
    width: 100%;
    height: 80px;
    max-width: 80px;
    object-fit: cover;
    margin-right: 8px;
    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 16px;
      display: block;
      max-width: 100%;
    }
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    cursor: pointer;
    margin-left: auto;
    height: 16px;
    object-fit: cover;
    border: none;
  }
`
export const InfoCart = styled.div`
  margin-top: 16px;

  span {
    display: flex;
    justify-content: space-between;
  }

  ${Button} {
    display: block;
    margin: 8px auto;
    width: 95%;
  }
`
export const InputGroup = styled.div<widthInput>`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
  input {
    height: 32px;
    margin-bottom: 8px;
    background-color: ${cores.rosaClaro};
    border: none;
    padding: 0 8px;

    &.error {
      border: 2px solid yellow;
    }
  }
  label {
    margin-bottom: 4px;
    color: ${cores.rosaClaro};
    font-weight: bold;
    font-size: 14px;
  }
  &.flexInput {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
