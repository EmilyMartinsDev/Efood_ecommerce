export type Produto = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Produto[]
}
