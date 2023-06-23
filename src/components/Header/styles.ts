import styled from 'styled-components'
import { cores } from '../../styles'
import hero from '../../images/fundo.png'
export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .Hero {
    padding: 16px;
    height: 100%;
    width: 100%;
    background-image: url(${hero});
    background-size: cover;
  }
`
export const HeaderTitle = styled.h2`
  margin-top: 4rem;
  color: ${cores.rosa};
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const HeaderLogo = styled.span`
  margin: 0 auto;
  background-color: ${cores.branco};
  display: inline-block;
  font-weight: bold;
  color: ${cores.rosa};
  border: 2px solid ${cores.rosa};
  padding: 8px 16px;
`
