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
  const formataDescricao = (descricao: string) => {
    if (descricao.length > 240) {
      return descricao.slice(0, 240) + '...'
    }
    return descricao
  }
  return (
    <Content>
      <img src={foto} alt="img" />
      <div>
        <Title color="rosaClaro" fontSize={18}>
          {nome}
        </Title>
        <Text color="rosaClaro" fontSize={14}>
          {formataDescricao(descricao)}
        </Text>
      </div>
    </Content>
  )
}
export default CardProduto
