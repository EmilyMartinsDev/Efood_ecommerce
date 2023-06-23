import styled from 'styled-components'
import { HeaderContainer } from '../../components/Header/styles'
import fundo from '../../images/fundo_perfil.png'
import { cores } from '../../styles'
export const FundoContainer = styled.div`
  ${HeaderContainer} {
    padding: 0;
  }
`
export const Encapsulador = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`
export const Banner = styled.div`
  height: 280px;
  color: ${cores.branco};
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  &::before {
    content: '';
    background-color: #000;
    position: absolute;
    opacity: 0.5;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .title {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    padding: 16px 0;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    text-transform: uppercase;
    line-height: 150%;
    span {
      font-size: 32px;
      font-style: italic;
    }
    @media (max-width: 1024px) {
      max-width: 80%;

      span, h2 {
        font-size: 24px;
      }

    }
    @media (max-width: 768px) {
      h2, span  {
        font-size: 16px;
      }
    }
`
