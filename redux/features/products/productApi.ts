import { apiSlice } from '../api/apiSlice';

const apiWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ['Wishlist'] });

export const productApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => ({
        // url: `/products?limit=${limit}`,
        url: `/products`,
        method: 'GET',
      }),
      transformResponse: (res: any) => {
        return res?.data.filter((product: any) => product.status === 'publish');
      },
    }),
    getProduct: builder.query({
      query: (slug) => ({
        url: `/products/${slug}?with=categories;tags;variations.attribute.values;variation_options`,
        method: 'GET',
      }),
    }),
    getAttribute: builder.query({
      query: () => ({
        url: `/attributes`,
        method: 'GET',
      }),
    }),
    wishlistToggle: builder.mutation({
      query: (productId) => ({
        url: `/wishlists/toggle`,
        method: 'POST',
        body: { product_id: productId },
      }),
      invalidatesTags: ['Wishlist'],
      onQueryStarted(productId, { dispatch, queryFulfilled }) {
        let productSlug = '';
        const products = dispatch(
          productApi.util.updateQueryData('getProducts', undefined, (draft) => {
            const product = draft.find(
              (product: any) => product.id === productId
            );
            if (product) {
              productSlug = product.slug;
              product.in_wishlist = !product.in_wishlist;
            }
          })
        );

        if (productSlug !== '') {
          dispatch(
            productApi.util.updateQueryData(
              'getProduct',
              productSlug,
              (draft) => {
                draft.in_wishlist = !draft.in_wishlist;
              }
            )
          );
        }
        queryFulfilled.catch(products.undo);
      },
    }),

    getWishlist: builder.query<any, void>({
      query: () => ({
        url: '/my-wishlists',
        method: 'GET',
      }),
      providesTags: ['Wishlist'],
    }),

    categoryProducts: builder.query({
      query: (slug) => ({
        url: `/products?search=categories.slug:${slug}`,
        method: 'GET',
      }),
    }),
    newArrivals: builder.query<any, void>({
      query: () => ({
        url: `/newarrivalproducts`,
        method: 'GET',
      }),
      transformResponse: (res: any) => {
        return res?.data;
      },
    }),
    topSelling: builder.query<any, void>({
      query: () => ({
        url: `/topsellingproducts`,
        method: 'GET',
      }),
      transformResponse: (res: any) => {
        return res?.data;
      },
    }),
    onSale: builder.query<any, void>({
      query: () => ({
        url: `/products`,
        method: 'GET',
      }),
      transformResponse: (res: any) => {
        return res?.data.filter((product: any) => product.status === 'publish');
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetAttributeQuery,
  useWishlistToggleMutation,
  useCategoryProductsQuery,
  useGetWishlistQuery,

  useNewArrivalsQuery,
  useTopSellingQuery,
  useOnSaleQuery,

} = productApi;
