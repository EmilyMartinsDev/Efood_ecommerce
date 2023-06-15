import { Title } from '../Card/styles'
import { Button, Content } from './styles'
import Text from '../Text'

type Props = {
  id: number
  name: string
  banner: string
  description: string
}

const CardProduto = ({ name, banner, description }: Props) => {
  return (
    <div>
      <Content>
        <img src={banner} alt="img" />
        <div>
          <Title color="rosaClaro" fontSize={18}>
            {name}
          </Title>
          <Text color="rosaClaro" fontSize={14}>
            {description}
          </Text>
        </div>
        <Button>Adicionar ao carrinho</Button>
      </Content>
    </div>
  )
}
export default CardProduto
