import { HeaderLogo } from '../Header/styles'
import { FooterContainer, Content } from './styles'
import rede1 from '../../assets/images/REDE1.svg'
import rede2 from '../../assets/images/REDE2.svg'
import rede3 from '../../assets/images/REDE3.svg'
import Text from '../Text'
const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <HeaderLogo>efood</HeaderLogo>
        <Content>
          <a href="#">
            <img src={rede1} alt="redes sociais" />
          </a>
          <a href="#">
            <img src={rede2} alt="redes sociais" />
          </a>
          <a href="#">
            <img src={rede3} alt="redes sociais" />
          </a>
        </Content>
      </div>
      <Text color="rosa" fontSize={10}>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
    </FooterContainer>
  )
}
export default Footer