import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  width: 100%;
  padding: 32px;
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
`
