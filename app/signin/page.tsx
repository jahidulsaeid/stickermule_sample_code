"use client";
import LoginForm from '@/components/auth/login-form';
import { useAppSelector } from '@/redux/hook';
import { ROUTES } from '@/utils/routes';
import { useRouter } from 'next/navigation';
import React from 'react';

const LoginPage = () => {
  const { loggedIn } = useAppSelector((state) => state.auth);
  const route = useRouter();
  if (loggedIn) {
    return route.push(ROUTES.HOME);
  }
  return <LoginForm className='mt-10' />;
};

export default LoginPage;
