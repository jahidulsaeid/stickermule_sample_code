import { apiSlice } from '../api/apiSlice';

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => `/orders`,
    }),
    newOrder: builder.mutation({
      query: (body) => ({
        url: `/orders`,
        method: 'POST',
        body,
      }),
    }),
    getOrder: builder.query({
      query: (id) => `/orders/${id}`,
    }),
    // getOrderByTrackingId: builder.query({
    //   query: (trackingId) => `/orders/tracking/${trackingId}`,
    // }),
  }),
});

export const { useGetOrdersQuery, useNewOrderMutation, useGetOrderQuery } =
  orderApi;
