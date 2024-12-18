// slices/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Opportunity } from '../../types/entities';

export const opportunitiesApi = createApi({
  reducerPath: 'opportunitiesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }), // Replace with your Node.js API base URL
  endpoints: (builder) => ({
    fetchOpportunities: builder.query<Opportunity[], string>({
      query: (searchQuery) => `/opportunities?search=${searchQuery}`,
    }),
  }),
});

export const { useFetchOpportunitiesQuery } = opportunitiesApi;