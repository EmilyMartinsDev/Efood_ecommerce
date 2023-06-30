import styled from 'styled-components'
import { cores } from '../../styles'
import { Texto } from '../Text/styles'

export const FooterContainer = styled.footer`
  height: 298px;
  background-color: ${cores.rosaClaro};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  ${Texto} {
    margin-top: 1rem;
    max-width: 480px;
    text-align: center;
  }
`
export const Content = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`
