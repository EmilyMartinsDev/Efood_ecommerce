import { useState } from 'react'
import fechar from '../../images/fechar.png'
import { Title } from '../../components/Card/styles'
import CardProduto from '../../components/CardProduto'
import { Button } from '../../components/CardProduto/styles'
import { Texto } from '../../components/Text/styles'
import { Produto } from '../../restaurante/restaurante'
import { ContainerProduct, Modal, ModalContent } from './styles'
type Props = {
  produtos: Produto[]
}
type ModalP = {
  nome: string
  isVisible: boolean
  descricao: string
  porcao: string
  preco: number
  foto: string
}

const ListaProduto = ({ produtos }: Props) => {
  const FormataPreco = (preco = 0) => {
    return Intl.NumberFormat('pt-Br', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const [modal, setModal] = useState<ModalP>({
    descricao: '',
    isVisible: false,
    porcao: '',
    nome: '',
    preco: 0,
    foto: ''
  })
  if (!produtos) {
    return <h1>Carrgeando</h1>
  }
  return (
    <>
      <ContainerProduct>
        {produtos.map((p) => (
          <div className="produto" key={p.id}>
            <CardProduto
              descricao={p.descricao}
              foto={p.foto}
              id={p.id}
              nome={p.nome}
              porcao={p.porcao}
              preco={p.preco}
            />
            <Button
              onClick={() =>
                setModal({
                  descricao: p.descricao,
                  isVisible: true,
                  nome: p.nome,
                  porcao: p.porcao,
                  preco: p.preco,
                  foto: p.foto
                })
              }
            >
              Mais detalhes
            </Button>
          </div>
        ))}
      </ContainerProduct>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <div className="overlay"></div>

        <ModalContent>
          <img src={modal.foto} alt={modal.nome} />
          <div>
            <Title fontSize={18} color="rosaClaro">
              {modal.nome}
            </Title>
            <Texto fontSize={18} color="rosaClaro">
              {modal.descricao}
            </Texto>
            <Texto fontSize={18} color="rosaClaro">
              {modal.porcao}
            </Texto>
            <Button>{`Adicionar ao carinho ${FormataPreco(
              modal.preco
            )}`}</Button>
          </div>
          <div
            className="fechar"
            onClick={() =>
              setModal({
                descricao: '',
                isVisible: false,
                nome: '',
                porcao: '',
                preco: 0,
                foto: ''
              })
            }
          >
            <img src={fechar} alt="fechar" />
          </div>
        </ModalContent>
      </Modal>
    </>
  )
}
export default ListaProduto
