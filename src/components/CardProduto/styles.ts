import styled from 'styled-components'
import { CardContent, Title } from '../Card/styles'
import { cores } from '../../styles'
import { Texto } from '../Text/styles'

export const Content = styled(CardContent)`
  background-color: ${cores.rosa};
  max-width: 320px;
  width: 100%;
  height: 336px;
  padding: 0;
  & > div {
    display: block;
  }
  ${Texto}, ${Title} {
    text-align: start;
    margin-top: 8px;
  }
  img {
    display: block;
    max-width: 304px;
    width: 100%;
    margin: 0 auto;
    object-fit: cover;
    max-height: 168px;
    height: 100%;
  }
`

export const Button = styled.button`
  width: 100%;
  margin-top: 8px;
  color: ${cores.rosa};
  background-color: ${cores.rosaClaro};
  font-weight: bold;
  border: 0;
  display: flex;
  align-items: center;
  height: 24px;
  justify-content: center;
  cursor: pointer;
`
