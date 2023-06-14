import styled from 'styled-components'
import { cores } from '../../styles'
import { Texto } from '../Text/styles'

export const FooterContainer = styled.footer`
  height: 192px;
  background-color: ${cores.rosaClaro};
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${Texto} {
    margin-top: 2rem;
  }
`
export const Content = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`
