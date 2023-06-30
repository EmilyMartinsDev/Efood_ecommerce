import styled from 'styled-components'
import { cores } from '../../styles'
import { Texto } from '../Text/styles'
import { Link } from 'react-router-dom'

export const CardContainer = styled.div`
  position: relative;
  ${Texto} {
    margin: 8px 0;
    line-height: 22px;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    max-height: 240px;
  }

  width: 100%;
  max-width: 472px;
`
export const Tag = styled.span`
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  width: 61px;
  height: 26px;
  font-size: 14px;
  padding: 4px;
  margin-right: 5px;
  @media (max-width: 768px) {
    padding: 4px 8px;
  }
`
export const Image = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  margin-top: 8px;

  &.destacado {
    top: 8px;
    right: 72px;
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
  padding: 8px;
  border: 1px solid ${cores.rosa};
  border-top: 0;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const Title = styled(Texto)`
  font-weight: bold;
  margin-bottom: 16px;
`

export const SaibaMais = styled(Link)`
  margin-top: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  display: flex;
  width: 100%;
  max-width: 82px;
  height: 24px;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
`
