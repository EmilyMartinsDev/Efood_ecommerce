import styled from 'styled-components'
import { cores } from '../../styles'
import { Texto } from '../Text/styles'
import { Link } from 'react-router-dom'
export const CardContainer = styled.div`
  position: relative;
  ${Texto} {
    margin: 8px 0;
  }
`
export const Tag = styled.span`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  padding: 8px 16px;
  margin-right: 5px;
  border-radius: 8px;
`
export const Image = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  margin-top: 8px;
  img {
    width: 100%;
  }
`
export const Rating = styled.span`
  color: ${cores.rosa};
  display: flex;
  justify-content: baseline;
  align-items: center;
  font-weight: bold;
  img {
    margin-left: 2px;
    width: 20px;
  }
`
export const CardContent = styled.div`
  background-color: ${cores.branco};
  padding: 1rem;

  & > div {
    display: flex;
    justify-content: space-between;
  }
`
export const Title = styled(Texto)`
  font-weight: bold;
  margin-bottom: 16px;
`

export const SaibaMais = styled(Link)`
  margin-top: 8px;
  display: inline-block;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  padding: 8px;
`