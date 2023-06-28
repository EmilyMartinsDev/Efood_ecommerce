import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto, Restaurante } from '../restaurante/restaurante'

type Response = {
  orderId: string
}

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      zipCode: string
      city: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      number: string
      name: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => '/restaurantes'
    }),
    getProdutos: builder.query<Restaurante, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    purchase: builder.mutation<Response, PurchasePayload>({
      query: (body) => ({
        url: '/checkout',
        body,
        method: 'POST'
      })
    })
  })
})

export default api
export const {
  useGetRestaurantesQuery,
  useGetProdutosQuery,
  usePurchaseMutation
} = api
