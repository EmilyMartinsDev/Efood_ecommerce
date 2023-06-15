import Header from '../../components/Header'
import ListaReceita from '../../containers/ListaReceita'
import Restaurante from '../../models/Restaurante'
import LaDolce from '../../images/laDolce.png'
import sushi from '../../images/img.png'
import Footer from '../../components/Footer'
const restaurantes: Restaurante[] = [
  {
    id: 1,
    name: 'Hioki Sushi ',
    banner: sushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    rating: 4.9,
    infos: ['destaque', 'Japonesa']
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    banner: LaDolce,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    infos: ['italiana']
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    banner: LaDolce,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    infos: ['italiana']
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    banner: LaDolce,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    infos: ['italiana']
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <ListaReceita restaurantes={restaurantes} />
      <Footer />
    </>
  )
}
export default Home
