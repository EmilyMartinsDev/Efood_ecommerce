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
import star from '../../assets/images/icons8-estrela-48.png'
type Props = {
  id: number
  name: string
  banner: string
  description: string
  rating: number
  infos: string[]
}

const Card = ({ name, banner, description, rating, infos, id }: Props) => {
  return (
    <CardContainer>
      <img src={banner} alt={name} />
      <Image>
        {infos.map((i) => (
          <Tag key={id}>{i}</Tag>
        ))}
      </Image>
      <CardContent>
        <div>
          <Title color="rosa" fontSize={18}>
            {name}
          </Title>
          <Rating>
            {rating}
            <span>
              <img src={star} alt="star" />
            </span>
          </Rating>
        </div>
        <Text color="rosa" fontSize={14}>
          {description}
        </Text>
        <SaibaMais to="/perfil">Saiba mais</SaibaMais>
      </CardContent>
    </CardContainer>
  )
}
export default Card
