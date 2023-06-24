import { Order } from '@/types';
import { ROUTES } from '@/utils/routes';
import { formatPrice } from '@/utils/use-price';
import dayjs from 'dayjs';
import Link from 'next/link';
import Badge from '../ui/badge';
import { getStatus } from '@/utils/get-status';

type Props = {
  order: Order;
};

const OrderSingleTable: React.FC<Props> = ({ order }) => {
  const itemTotal = formatPrice({
    amount: order?.total,
  });

  return (
    <tr className="border-b border-gray-300 last:border-b-0">
      <td className="px-4 py-5 text-start">
        <Link
          href={`${ROUTES.ACCOUNT_ORDERS}/${order?.tracking_number}`}
          className="underline hover:no-underline text-body"
        >
          #{order?.id}
        </Link>
      </td>
      <td className="text-start lg:text-center px-4 py-5 text-heading">
        {dayjs(order?.created_at).format('MMMM D, YYYY')}
      </td>
      <td className="text-start lg:text-center px-4 py-5 text-heading">
        {/* @ts-ignore */}
        <Badge
          text={getStatus(order.order_status)}
          className="whitespace-nowrap bg-heading text-white font-semibold text-sm ms-2"
        />
      </td>
      <td className="text-start lg:text-center px-4 py-5 text-heading">
        {itemTotal} for {order?.products?.length} items
      </td>
      <td className="text-end px-4 py-5 text-heading">
        <Link
          href={`${ROUTES.ORDER}?id=${order?.id}`}
          className="text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
        >
          Details
        </Link>
      </td>
    </tr>
  );
};

export default OrderSingleTable;
