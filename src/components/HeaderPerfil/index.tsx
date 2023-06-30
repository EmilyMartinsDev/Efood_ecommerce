import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, LinkRestaurante, HeaderContainerPerfil } from './styles'
import { RootRedux } from '../../store'
import { open } from '../../store/reducers/carrinho'
import logo from '../../images/logo.png'

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
              <img src={logo} alt="logo" />
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
