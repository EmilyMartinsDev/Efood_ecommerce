import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'
export const Texto = styled.p<Props>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) =>
    props.color === 'rosa'
      ? cores.rosa
      : props.className === 'rosaClaro'
      ? cores.rosaClaro
      : cores.branco};
`
