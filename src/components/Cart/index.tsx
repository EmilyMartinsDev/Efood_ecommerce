import { Title } from '../Card/styles'
import { Button } from '../CardProduto/styles'
import Text from '../Text'
import { FormataPreco } from '../../containers/ListaProduto/index.'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { close, remove } from '../../store/reducers/carrinho'
import { CardContainer, Overlay, SideBar, CartItem, InfoCart } from './styles'
import { RootRedux } from '../../store'
const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootRedux) => state.cart)
  const { items } = useSelector((state: RootRedux) => state.cart)

  const precoTotal = () => {
    return items.reduce((acc, i) => {
      return (acc += i.preco)
    }, 0)
  }

  return (
    <CardContainer className={isOpen ? 'open' : ''}>
      <Overlay onClick={() => dispatch(close())}></Overlay>
      <SideBar>
        <ul>
          {items.map((i) => (
            <CartItem key={i.id}>
              <div>
                <img src={i.foto} alt="img_produto" />
              </div>

              <div>
                <Title color="rosa" fontSize={18}>
                  {i.nome}
                </Title>
                <Text color="rosa" fontSize={14}>
                  {FormataPreco(i.preco)}
                </Text>
              </div>

              <button onClick={() => dispatch(remove(i.id))} />
            </CartItem>
          ))}
        </ul>
        <InfoCart>
          <span>
            <Text color="rosaClaro" fontSize={14}>
              valor total:
            </Text>
            <Text color="rosaClaro" fontSize={14}>
              {FormataPreco(precoTotal())}
            </Text>
          </span>
          <Button>Continuar com a entrega</Button>
        </InfoCart>
      </SideBar>
    </CardContainer>
  )
}
export default Cart
