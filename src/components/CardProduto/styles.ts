import styled from 'styled-components'
import { CardContent } from '../Card/styles'
import { cores } from '../../styles'
import { Texto } from '../Text/styles'

export const Content = styled(CardContent)`
  background-color: ${cores.rosa};

  & > div {
    display: block;
  }
  ${Texto} {
    margin-top: 8px;
  }
`

export const Button = styled.button`
  width: 100%;
  margin-top: 8px;
  color: ${cores.rosa};
  background-color: ${cores.rosaClaro};
  font-weight: bold;
  border: 0;
  padding: 8px;
  cursor: pointer;
`
