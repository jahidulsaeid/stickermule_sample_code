import { Table } from '@/components/ui/table';

import dayjs from 'dayjs';
import Badge from '../ui/badge';
import usePrice, { formatPrice } from '@/utils/use-price';
import Link from 'next/link';
import { ROUTES } from '@/utils/routes';

interface SuborderItemsProps {
  items: any;
}

const SuborderItems: React.FC<SuborderItemsProps> = ({ items }) => {
  const orderTableColumns = [
    {
      title: 'Tracking Number',
      dataIndex: 'tracking_number',
      key: 'tracking_number',
      align: 'left',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      align: 'left',
      render: (created_at: string) => dayjs(created_at).format('MMMM D, YYYY'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'left',
      render: function renderStatus(status: any) {
        return (
          <Badge text={status?.name} className="font-semibold text-white" />
        );
      },
    },
    {
      title: 'Items',
      dataIndex: 'products',
      key: 'products',
      align: 'left',
      // render: (products: any) => formatString(products?.length, t("text-item")),
    },
    {
      title: 'Total',
      dataIndex: 'paid_total',
      key: 'paid_total',
      align: 'left',
      // width: 100,
      render: function TotalPrice(paid_total: any) {
        const price = formatPrice({ amount: paid_total });
        return <p>{price}</p>;
      },
    },
    {
      title: '',
      dataIndex: 'tracking_number',
      key: 'tracking_number',
      align: 'center',
      // width: 100,
      render: function renderTrackingNumber(tracking_number: string) {
        return (
          <Link
            href={`${ROUTES.ORDERS}/${tracking_number}`}
            className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow text-heading underline hover:no-underline"
          >
            View
          </Link>
        );
      },
    },
  ];
  return (
    <Table
      //@ts-ignore
      columns={orderTableColumns}
      emptyText="No Orders Found"
      //@ts-ignore
      data={items}
      rowKey="id"
      scroll={{ x: 800 }}
      className="subOrderTable w-full"
    />
  );
};

export default SuborderItems;
