import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${cores.rosaClaro};
  widht: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`
export const HeaderTitle = styled.h2`
  margin-top: 4rem;
  color: ${cores.rosa};
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
