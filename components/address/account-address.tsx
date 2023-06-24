'use client';
import AddressCard from '@/components/address/address-card';
import { AddressHeader } from '@/components/address/address-header';
import { openAddressModal } from '@/redux/features/account/accountSlice';
import { useGetCustomerQuery } from '@/redux/features/auth/authApi';
import { useAppDispatch } from '@/redux/hook';
import { Address } from '@/types';

interface AddressesProps {
  label: string;
  className?: string;
  userId: string;
}

import React from 'react';

export default function AccountAddress({
  label,
  className,
  userId,
}: AddressesProps) {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetCustomerQuery();

  function onAdd() {
    dispatch(openAddressModal());
  }

  const addresses: Address[] = data?.address;

  return (
    <div className={className}>
      <AddressHeader onAdd={onAdd} count={false} label={label} />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {addresses && addresses?.length ? (
          <>
            {addresses?.map((address) => (
              <AddressCard
                checked={false}
                address={address}
                userId={userId}
                key={address.id}
              />
            ))}
          </>
        ) : (
          <span className="relative px-5 py-6 text-base text-left bg-gray-100 rounded border border-border-200">
            No address found
          </span>
        )}
      </div>
    </div>
  );
}