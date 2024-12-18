import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Opportunity } from '../../types/entities'

/**
 * opportunitiesApi is responsible for providing
 * a function that fetches the opportunities from
 * a backend api exposed at port 3000.
 * 
 * It uses the createApi method from redux-toolkit,
 * - reducerPath tells where the data has to be stored in which reducer
 * - baseQuery - needs the URL domain
 * - endPoints - builds the endpoint which a callback function 
 */
export const opportunitiesApi = createApi({
  reducerPath: 'opportunitiesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    fetchOpportunities: builder.query<Opportunity[], string>({
      query: (searchQuery) => `/opportunities?search=${searchQuery}`,
    }),
  }),
})

export const { useFetchOpportunitiesQuery } = opportunitiesApi