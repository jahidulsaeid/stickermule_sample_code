
import React from "react";

import OrderSingleTable from "./order-single-table";
import OrderSingleList from "./order-single-list";
import Pagination from "../ui/pagination";
import useWindowSize from "react-use/lib/useWindowSize";
import { Order, PaginatedOrder } from "@/types";

type Props = {
  orders: PaginatedOrder | undefined | null;
  onPagination: (key: number) => void;
};

const OrdersTable: React.FC<Props> = ({ orders, onPagination }: Props) => {
  const { width } = useWindowSize();

  return (
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        Orders
      </h2>
      <div className="w-full flex flex-col">
        {width >= 1025 ? (
          <table>
            <thead className="text-sm lg:text-base">
              <tr>
                <th className="bg-gray-100 p-4 text-heading font-semibold text-start first:rounded-ts-md w-24">
                  Order
                </th>
                <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center w-40 xl:w-56">
                  Date
                </th>
                <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center w-36 xl:w-44">
                  Status
                </th>
                <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-center">
                  Total
                </th>
                <th className="bg-gray-100 p-4 text-heading font-semibold text-start lg:text-end last:rounded-te-md w-24">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-sm lg:text-base">
              {orders &&
                orders?.data?.map((order: Order) => (
                  // <OrderSingleList key={order.id} order={order} />
                  <OrderSingleTable key={order.id} order={order} />
                ))}
            </tbody>
          </table>
        ) : (
          <div className="w-full space-y-4">
            {orders &&
              orders?.data?.map((order: Order) => (
                <OrderSingleTable key={order.id} order={order} />
              ))}
          </div>
        )}
      </div>
      {/* Pagination */}
      {/* {!!paginatorInfo.total && (
        <div className="flex justify-end items-center pt-5">
          <Pagination
            total={paginatorInfo.total}
            current={paginatorInfo.currentPage}
            pageSize={paginatorInfo.perPage}
            onChange={onPagination}
          />
        </div>
      )} */}
    </>
  );
};

export default OrdersTable;
