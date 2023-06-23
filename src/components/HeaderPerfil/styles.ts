import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'
import { HeaderContainer } from '../Header/styles'

export const HeaderContainerPerfil = styled(HeaderContainer)`
  padding: 0;
  height: 186px;
  margin: 0;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 960px;
  align-items: center;
  color: ${cores.rosa};
  .itemCart {
    cursor: pointer;
    padding: 8px 16px;
    &:hover {
      border: 1px solid ${cores.brancoRosa};
      border-radius: 8px;
      background-color: ${cores.rosa};
      color: ${cores.brancoRosa};
    }
  }
`
export const LinkRestaurante = styled(Link)`
  color: ${cores.rosa};
  @media (max-width: 768px) {
    padding-right: 24px;
  }
`
