import ListaProduto from '../../containers/ListaProduto/index.'
import Footer from '../../components/Footer'
import { FundoContainer, Banner, Encapsulador } from './styles'

import HeaderPerfil from '../../components/HeaderPerfil'
import { useParams } from 'react-router-dom'
import Cart from '../../components/Cart'
import { useGetProdutosQuery } from '../../services/api'
const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetProdutosQuery(id!)
  if (!restaurante) {
    return <h2>Carregando</h2>
  }
  const produtos = restaurante.cardapio
  return (
    <Encapsulador>
      <FundoContainer>
        <HeaderPerfil />
        <Banner style={{}}></Banner>
      </FundoContainer>
      <ListaProduto produtos={produtos} />
      <Footer />
      <Cart />
    </Encapsulador>
  )
}
export default Perfil
