'use client';

import NotFound from '@/components/404/not-found';
import OrdersTable from '@/components/account/orders-table';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { useGetOrdersQuery } from '@/redux/features/orders/orderApi';
import { useState } from 'react';

export default function OrdersTablePage() {
  const [page, setPage] = useState(1);

  const { data: orders, isLoading } = useGetOrdersQuery(5);

  function onPagination(current: any) {
    setPage(current);
  }

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-[300px]">
          <Spinner showText={false} />
        </div>
      ) : (
        <>
          {orders?.data?.length ? (
            <OrdersTable orders={orders} onPagination={onPagination} />
          ) : (
            <h3 className="w-full text-center text-lg lg:text-xl font-semibold text-heading my-7">
              No Orders Found
            </h3>
          )}
        </>
      )}
    </>
  );
}
