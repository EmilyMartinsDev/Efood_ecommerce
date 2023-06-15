import { HeaderLogo } from '../Header/styles'
import { FooterContainer, Content } from './styles'
import rede1 from '../../../public/images/REDE1.png'
import rede2 from '../../../public/images/REDE2.png'
import rede3 from '../../../public/images/REDE3.png'
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
