import { Title } from '../Card/styles'
import { Button } from '../CardProduto/styles'
import Text from '../Text'
import pizza from '../../images/pizza.png'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { close } from '../../store/reducers/carrinho'
import { CardContainer, Overlay, SideBar, CartItem, InfoCart } from './styles'
import { RootRedux } from '../../store'
const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootRedux) => state.cart)
  return (
    <CardContainer className={isOpen ? 'open' : ''}>
      <Overlay onClick={() => dispatch(close())}></Overlay>
      <SideBar>
        <ul>
          <CartItem>
            <div>
              <img src={pizza} alt="img_produto" />
            </div>

            <div>
              <Title color="rosa" fontSize={18}>
                Nome
              </Title>
              <Text color="rosa" fontSize={14}>
                preco
              </Text>
            </div>

            <button />
          </CartItem>
        </ul>
        <InfoCart>
          <span>
            <Text color="rosaClaro" fontSize={14}>
              valor total:
            </Text>
            <Text color="rosaClaro" fontSize={14}>
              200
            </Text>
          </span>
          <Button>Continuar com a entrega</Button>
        </InfoCart>
      </SideBar>
    </CardContainer>
  )
}
export default Cart
