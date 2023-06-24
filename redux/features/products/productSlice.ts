import { createSlice } from '@reduxjs/toolkit';

type productState = {
  productSlug?: string;
  productModal: boolean;
  cartItems: any[];
  cartDrawer: boolean;
};

const initialState: productState = {
  productSlug: undefined,
  productModal: true,
  cartItems: [],
  cartDrawer: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    openProductModal: (state, action) => {
      state.productSlug = action.payload;
      state.productModal = true;
    },
    closeProductModal: (state) => {
      state.productSlug = undefined;
      state.productModal = false;
    },

    openCartDrawer: (state) => {
      state.cartDrawer = true;
    },
    closeCartDrawer: (state) => {
      state.cartDrawer = false;
    },
    addItemToCart: (state, action) => {
      const { product, quantity, attributes, selectedVariation } = action.payload;
      console.log("🚀 ~ file: productSlice.ts:38 ~ selectedVariation:", selectedVariation)
      
        state.cartItems.push({
          ...product,
          cartQuantity: quantity,
          cartAttributes: attributes,
          selectedVariation: selectedVariation
        });
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      // }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (itemIndex >= 0) {
        state.cartItems.splice(itemIndex, 1);
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
    incrementQuantity: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
    decrementQuantity: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
    setCartItem: (state, action) => {
      const items = action.payload;
      state.cartItems = items;
    },
  },
});

export const {
  openProductModal,
  closeProductModal,
  addItemToCart,
  openCartDrawer,
  closeCartDrawer,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  setCartItem,
} = productSlice.actions;
export default productSlice.reducer;
