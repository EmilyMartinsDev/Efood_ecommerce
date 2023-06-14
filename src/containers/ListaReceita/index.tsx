import Card from '../../components/Card'
import Restaurante from '../../models/Restaurante'
import { Container } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const ListaReceita = ({ restaurantes }: Props) => {
  return (
    <Container>
      {restaurantes.map((r) => (
        <Card
          id={r.id}
          banner={r.banner}
          description={r.description}
          name={r.name}
          infos={r.infos}
          rating={r.rating}
          key={r.id}
        />
      ))}
    </Container>
  )
}
export default ListaReceita
