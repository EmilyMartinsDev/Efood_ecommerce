import ListaProduto from '../../containers/ListaProduto/index.'
import Footer from '../../components/Footer'
import { FundoContainer, Banner } from './styles'

import HeaderPerfil from '../../components/HeaderPerfil'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Produto, Restaurante } from '../../restaurante/restaurante'

const Perfil = () => {
  const { id } = useParams()
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProdutos(res.cardapio))
  }, [id])

  if (!produtos) {
    return <h2>Carregando</h2>
  }
  return (
    <>
      <FundoContainer>
        <HeaderPerfil />
        <Banner style={{}}></Banner>
      </FundoContainer>
      <ListaProduto produtos={produtos} />
      <Footer />
    </>
  )
}
export default Perfil
