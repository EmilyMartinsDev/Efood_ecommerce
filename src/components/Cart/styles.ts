import styled from 'styled-components'
import { cores } from '../../styles'
import { Button } from '../CardProduto/styles'
import lixeira from '../../images/reciclagem.png'
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
  z-index: 1;
  max-width: 360px;
  background-color: ${cores.rosa};
`
export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  background-color: ${cores.rosaClaro};
  img {
    width: 100%;
    height: 80px;
    max-width: 80px;
    object-fit: cover;
    margin-right: 8px;
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
