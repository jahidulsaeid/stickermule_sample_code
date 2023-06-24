'use client';
import Input from '@/components/ui/input';
import TextArea from '@/components/ui/text-area';
import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import {
  useGetCustomerQuery,
  useUpdateProfileMutation,
} from '@/redux/features/auth/authApi';
import { useEffect } from 'react';
import Button from '@/components/ui/button';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { toast } from 'react-toastify';

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  district: string;
};

const addressSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  // phone: yup.string().required('Phone is required'),
  address: yup.string().required('Address is required'),
  district: yup.string().required('District is required'),
});

export default function Page() {
  const { data: customer, isLoading: isDataLoading } = useGetCustomerQuery();

  // get data from RTK query Cache

  const customer_address = customer?.address?.find(
    (item: any) => item.default === '1'
  );

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(addressSchema),
    shouldUnregister: true,
  });

  useEffect(() => {
    if (customer) {
      setValue('name', customer?.name);
      setValue('email', customer?.email);
      setValue('phone', customer?.phone);
      setValue('address', customer_address?.address?.street_address);
      setValue('district', customer_address?.address?.city);
    }
  }, [
    customer,
    customer_address?.address?.city,
    customer_address?.address?.street_address,
    setValue,
  ]);
  const [mutate, { isLoading }] = useUpdateProfileMutation();
  function onSubmit(values: FormValues) {

    const data = {
      id: customer?.id,
      name: values.name,
      phone: values.phone === customer?.phone ? undefined : values.phone,
      email: values.email === customer?.email ? undefined : values.email,
      profile: {
        customer_id: customer?.id,
      },
      address: [
        {
          id: customer_address ? customer_address.id : undefined,
          title: 'Home',
          type: 'shipping',
          default: true,
          customer_id: customer?.id,
          address: {
            country: 'Bangladesh',
            city: values.district,
            state: null,
            zip: null,
            street_address: values.address,
          },
        },
      ],
    };

    mutate(data)
      .unwrap()
      .then((res) => {
        toast.success('Profile updated successfully');
      })
      .catch((err) => {
        toast.error('Something went wrong');
      });
  }
  if (isDataLoading) return <Spinner />;
  return (
    // <AccountAddress label="Address" userId="1" />
    <form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-5">
        <h1 className="text-heading font-semibold text-lg text-left col-span-2">
          Contact Information
        </h1>
        <Input
          label="Name (নাম)"
          {...register('name')}
          error={errors.name?.message!}
          variant="outline"
          className="col-span-2"
        />

        <Input
          label="Phone (ফোন নম্বর)"
          {...register('phone')}
          error={errors.phone?.message!}
          variant={customer?.phone ? 'normal' : 'outline'}
          disabled={customer?.phone ? true : false}
        />

        <Input
          label="Email (ই-মেইল)"
          {...register('email')}
          error={errors.email?.message!}
          variant={customer?.email ? 'normal' : 'outline'}
          disabled={customer?.email ? true : false}
        />
      </div>
      <div className="grid grid-cols-2 gap-5 pt-10">
        <h1 className="text-heading font-semibold text-lg text-left col-span-2">
          Shopping Address
        </h1>
        <TextArea
          label="Address (ঠিকানা)"
          {...register('address')}
          error={errors.address?.message!}
          variant="outline"
          className="col-span-2"
        />

        <Input
          label="District (জেলা)"
          {...register('district')}
          error={errors?.district?.message!}
          variant="outline"
          className="col-span-2"
        />
      </div>
      <Button
        type="submit"
        loading={isLoading}
        disabled={isLoading}
        className="h-13 mt-10 w-full"
      >
        Save
      </Button>
    </form>
  );
}
