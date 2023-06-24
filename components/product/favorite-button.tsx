import cn from 'classnames';
import { HeartFillIcon } from '@/assets/icons/heart-fill';
import { HeartOutlineIcon } from '@/assets/icons/heart-outline';
import Spinner from '../ui/loaders/spinner/spinner';
import { useWishlistToggleMutation } from '@/redux/features/products/productApi';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { openLoginModal } from '@/redux/features/auth/authSlice';

function FavoriteButton({
  productId,
  className,
  in_wishlist,
}: {
  productId: string;
  className?: string;
  in_wishlist: boolean;
}) {
  const {loggedIn} = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [mutate, { isLoading }] = useWishlistToggleMutation();
  const toggle = () => {
    if (!loggedIn) {
      dispatch(openLoginModal());
      return;
    }
    mutate(productId);
  };
  // if (isLoading) {
  //   return (
  //     <div
  //       className={cn(
  //         'mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300',
  //         className
  //       )}
  //     >
  //       <Spinner simple={true} className="flex w-5 h-5" />
  //     </div>
  //   );
  // }
  return (
    <button
      type="button"
      title="Add to wishlist"
      className={cn(
        'mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 transition-colors bg-white',
        className
      )}
      onClick={toggle}
    >
      {in_wishlist ? (
        <HeartFillIcon className="w-5 h-5 text-primary" />
      ) : (
        <HeartOutlineIcon className="w-5 h-5 text-primary" />
      )}
    </button>
  );
}

export default FavoriteButton;
