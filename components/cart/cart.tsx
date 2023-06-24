import { motion } from 'framer-motion';
import cn from 'classnames';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import Scrollbar from '../common/scrollbar';
import CartItem from './cart-item';
import Link from 'next/link';
import EmptyCart from './empty-cart';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { fadeInOut } from '@/utils/motion/fade-in-out';
import { ROUTES } from '@/utils/routes';
import { closeCartDrawer } from '@/redux/features/products/productSlice';
import { formatPrice } from '@/utils/use-price';
import { useRouter } from 'next/navigation';
import { openLoginModal } from '@/redux/features/auth/authSlice';
import { isEmpty } from 'lodash';

export default function Cart() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { cartItems } = useAppSelector((state) => state.product);
  const { loggedIn } = useAppSelector((state) => state.auth);

  const cartTotal = cartItems.reduce((acc, item) => {
    const isVariable = !isEmpty(item.variations);
    if (isVariable) {
      return (
        acc +
        Number(item.max_price || item.min_price) * Number(item.cartQuantity)
      );
    } else {
      return (
        acc + Number(item.sale_price || item.price) * Number(item.cartQuantity)
      );
    }
  }, 0);

  const handleChekout = () => {
    if (cartItems.length === 0) return;
    dispatch(closeCartDrawer());
    if (loggedIn) {
      // window.location.href = ROUTES.CHECKOUT;
      router.push(ROUTES.CHECKOUT);
    } else {
      dispatch(openLoginModal());
    }
  };

  return (
    <div className="flex flex-col w-full h-full justify-between">
      <div className="cart_top">
        <div className="w-full flex justify-between items-center relative ps-5 md:ps-7 py-0.5 border-b border-gray-100">
          <h2 className="font-bold text-xl md:text-2xl m-0 text-heading">
            Shopping cart
          </h2>
          <button
            className="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-6 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
            onClick={() => dispatch(closeCartDrawer())}
            aria-label="close"
          >
            <IoClose className="text-black mt-1 md:mt-0.5" />
          </button>
        </div>
        {cartItems.length ? (
          <Scrollbar className="cart-scrollbar w-full flex-grow">
            <div className="w-full px-5 md:px-7">
              {cartItems?.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
          </Scrollbar>
        ) : (
          <motion.div
            layout
            initial="from"
            animate="to"
            exit="from"
            variants={fadeInOut(0.25)}
            className="px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center"
          >
            <EmptyCart />
            <h3 className="text-lg text-heading font-bold pt-8">
              Your cart is empty.
            </h3>
          </motion.div>
        )}
      </div>
      <div
        className="flex flex-col px-5 md:px-7 pt-2 pb-5 md:pb-7"
        onClick={() => dispatch(closeCartDrawer())}
        role="button"
      >
        <button
          // href={cartItems.length ? ROUTES.CHECKOUT : ROUTES.HOME}
          onClick={handleChekout}
          className={cn(
            'w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 hover:bg-gray-600',
            {
              'cursor-not-allowed bg-gray-400 hover:bg-gray-400':
                cartItems.length === 0,
            }
          )}
        >
          <span className="w-full pe-5 -mt-0.5 py-0.5">
            Proceed To Checkout
          </span>
          <span className="ms-auto flex-shrink-0 -mt-0.5 py-0.5">
            <span className="border-s border-white pe-5 py-0.5" />
            {formatPrice({ amount: cartTotal })}
          </span>
        </button>
      </div>
    </div>
  );
}
