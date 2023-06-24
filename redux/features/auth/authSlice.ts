import { createSlice } from '@reduxjs/toolkit';

type authState = {
  token?: string;
  permissions?: string[];
  loggedIn?: boolean;
  loginModal?: boolean;
  registerModal?: boolean;
};

const initialState: authState = {
  token: undefined,
  permissions: undefined,
  loggedIn: false,
  loginModal: false,
  registerModal: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.token = action.payload.token;
      state.permissions = action.payload.permissions;
      state.loggedIn = true;

      localStorage.setItem('token', action.payload.token);
      localStorage.setItem(
        'permissions',
        JSON.stringify(action.payload.permissions)
      );
    },
    setAuthData: (state, action) => {
      state.token = action.payload.token;
      state.permissions = action.payload.permissions;
      state.loggedIn = true;
    },
    userLoggedOut: (state) => {
      state.token = undefined;
      state.permissions = undefined;
      state.loggedIn = false;

      localStorage.removeItem('token');
      localStorage.removeItem('permissions');
    },
    openLoginModal: (state) => {
      state.loginModal = true;
      state.registerModal = false;
    },
    closeLoginModal: (state) => {
      state.loginModal = false;
    },
    openRegisterModal: (state) => {
      state.registerModal = true;
      state.loginModal = false;
    },
    closeRegisterModal: (state) => {
      state.registerModal = false;
    },
  },
});

export const { userLoggedIn, userLoggedOut,setAuthData, openLoginModal, closeLoginModal, openRegisterModal, closeRegisterModal } = authSlice.actions;
export default authSlice.reducer;
