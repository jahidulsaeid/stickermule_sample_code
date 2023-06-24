import { createSlice } from '@reduxjs/toolkit';

type AccountState = {
  addressModal: boolean;
};

const initialState: AccountState = {
  addressModal: false,
};

const AccountSlice = createSlice({
  name: 'Account',
  initialState,
  reducers: {
    openAddressModal: (state) => {
      state.addressModal = true;
    },
    closeAddressModal: (state) => {
      state.addressModal = false;
    },
  },
});

export const {openAddressModal, closeAddressModal} = AccountSlice.actions;
export default AccountSlice.reducer;
