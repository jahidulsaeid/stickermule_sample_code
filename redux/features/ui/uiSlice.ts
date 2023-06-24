import { createSlice } from '@reduxjs/toolkit';

type uiState = {
  isMobile: boolean;
};

const initialState: uiState = {
  isMobile: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openMobileMenu: (state) => {
      state.isMobile = true;
    },
    closeMobileMenu: (state) => {
      state.isMobile = false;
    },
  },
});

export const { openMobileMenu, closeMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;
