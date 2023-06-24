'use client';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { ROUTES } from '@/utils/routes';
import PasswordInput from '../ui/password-input';
import Button from '../ui/button';
import Input from '../ui/input';
import Logo from '@/assets/images/logo.png';
import { useRegisterMutation } from '@/redux/features/auth/authApi';
import Alert from '../ui/alert';
import { useState } from 'react';
import { closeRegisterModal, openLoginModal, userLoggedIn } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
// import { toast } from 'react-toastify';

interface SignUpInputType {
  phone: string;
  email: string;
  password: string;
  repassword: string;
  name: string;
}

const registerFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(/^01[0-9]{9}$/, 'Phone number is not valid'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
  repassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const defaultValues = {
  name: '',
  phone: '',
  email: '',
  password: '',
};

const SignUpForm: React.FC = () => {
  const { cartItems } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<SignUpInputType>({
    resolver: yupResolver(registerFormSchema),
    defaultValues,
  });

  const [mutate, { isLoading }] = useRegisterMutation();

  function onSubmit({ name, phone, email, password }: SignUpInputType) {
    mutate({ name, phone, email, password })
      .unwrap()
      .then((data) => {
        if (data?.token && data?.permissions?.length) {
          toast.success('Register successfully');
          dispatch(
            userLoggedIn({ token: data.token, permissions: ['customer'] })
          );
          reset();
          dispatch(closeRegisterModal());
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
  }

  return (
    <div className="py-5 px-5 sm:px-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
      <div className="text-center mb6 pt-2.5">
        <div>
          <Image
            src={Logo}
            alt="logo"
            width={128}
            height={36}
            className="mx-auto"
          />
        </div>
        <div className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-4 flex gap-1">
          <p>By signing up, you agree to our</p>
          <Link
            href={ROUTES.TERMS}
            className="text-heading underline hover:no-underline focus:outline-none"
          >
            Terms
          </Link>
          &amp;
          <Link
            href={ROUTES.POLICY}
            className="text-heading underline hover:no-underline focus:outline-none"
          >
            Policy
          </Link>
        </div>
      </div>

      {errorMessage && <Alert message={errorMessage} className="my-3" />}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
        noValidate
      >
        <div className="flex flex-col space-y-4">
          <Input
            label="Name"
            type="text"
            variant="solid"
            {...register('name')}
            error={errors.name?.message}
            placeholder="Enter your name"
          />
          <Input
            label="Phone"
            type="text"
            variant="solid"
            {...register('phone')}
            error={errors.phone?.message}
            placeholder="Enter your phone number"
          />
          <Input
            label="Email"
            type="email"
            variant="solid"
            {...register('email')}
            error={errors.email?.message}
            placeholder="Email your email address"
          />
          <PasswordInput
            label="Password"
            error={errors.password?.message}
            {...register('password')}
            placeholder="Enter your password"
          />
          <PasswordInput
            label="Confirm Password"
            error={errors.repassword?.message}
            {...register('repassword')}
            placeholder="Confirm your password"
          />
          <div className="relative">
            <Button
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              className="h-11 md:h-12 w-full mt-2"
            >
              Register
            </Button>
          </div>
        </div>
      </form>
      {/* <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-white">
          Or
        </span>
      </div> */}

      {/* Enable it for facebook social auth */}
      {/* <Button
        type="submit"
        loading={false}
        disabled={isLoading}
        className="h-11 md:h-12 w-full mt-2.5 bg-facebook hover:bg-facebookHover"
      >
        <ImFacebook2 className="text-sm sm:text-base me-1.5" />
        Login with Facebook
      </Button>
      <Button
        type="submit"
        loading={false}
        disabled={isLoading}
        className="h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover"
      >
        <ImGoogle2 className="text-sm sm:text-base me-1.5" />
        Login with Google
      </Button> */}
      <div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
        Already have an account?
        <button
          type="button"
          className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:no-underline focus:outline-none ml-2"
          // onClick={handleSignIn}
          onClick={() => dispatch(openLoginModal())}
        >
          Login
        </button>
        {/* <Link
          href={ROUTES.SIGNIN}
          className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:no-underline focus:outline-none ml-2"
        >
          Login
        </Link> */}
      </div>
    </div>
  );
};

export default SignUpForm;
