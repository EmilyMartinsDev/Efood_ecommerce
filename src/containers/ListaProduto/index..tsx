import CardProduto from '../../components/CardProduto'
import Produto from '../../models/Produto'
import { ContainerProduct } from './styles'
type Props = {
  produtos: Produto[]
}
const ListaProduto = ({ produtos }: Props) => {
  return (
    <ContainerProduct>
      {produtos.map((p) => (
        <CardProduto
          key={p.id}
          banner={p.banner}
          description={p.description}
          id={p.id}
          name={p.name}
        />
      ))}
    </ContainerProduct>
  )
}
export default ListaProduto
