import { apiSlice } from '../api/apiSlice';
import { API_ENDPOINTS } from '@/utils/endpoints';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: API_ENDPOINTS.LOGIN,
        method: 'POST',
        body: data,
      }),
    }),
    signin: builder.mutation({
      query: (data) => ({
        url: API_ENDPOINTS.SIGNIN,
        method: 'POST',
        body: data,
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: API_ENDPOINTS.REGISTER,
        method: 'POST',
        body: data,
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: API_ENDPOINTS.CHANGE_PASSWORD,
        method: 'POST',
        body: data,
      }),
    }),

    getCustomer: builder.query<any, void>({
      query: () => ({
        url: API_ENDPOINTS.CUSTOMER,
        method: 'GET',
      }),
    }),
    updateProfile: builder.mutation<any, any>({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: 'PUT',
        body,
      }),

      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            authApi.util.updateQueryData('getCustomer', undefined, (draft) => {
              draft.address = data.address;
            })
          );
        } catch (error) {
          console.log('error', error);
        }
      },

    }),
  }),
});

export const {
  useSigninMutation,
  useRegisterMutation,
  useChangePasswordMutation,
  useGetCustomerQuery,
  useUpdateProfileMutation,
} = authApi;
