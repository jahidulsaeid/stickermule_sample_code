'use client';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { fadeInTop } from '@/utils/motion/fade-in-top';
import PasswordInput from '../ui/password-input';
import Button from '../ui/button';
import { useChangePasswordMutation } from '@/redux/features/auth/authApi';

type FormValues = {
  oldPassword: string;
  newPassword: string;
  passwordConfirmation: string;
};

const defaultValues = {
  oldPassword: '',
  newPassword: '',
  passwordConfirmation: '',
};

const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required('Old Password is required'),
  newPassword: yup.string().required('New password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Mismatched passwords')
    .required('Please confirm your password'),
});

const ChangePassword: React.FC = () => {
  const [mutate, { isLoading }] = useChangePasswordMutation();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(changePasswordSchema),
    defaultValues,
  });

  function onSubmit({ newPassword, oldPassword }: FormValues) {
    mutate({ oldPassword, newPassword })
      .unwrap()
      .then((data) => {
        if (!data.success) {
          setError('oldPassword', {
            type: 'manual',
            message: data.message,
          });
          return;
        }
        reset();
        toast.success('Password changed successfully');
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
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        Change Password
      </h2>
      <motion.div
        layout
        initial="from"
        animate="to"
        exit="from"
        //@ts-ignore
        variants={fadeInTop(0.35)}
        className={`w-full flex  h-full lg:w-8/12 flex-col`}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mx-auto flex flex-col justify-center "
        >
          <div className="flex flex-col space-y-3">
            <PasswordInput
              label="Old Password"
              error={errors.oldPassword?.message}
              {...register('oldPassword')}
              className="mb-4"
            />
            <PasswordInput
              label="New Password"
              error={errors.newPassword?.message}
              {...register('newPassword')}
              className="mb-4"
            />

            <PasswordInput
              label="Confirm Password"
              error={errors.passwordConfirmation?.message}
              {...register('passwordConfirmation')}
              className="mb-4"
            />

            <div className="relative">
              <Button
                type="submit"
                loading={isLoading}
                disabled={isLoading}
                className="h-13 mt-3"
              >
                Change Password
              </Button>
            </div>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default ChangePassword;
