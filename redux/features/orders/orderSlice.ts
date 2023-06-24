import { createSlice } from '@reduxjs/toolkit';

type orderState = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  alternative_phone?: string;
  district?: string;
  note?: string;
};

const initialState: orderState = {};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // checkout: (state, action) => {
      
    // },
  },
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
