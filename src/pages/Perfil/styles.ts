import styled from 'styled-components'
import { HeaderContainer } from '../../components/Header/styles'
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
  background-size: cover;
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
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    line-height: 150%;
    p {
      margin-top: 32px;
      font-size: 32px;
      font-weight: 100;
    }  h2 {
      margin-bottom: 32px;
      line-height: 40px;
      font-size: 32px;
    }
    @media (max-width: 1024px) {
      max-width: 80%;
      h2,p {

        font-size: 24px;
      }


    }
    @media (max-width: 768px) {
      h2, span  {
        font-size: 16px;
      }
    }
`
