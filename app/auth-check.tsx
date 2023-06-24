'use client';
import AddressModal from '@/components/address/address-modal';
import LoginForm from '@/components/auth/login-form';
import SignUpForm from '@/components/auth/sign-up-form';
import ManagedDrawer from '@/components/common/drawer/managed-drawer';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import MobileMenu from '@/components/header/mobile-menu';
import PreLoader from '@/components/loaders/pre-loader';
import Modal from '@/components/modal/modal';
import ProductPopup from '@/components/product/product-popup';
import useAuthCheck from '@/hooks/useAuthCheck';
import {
  closeLoginModal,
  closeRegisterModal,
} from '@/redux/features/auth/authSlice';
import { closeProductModal } from '@/redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const authCheck = useAuthCheck();
  const { productModal, productSlug } = useAppSelector(
    (state) => state.product
  );
  const { loginModal, registerModal } = useAppSelector((state) => state.auth);
  const { isMobile } = useAppSelector((state) => state.ui);
  const { addressModal } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  const productModalClose = () => {
    dispatch(closeProductModal());
  };

  return !authCheck ? (
    <PreLoader />
  ) : (
    <>
      <Header />
      {children}
      <Footer />
      <ToastContainer />
      {productSlug !== undefined && (
        <Modal open={productModal} onClose={productModalClose}>
          <ProductPopup productSlug={productSlug} />
        </Modal>
      )}
      <ManagedDrawer />

      {loginModal && (
        <Modal open={loginModal} onClose={() => dispatch(closeLoginModal())}>
          <LoginForm />
        </Modal>
      )}

      {registerModal && (
        <Modal
          open={registerModal}
          onClose={() => dispatch(closeRegisterModal())}
        >
          <SignUpForm />
        </Modal>
      )}

      {addressModal && <AddressModal />}

      {isMobile && <MobileMenu />}
    </>
  );
}
