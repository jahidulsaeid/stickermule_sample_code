import React from 'react';
import Modal from '../modal/modal';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import AddressForm from './address-form';
import { closeAddressModal } from '@/redux/features/account/accountSlice';

export default function AddressModal() {
  const dispatch = useAppDispatch();
  const { addressModal } = useAppSelector((state) => state.account);
  const onClose = () => {
    dispatch(closeAddressModal());
  };
  return (
    <>
      <Modal open={addressModal} onClose={onClose}>
        <AddressForm />
      </Modal>
    </>
  );
}
