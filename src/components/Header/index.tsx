import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderTitle } from './styles'
import logo from '../../images/logo.png'
const Header = () => {
  return (
    <HeaderContainer>
      <div className="Hero">
        <Link to="/">
          <img src={logo} alt="efood" />
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
