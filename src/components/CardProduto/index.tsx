import { Title } from '../Card/styles'
import { Button, Content } from './styles'
import Text from '../Text'

type Props = {
  id: number
  foto: string
  preco: number
  descricao: string
  nome: string
  porcao: string
}

const CardProduto = ({ id, foto, preco, descricao, porcao, nome }: Props) => {
  return (
    <Content>
      <img src={foto} alt="img" />
      <div>
        <Title color="rosaClaro" fontSize={18}>
          {nome}
        </Title>
        <Text color="rosaClaro" fontSize={14}>
          {descricao}
        </Text>
      </div>
    </Content>
  )
}
export default CardProduto
