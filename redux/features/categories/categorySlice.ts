import { createSlice } from '@reduxjs/toolkit';

type categoryState = {};

const initialState : categoryState = {}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    
  },
});

export const {  } = categorySlice.actions;
export default categorySlice.reducer;