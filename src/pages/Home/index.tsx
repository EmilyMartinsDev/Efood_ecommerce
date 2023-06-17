import Header from '../../components/Header'
import ListaReceita from '../../containers/ListaReceita'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { Restaurante } from '../../restaurante/restaurante'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header />
      <ListaReceita restaurantes={restaurantes} />
      <Footer />
    </>
  )
}
export default Home
