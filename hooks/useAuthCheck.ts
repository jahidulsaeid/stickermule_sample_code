'use client';
import { setAuthData } from '@/redux/features/auth/authSlice';
import { setCartItem } from '@/redux/features/products/productSlice';
import { useAppDispatch } from '@/redux/hook';
import { useEffect, useState } from 'react';

export default function useAuthCheck() {
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    const permissions = localStorage.getItem('permissions');

    if (accessToken && permissions) {
      dispatch(
        setAuthData({
          token: accessToken,
          permissions: permissions,
        })
      );
    }

    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      dispatch(setCartItem(JSON.parse(cartItems)));
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
