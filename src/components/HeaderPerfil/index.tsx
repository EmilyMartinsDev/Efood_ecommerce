import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderLogo } from '../Header/styles'
import { Container, LinkRestaurante } from './styles'
const HeaderPerfil = () => {
  return (
    <HeaderContainer>
      <Container>
        <LinkRestaurante to="/">Restaurantes</LinkRestaurante>
        <div>
          <Link to="/">
            <HeaderLogo> efood </HeaderLogo>
          </Link>
        </div>
        <span>0 itens no carrinho</span>
      </Container>
    </HeaderContainer>
  )
}
export default HeaderPerfil
