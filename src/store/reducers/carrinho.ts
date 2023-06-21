import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../restaurante/restaurante'

type ProdutoEstado = {
  items: Produto[]
  isOpen?: boolean
}
const initialState: ProdutoEstado = {
  items: [],
  isOpen: false
}

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      if (state.items.find((p) => p.id === action.payload.id)) {
        return
      }
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      const elementosRestantes = state.items.filter(
        (i) => i.id !== action.payload
      )

      state.items = elementosRestantes
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cart.actions
export default cart.reducer
