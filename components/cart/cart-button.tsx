import CartIcon from '@/assets/icons/cart-icon';
import { openCartDrawer } from '@/redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

const CartButton = () => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.product);

  return (
    <button
      className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
      onClick={() => dispatch(openCartDrawer())}
      aria-label="cart-button"
    >
      <CartIcon />
      <span className="cart-counter-badge flex items-center justify-center bg-heading text-white absolute -top-3 -end-2.5 xl:-end-3 rounded-full font-bold">
        {cartItems.length}
      </span>
    </button>
  );
};

export default CartButton;
