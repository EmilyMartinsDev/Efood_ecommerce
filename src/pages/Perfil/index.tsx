import Header from '../../components/Header'
import Produto from '../../models/Produto'
import pizza from '../../images/pizza.png'
import fundo from '../../images/fundo_perfil.png'
import ListaProduto from '../../containers/ListaProduto/index.'
import Footer from '../../components/Footer'
import { FundoContainer, Banner } from './styles'
const produtos: Produto[] = [
  {
    id: 1,
    banner: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita'
  },
  {
    id: 2,
    banner: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita'
  },

  {
    id: 3,
    banner: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita'
  },
  {
    id: 4,
    banner: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita'
  },
  {
    id: 5,
    banner: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita'
  },
  {
    id: 6,
    banner: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita'
  }
]

const Perfil = () => {
  return (
    <>
      <FundoContainer>
        <Header />
        <Banner style={{ backgroundImage: `url(${fundo})` }}></Banner>
      </FundoContainer>
      <ListaProduto produtos={produtos} />
      <Footer />
    </>
  )
}
export default Perfil
