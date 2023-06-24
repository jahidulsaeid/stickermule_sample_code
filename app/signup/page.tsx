'use client';
import SignUpForm from '@/components/auth/sign-up-form';
import { useAppSelector } from '@/redux/hook';
import { ROUTES } from '@/utils/routes';
import { useRouter } from 'next/navigation';
import React from 'react';

const Signup = () => {
  const { loggedIn } = useAppSelector((state) => state.auth);
  const route = useRouter();
  if (loggedIn) {
    return route.push(ROUTES.HOME);
  }
  return (
    <div className='mt-10'>
      <SignUpForm />
    </div>
  );
};

export default Signup;
