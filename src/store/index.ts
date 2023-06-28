import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/carrinho'

import api from '../services/api'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootRedux = ReturnType<typeof store.getState>
