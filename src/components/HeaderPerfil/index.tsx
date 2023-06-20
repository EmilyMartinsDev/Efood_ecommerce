import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderLogo } from '../Header/styles'
import { Container, LinkRestaurante } from './styles'
import { RootRedux } from '../../store'
import { open } from '../../store/reducers/carrinho'
import { useDispatch, useSelector } from 'react-redux'
const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootRedux) => state.cart)
  return (
    <HeaderContainer>
      <Container>
        <LinkRestaurante to="/">Restaurantes</LinkRestaurante>
        <div>
          <Link to="/">
            <HeaderLogo> efood </HeaderLogo>
          </Link>
        </div>
        <span onClick={() => dispatch(open())}>
          {items.length} itens no carrinho
        </span>
      </Container>
    </HeaderContainer>
  )
}
export default HeaderPerfil
