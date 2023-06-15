import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  width: 100%;
  max-width: 960px;
  align-items: center;
  color: ${cores.rosa};
`
export const LinkRestaurante = styled(Link)`
  color: ${cores.rosa};
`
