import Card from '../../components/Card'
import { Restaurante } from '../../restaurante/restaurante'
import { Container } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const ListaReceita = ({ restaurantes }: Props) => {
  return (
    <Container>
      {restaurantes.map((r) => (
        <Card
          capa={r.capa}
          id={r.id}
          titulo={r.titulo}
          cardapio={r.cardapio}
          descricao={r.descricao}
          tipo={r.tipo}
          key={r.id}
          avaliacao={r.avaliacao}
          destacado={r.destacado}
        />
      ))}
    </Container>
  )
}
export default ListaReceita
