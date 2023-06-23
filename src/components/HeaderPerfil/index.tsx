import { Link } from 'react-router-dom'
import { HeaderLogo } from '../Header/styles'
import { Container, LinkRestaurante, HeaderContainerPerfil } from './styles'
import { RootRedux } from '../../store'
import { open } from '../../store/reducers/carrinho'
import { useDispatch, useSelector } from 'react-redux'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootRedux) => state.cart.items)
  return (
    <HeaderContainerPerfil>
      <div className="Hero">
        <Container>
          <LinkRestaurante to="/">Restaurantes</LinkRestaurante>
          <div>
            <Link to="/">
              <HeaderLogo> efood </HeaderLogo>
            </Link>
          </div>
          <span className="itemCart" onClick={() => dispatch(open())}>
            {items.length} itens no carrinho
          </span>
        </Container>
      </div>
    </HeaderContainerPerfil>
  )
}
export default HeaderPerfil
