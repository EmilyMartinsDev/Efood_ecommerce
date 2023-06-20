import Header from '../../components/Header'
import ListaReceita from '../../containers/ListaReceita'
import Footer from '../../components/Footer'

import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()
  if (!restaurantes) {
    return <></>
  }
  return (
    <>
      <Header />
      <ListaReceita restaurantes={restaurantes} />
      <Footer />
    </>
  )
}
export default Home
