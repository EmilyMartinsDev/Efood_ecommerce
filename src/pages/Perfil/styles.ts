import styled from 'styled-components'
import { HeaderContainer } from '../../components/Header/styles'
import fundo from '../../images/fundo_perfil.png'
export const FundoContainer = styled.div`
  ${HeaderContainer} {
    padding: 2rem;
  }
`
export const Banner = styled.div`
  height: 184px;
  width: 100%;
  background-size: cover;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  position: relative;
  &::before {
    content: "";
    background-color: #000;
    position: absolute;
    opacity: 0.5;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`
