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
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close } = cart.actions
export default cart.reducer
