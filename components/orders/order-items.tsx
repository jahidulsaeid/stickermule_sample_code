import { formatPrice } from '@/utils/use-price';
import Image from 'next/image';
import { useMemo } from 'react';
import { Table } from '@/components/ui/table';

const OrderItemList = (_: any, record: any) => {
  console.log("🚀 ~ file: order-items.tsx:7 ~ OrderItemList ~ record:", record)
  const price = formatPrice({
    amount: record.pivot?.unit_price,
  });
  let name = record.name;
  if (record?.pivot?.variation_option_id) {
    const getvariation = record?.variation_options?.find(
      (vo: any) => vo?.id === Number(record?.pivot?.variation_option_id)
    );
    console.log("🚀 ~ file: order-items.tsx:15 ~ OrderItemList ~ variationTitle:",record, getvariation)
    name = `${name} - ${getvariation?.title}`;
  }
  return (
    <div className="flex items-center">
      <div className="w-16 h-16 flex flex-shrink-0 rounded overflow-hidden relative">
        <Image
          src={record.image?.thumbnail}
          alt={name}
          className="w-full h-full object-cover bg-gray-200"
          layout="fill"
        />
      </div>

      <div className="flex flex-col ms-4 overflow-hidden">
        <div className="flex mb-2 text-body">
          <span className="text-[15px] truncate inline-block overflow-hidden">
            {/* {name} x&nbsp; */}
            {name}
          </span>
          {/* <span className="text-[15px] text-heading font-semibold truncate inline-block overflow-hidden">
            {record.unit}
          </span> */}
        </div>
        <span className="text-[15px] text-accent font-semibold mb-1 truncate inline-block overflow-hidden">
          {price}
        </span>
      </div>
    </div>
  );
};
export const OrderItems = ({ products }: { products: any }) => {

  const orderTableColumns = useMemo(
    () => [
      {
        title: <span className="ps-20 ms-2">
          Products
        </span>,
        dataIndex: '',
        key: 'items',
        align: 'left',
        width: 250,
        ellipsis: true,
        render: OrderItemList,
      },
      {
        title: 'Quantity',
        dataIndex: 'pivot',
        key: 'pivot',
        align: 'center',
        width: 100,
        render: function renderQuantity(pivot: any) {
          return (
            <p className="text-[15px] md:text-base font-semibold text-heading">
              {pivot.order_quantity}
            </p>
          );
        },
      },
      {
        title: "Price",
        dataIndex: 'pivot',
        key: 'price',
        align: 'center',
        width: 100,
        render: function RenderPrice(pivot: any) {
          const price = formatPrice({
            amount: pivot.subtotal,
          });
          return (
            <p className="text-[15px] md:text-base font-semibold text-heading">
              {price}
            </p>
          );
        },
      },
    ],
    []
  );

  return (
    <Table
      //@ts-ignore
      columns={orderTableColumns}
      data={products}
      rowKey={(record: any) =>
        record.pivot?.variation_option_id
          ? record.pivot.variation_option_id
          : record.created_at
      }
      className="orderDetailsTable w-full"
      scroll={{ x: 350, y: 500 }}
    />
  );
};
