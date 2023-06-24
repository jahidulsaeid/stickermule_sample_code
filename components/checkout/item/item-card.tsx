import usePrice, { formatPrice } from '@/utils/use-price';
import cn from 'classnames';
import { isEmpty } from 'lodash';
import Image from 'next/image';

interface Props {
  item: any;
  notAvailable?: boolean;
}

const ItemCard = ({ item, notAvailable }: Props) => {
  const isVariable = !isEmpty(item.variations);
  // const itemTotal =
  //   Number(item.sale_price || item.price) * Number(item.cartQuantity);
  const itemTotal = isVariable
    ? Number(item.max_price || item.min_price) * Number(item.cartQuantity)
    : Number(item.sale_price || item.price) * Number(item.cartQuantity);
  const price = formatPrice({ amount: itemTotal });
  return (
    <div
      className={cn('flex justify-between items-center py-2.5')}
      key={item.id}
    >
      <div className="w-[60px] h-[60px] me-4 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={item?.image?.thumbnail}
          width={60}
          alt="Product Image"
          height={60}
          quality={100}
          className="bg-gray-100 object-cover"
        />
      </div>
      <p className="flex items-center justify-between text-base pe-1.5 me-auto">
        <span
          className={cn('text-sm', notAvailable ? 'text-red-500' : 'text-body')}
        >
          <span
            className={cn(
              'text-sm font-bold',
              notAvailable ? 'text-red-500' : 'text-heading'
            )}
          >
            {item.cartQuantity}
          </span>
          <span className="mx-2">x</span>
          <span>{item.name}</span>
          {item.product_type === 'variable' && (
            <span> | {item.selectedVariation.title}</span>
          )}
        </span>
      </p>
      <span
        className={cn(
          'text-sm font-semibold ',
          notAvailable ? 'text-red-500' : 'text-heading'
        )}
      >
        {!notAvailable ? price : 'Not Available'}
      </span>
    </div>
  );
};

export default ItemCard;
