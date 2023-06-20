import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto, Restaurante } from '../restaurante/restaurante'
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
    })
  })
})

export default api
export const { useGetRestaurantesQuery, useGetProdutosQuery } = api
