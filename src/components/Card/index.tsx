import {
  CardContainer,
  Image,
  Title,
  CardContent,
  Tag,
  SaibaMais,
  Rating
} from './styles'
import Text from '../Text'
import star from '../../images/icons8-estrela-48.png'
import { Produto } from '../../restaurante/restaurante'
type Props = {
  id: number
  titulo: string
  capa: string
  descricao: string
  tipo: string
  destacado?: boolean
  avaliacao?: number
  cardapio?: Produto[]
}

const Card = ({
  id,
  titulo,
  capa,
  descricao,
  tipo,
  avaliacao,
  destacado,
  cardapio
}: Props) => {
  return (
    <CardContainer>
      <img src={capa} alt={titulo} />
      <div className="infos">
        <Image>
          <Tag>{tipo}</Tag>
        </Image>
        {destacado && (
          <Image className="destacado">
            <Tag>Destaque da semana</Tag>
          </Image>
        )}
      </div>
      <CardContent>
        <div>
          <Title color="rosa" fontSize={18}>
            {titulo}
          </Title>
          <Rating>
            {avaliacao}
            <span>
              <img src={star} alt="star" />
            </span>
          </Rating>
        </div>
        <Text color="rosa" fontSize={14}>
          {descricao}
        </Text>
        <SaibaMais to={`/perfil/${id}`}>Saiba mais</SaibaMais>
      </CardContent>
    </CardContainer>
  )
}
export default Card
