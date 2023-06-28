import { Title } from '../Card/styles'
import { Button } from '../CardProduto/styles'
import Text from '../Text'
import { FormataPreco } from '../../containers/ListaProduto/index.'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import InputMask from 'react-input-mask'
import { close, remove } from '../../store/reducers/carrinho'
import {
  CardContainer,
  Overlay,
  SideBar,
  CartItem,
  InfoCart,
  InputGroup
} from './styles'
import { RootRedux } from '../../store'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { clear } from '../../store/reducers/carrinho'
const Cart = () => {
  const precoTotal = () => {
    return items.reduce((acc, i) => {
      return (acc += i.preco)
    }, 0)
  }

  const campoIncorreto = (campo: string) => {
    const alterado = campo in form.touched
    const erro = campo in form.errors

    return alterado && erro
  }

  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootRedux) => state.cart)

  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const [handleCart, setHandleCart] = useState(true)
  const [handleAddress, setHandleAddress] = useState(false)
  const [handleCard, setHandleCard] = useState(false)
  const [sucesso, setSucesso] = useState(false)

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      zipCode: '',
      city: '',
      numberHouse: '',
      complement: '',
      cardNumber: '',
      cardName: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(8, 'o campo deve conter no minimo 8 caracteres')
        .required('esse campo é obrigatório'),
      description: Yup.string().required('esse campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'o campo deve conter no minimo 8 caracteres')
        .required('esse campo é obrigatório'),
      city: Yup.string().required('esse campo é obrigatório'),
      numberHouse: Yup.string().required('esse campo é obrigatório'),
      complement: Yup.string(),
      cardNumber: Yup.string()
        .min(13, 'conter no minimo 13 caracteres')
        .required('esse campo é obrigatório'),
      cardName: Yup.string()
        .min(8, 'o campo deve conter no minimo 8 caracteres')
        .required('esse campo é obrigatório'),
      code: Yup.string()
        .min(3, 'o campo deve conter no minimo 8 caracteres')
        .required('esse campo é obrigatório'),
      month: Yup.string().required('esse campo é obrigatório'),
      year: Yup.string().required('esse campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            city: values.city,
            description: values.description,
            number: Number(values.numberHouse),
            zipCode: values.zipCode,
            complement: values.complement
          }
        },
        payment: {
          card: {
            code: Number(values.code),
            name: values.cardName,
            number: values.cardNumber,
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        },
        products: items.map((i) => ({
          id: i.id,
          price: i.preco
        }))
      })
    }
  })
  const verificaCamposEndereco = () => {
    if (
      !form.values.receiver ||
      !form.values.description ||
      !form.values.zipCode ||
      !form.values.city ||
      !form.values.numberHouse
    ) {
      return true
    }
    return false
  }

  const verificaCamposCard = () => {
    if (
      !form.values.cardNumber ||
      !form.values.cardName ||
      !form.values.code ||
      !form.values.month ||
      !form.values.year
    ) {
      return true
    }
    return false
  }
  return (
    <CardContainer className={isOpen ? 'open' : ''}>
      <Overlay onClick={() => dispatch(close())}></Overlay>
      <SideBar className={handleCart ? 'handleCart' : ''}>
        {items.length === 0 ? (
          <p className="semItem">
            Carrinho vazio! Adicione um item para prosseguir
          </p>
        ) : (
          <>
            <ul>
              {items.map((i) => (
                <CartItem key={i.id}>
                  <div>
                    <img src={i.foto} alt="img_produto" />
                  </div>

                  <InputGroup>
                    <Title color="rosa" fontSize={18}>
                      {i.nome}
                    </Title>
                    <Text color="rosa" fontSize={14}>
                      {FormataPreco(i.preco)}
                    </Text>
                  </InputGroup>

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
              <Button
                type="button"
                onClick={() => {
                  setHandleCart(false)
                  setHandleAddress(true)
                }}
              >
                Continuar com a entrega
              </Button>
            </InfoCart>
          </>
        )}
      </SideBar>

      <SideBar className={handleAddress ? 'handleAddress' : ''}>
        <form onSubmit={form.handleSubmit}>
          <Title color="rosaClaro" fontSize={16}>
            Entrega
          </Title>
          <InputGroup>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              type="text"
              id="receiver"
              name="receiver"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={campoIncorreto('receiver') ? 'error' : ''}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="description">Endereço</label>
            <input
              type="text"
              id="description"
              name="description"
              value={form.values.description}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={campoIncorreto('description') ? 'error' : ''}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={campoIncorreto('city') ? 'error' : ''}
            />
          </InputGroup>
          <InputGroup className="flexInput">
            <InputGroup maxWidth="155px">
              <label htmlFor="zipCode">CEP</label>
              <InputMask
                mask="99999-999"
                type="text"
                id="zipCode"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={campoIncorreto('zipCode') ? 'error' : ''}
              />
            </InputGroup>
            <InputGroup maxWidth="155px">
              <label htmlFor="numberHouse">Número</label>
              <input
                type="text"
                id="numberHouse"
                name="numberHouse"
                value={form.values.numberHouse}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={campoIncorreto('numberHouse') ? 'error' : ''}
              />
            </InputGroup>
          </InputGroup>
          <InputGroup>
            <label htmlFor="complement">Complemento - opcional</label>
            <input
              type="text"
              id="complement"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={campoIncorreto('complement') ? 'error' : ''}
            />
          </InputGroup>

          <Button
            type="button"
            disabled={verificaCamposEndereco()}
            onClick={() => {
              setHandleAddress(false)
              setHandleCard(true)
            }}
          >
            Continuar com o pagamento
          </Button>

          <Button
            type="button"
            onClick={() => {
              setHandleAddress(false)
              setHandleCart(true)
            }}
          >
            voltar ao carrinho
          </Button>
        </form>
      </SideBar>

      <SideBar className={handleCard ? 'handleCard' : ''}>
        <h3>Pagamento: valor a pagar: {FormataPreco(precoTotal())} </h3>
        <form onSubmit={form.handleSubmit}>
          <InputGroup>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={form.values.cardName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={campoIncorreto('cardName') ? 'error' : ''}
            />
          </InputGroup>
          <InputGroup className="flexInput">
            <InputGroup maxWidth="228px">
              <label htmlFor="cardNumber">Número no cartão</label>
              <InputMask
                mask="9999 9999 9999 9999"
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={campoIncorreto('cardNumber') ? 'error' : ''}
              />
            </InputGroup>
            <InputGroup maxWidth="88px">
              <label htmlFor="code">CVV</label>
              <InputMask
                mask="999"
                type="text"
                id="code"
                name="code"
                value={form.values.code}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={campoIncorreto('code') ? 'error' : ''}
              />
            </InputGroup>
          </InputGroup>
          <InputGroup className="flexInput">
            <InputGroup maxWidth="155px">
              <label htmlFor="month">Mês de vencimento</label>
              <InputMask
                mask="99"
                type="text"
                id="month"
                name="month"
                value={form.values.month}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={campoIncorreto('month') ? 'error' : ''}
              />
            </InputGroup>
            <InputGroup maxWidth="155px">
              <label htmlFor="year">Ano de vencimento</label>
              <InputMask
                mask="9999"
                type="text"
                id="year"
                name="year"
                value={form.values.year}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={campoIncorreto('year') ? 'error' : ''}
              />
            </InputGroup>
          </InputGroup>

          <Button
            type="submit"
            disabled={verificaCamposCard()}
            onClick={() => {
              setHandleCard(false)
              setSucesso(true)
            }}
          >
            Finalizar
          </Button>
          <Button
            type="button"
            onClick={() => {
              setHandleCard(false)
              setHandleAddress(true)
            }}
          >
            voltar edição de endereço
          </Button>
        </form>
      </SideBar>
      {isSuccess && (
        <SideBar className={sucesso ? 'success' : ''}>
          <h3>Ordem do pedido- {data?.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. Lembre-se da importância de
            higienizar as mãos após o recebimento do pedido, garantindo assim
            sua segurança e bem-estar durante a refeição. Esperamos que desfrute
            de uma deliciosa e agradável experiência gastronômica. Bom apetite!
          </p>
          <Button
            type="button"
            onClick={() => {
              setSucesso(false)
              dispatch(clear())
              setHandleCart(true)
            }}
          >
            Concluir
          </Button>
        </SideBar>
      )}
    </CardContainer>
  )
}
export default Cart
