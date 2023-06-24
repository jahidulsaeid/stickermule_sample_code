import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoIosCloseCircle } from '@react-icons/all-files/io/IoIosCloseCircle';
import { fadeInOut } from '@/utils/motion/fade-in-out';
import Link from 'next/link';
import { ROUTES } from '@/utils/routes';
import Counter from '../common/counter';
import usePrice, { formatPrice } from '@/utils/use-price';
import { generateCartItemName } from '@/utils/generate-cart-item-name';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '@/redux/features/products/productSlice';
import { useAppDispatch } from '@/redux/hook';
import { isEmpty } from 'lodash';

type CartItemProps = {
  item: any;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  // const { price: unitPrice } = usePrice({
  // 	amount: item.price,
  // });

  // const { price: totalPrice } = usePrice({
  // 	amount: item.itemTotal,
  // });

  const isVariable = !isEmpty(item.variations);

  const unitPrice = isVariable
    ? formatPrice({ amount: item.max_price || item.min_price })
    : formatPrice({ amount: item.sale_price || item.price });

  const totalAmount = isVariable
    ? Number(item.max_price || item.min_price) * Number(item.cartQuantity)
    : Number(item.sale_price || item.price) * Number(item.cartQuantity);

  const totalPrice = formatPrice({ amount: totalAmount });

  return (
    <motion.div
      layout
      initial="from"
      animate="to"
      exit="from"
      variants={fadeInOut(0.25)}
      className={`group w-full h-auto flex justify-start items-center bg-white py-4 md:py-7 border-b border-gray-100 relative last:border-b-0`}
      title={item?.name}
    >
      <div className="relative flex w-24 md:w-28 h-24 md:h-28 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer me-4">
        <Image
          src={item?.image?.thumbnail}
          width={112}
          height={112}
          loading="eager"
          alt={item.name || 'Product Image'}
          className="bg-gray-300 object-cover"
        />
        <div
          className="absolute top-0 start-0 h-full w-full bg-black bg-opacity-30 md:bg-opacity-0 flex justify-center items-center transition duration-200 ease-in-out md:group-hover:bg-opacity-30 z-20"
          onClick={() => dispatch(removeFromCart(item))}
          role="button"
        >
          <IoIosCloseCircle className="relative text-white text-2xl transform md:scale-0 md:opacity-0 transition duration-300 ease-in-out md:group-hover:scale-100 md:group-hover:opacity-100" />
        </div>
      </div>

      <div className="flex flex-col w-full overflow-hidden">
        <Link
          href={`${ROUTES.PRODUCT}?slug=${item?.slug}`}
          className="truncate text-sm text-heading mb-1.5 -mt-1"
        >
          {generateCartItemName(item.name, item.attributes)}{' '}
          {isVariable && (
            <span className="text-xs text-gray-400">
              - {item?.cartAttributes?.color} - {item?.cartAttributes?.size}
            </span>
          )}
        </Link>
        <span className="text-sm text-gray-400 mb-2.5">
          Unit Price: &nbsp;
          {unitPrice}
        </span>

        <div className="flex items-end justify-between">
          <Counter
            quantity={item.cartQuantity}
            onIncrement={() => dispatch(incrementQuantity(item))}
            onDecrement={() => {
              if (item.cartQuantity > 1) {
                dispatch(decrementQuantity(item));
              }
            }}
            disableIncrement={item.cartQuantity === Number(item.quantity)}
            disableDecrement={item.cartQuantity === 1}
            variant="dark"
          />
          <span className="font-semibold text-sm md:text-base text-heading leading-5">
            {totalPrice}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
