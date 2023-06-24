import { apiSlice } from '../api/apiSlice';

export const uiApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBanner: builder.query<any, void>({
        // https://api.giordanobd.com/types/giordano-bangladesh
        query: () => '/types/giordano-bangladesh',
    }),
  }),
});

export const { useGetBannerQuery } = uiApi;