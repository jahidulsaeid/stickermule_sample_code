'use client';

import { useForm } from 'react-hook-form';
// import { ImGoogle2 } from '@react-icons/all-files/im/ImGoogle2';
import * as yup from 'yup';
import Button from '../ui/button';
// import { MobileIcon } from '@/assets/icons/mobile-icon';
import Input from '../ui/input';
import { yupResolver } from '@hookform/resolvers/yup';
import PasswordInput from '../ui/password-input';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';
import Link from 'next/link';
import { ROUTES } from '@/utils/routes';
// import { useLoginMutation } from '@/redux/features/auth/authApi';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@/redux/hook';
import {
  closeLoginModal,
  openRegisterModal,
  userLoggedIn,
} from '@/redux/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Alert from '../ui/alert';
import { useSigninMutation } from '@/redux/features/auth/authApi';

interface Props {
  className?: string;
}

interface LoginInputType {
  username: string;
  // email: string;
  password: string;
  remember_me: boolean;
}

const loginFormSchema = yup.object().shape({
  // email: yup
  //   .string()
  //   .email('Email must be a valid email')
  //   .required('Email is required'),
  username: yup.string().required('This field is required'),
  password: yup.string().required('Password is required'),
});

const defaultValues = {
  username: '',
  password: '',
};

const LoginForm: React.FC<Props> = ({ className }) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<LoginInputType>({
    resolver: yupResolver(loginFormSchema),
    defaultValues,
  });

  const [mutate, { isLoading }] = useSigninMutation();

  const onSubmit = async ({ username, password }: LoginInputType) => {
    const isEmail = username.includes('@');
    let data = {};
    if (isEmail) {
      data = {
        email: username,
        password,
      };
    } else {
      data = {
        phone: username,
        password,
      };
    }

    mutate(data)
      .unwrap()
      .then((data) => {
        if (data?.token && data?.status === 1) {
          toast.success('Login successfully');
          dispatch(
            userLoggedIn({ token: data.token, permissions: ['customer'] })
          );
          dispatch(closeLoginModal());
          reset();
          router.push(ROUTES.HOME);
        }
        if (!data.token) {
          setErrorMessage('Email or password is incorrect');
        }
      })
      .catch((err) => {
        if (err.data) {
          Object.keys(err.data).forEach((field: any) => {
            setError(field, {
              type: 'manual',
              message: err.data[field][0],
            });
          });
        }
      });
  };

  function handleForgetPassword() {}

  return (
    <div
      className={`overflow-hidden bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300 py-5 px-5 sm:px-8 ${className}`}
    >
      <div className="text-center mb-6 pt-2.5">
        <div>
          <Image
            src={Logo}
            alt="logo"
            width={128}
            height={36}
            className="mx-auto"
          />
        </div>
        <p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10">
          Login with your email & password
        </p>
      </div>

      {errorMessage && (
        <Alert
          message={errorMessage}
          variant="error"
          className="my-3"
          closeable
          onClose={() => setErrorMessage('')}
        />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
        noValidate
      >
        <div className="flex flex-col space-y-3.5">
          <Input
            label="Phone Number or Email"
            type="text"
            variant="solid"
            {...register('username')}
            error={errors.username?.message}
            placeholder="Enter your phone number or email"
          />
          <PasswordInput
            label="Password"
            error={errors.password?.message}
            {...register('password')}
            placeholder="Enter your password"
          />
          <div className="flex items-center justify-center">
            <div className="flex items-center flex-shrink-0">
              <label className="switch relative inline-block w-10 cursor-pointer">
                <input
                  id="remember"
                  type="checkbox"
                  className="opacity-0 w-0 h-0"
                  {...register('remember_me')}
                />
                <span className="bg-gray-500 absolute inset-0 transition-all duration-300 ease-in slider round" />
              </label>
              <label
                htmlFor="remember"
                className="flex-shrink-0 text-sm text-heading ps-3 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <div className="flex ms-auto">
              <button
                type="button"
                onClick={handleForgetPassword}
                className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:no-underline focus:outline-none"
              >
                Forgot Password?
              </button>
            </div>
          </div>
          <div className="relative">
            <Button
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              className="h-11 md:h-12 w-full mt-1.5"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
      {/* <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-white">Or</span>
      </div> */}

      {/* <div className="grid grid-cols-1 gap-4 mt-2">
        <Button
          loading={false}
          disabled={false}
          className="h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover"
          onClick={() => signIn("google")}
        >
          <ImGoogle2 className="text-sm sm:text-base me-1.5" />
          Login with Google
        </Button>

        <Button
          className="h-11 md:h-12 w-full mt-1.5"
          disabled={loading}
          onClick={handleOtpLogin}
        >
          <MobileIcon className="h-5 me-2 text-light" />
          Login with Mobile
        </Button>
      </div> */}

      <div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
        Don&apos;t have any account?
        <button
          type="button"
          className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:no-underline focus:outline-none ml-2"
          onClick={() => dispatch(openRegisterModal())}
        >
          Register
        </button>
        {/* <Link
          href={ROUTES.SIGNUP}
          className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:no-underline focus:outline-none ml-2"
        >
          Register
        </Link> */}
      </div>
    </div>
  );
};

export default LoginForm;
