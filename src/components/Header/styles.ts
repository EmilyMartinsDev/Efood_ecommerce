import styled from 'styled-components'
import { cores } from '../../styles'
import hero from '../../images/fundo.png'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 384px;
  .Hero {
    padding: 40px 0 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    background-image: url(${hero});
    background-size: cover;

    & > img {
      width: 125px;
      height: 56px;
    }
  }
`
export const HeaderTitle = styled.h2`
  margin-top: 4rem;
  font-size: 36px;
  color: ${cores.rosa};
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
