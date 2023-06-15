import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderLogo, HeaderTitle } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          {' '}
          <HeaderLogo>efood </HeaderLogo>
        </Link>
        <HeaderTitle>
          Viva experiências gastronômicas
          <br /> no conforto da sua casa
        </HeaderTitle>
      </div>
    </HeaderContainer>
  )
}
export default Header
