import { apiSlice } from '../api/apiSlice';

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // builder.query<ReturnValueHere, ArgumentTypeHere>
    getCategories: builder.query({
      query: () => ({
        url: '/categories',
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
