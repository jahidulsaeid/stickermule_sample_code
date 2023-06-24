import { formatAddress } from '@/utils/format-address';
import { ROUTES } from '@/utils/routes';
import { formatPrice } from '@/utils/use-price';
import dayjs from 'dayjs';
import Link from 'next/link';
import { OrderItems } from './order-items';
// import SuborderItems from './suborder-items';
import Badge from '../ui/badge';
import { getStatus } from '@/utils/get-status';

export default function OrderView({ order }: any) {
  console.log("order_______", order);
  const total = formatPrice({ amount: order?.paid_total! });
  const sub_total = formatPrice({ amount: order?.amount! });
  const shipping_charge = formatPrice({
    amount: order?.delivery_fee ?? 0,
  });
  const tax = formatPrice({ amount: order?.sales_tax ?? 0 });
  const discount = formatPrice({ amount: order?.discount ?? 0 });

  return (
    <div className="max-w-[1280px] mx-auto mb-14 lg:mb-16">
      <div className="w-full mx-auto shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
     
    
          <Link
            href={ROUTES.HOME}
            className="inline-flex items-center text-heading text-accent text-base font-semibold underline hover:no-underline"
          >
            Back to home
          </Link>
          <div className="mt-5 sm:mt-0 text-heading font-semibold flex items-center">
            Status :
            <Badge
              text={getStatus(order?.order_status!)}
              className="whitespace-nowrap bg-heading text-white font-semibold text-sm ms-2"
            />
          </div>
        </div>

        <div className="grid gap-4 lg:gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-11">
          <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
            <h3 className="mb-2 text-base text-heading font-semibold">
              Order Number
            </h3>
            <p className="text-sm text-body">{order?.tracking_number}</p>
          </div>
          <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
            <h3 className="mb-2 text-base text-heading font-semibold">Date</h3>
            <p className="text-sm text-body">
              {dayjs(order?.created_at).format('MMMM D, YYYY')}
            </p>
          </div>
          <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
            <h3 className="mb-2 text-base text-heading font-semibold">Total</h3>
            <p className="text-sm text-body">{total}</p>
          </div>
          <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
            <h3 className="mb-2 text-base text-heading font-semibold">
              Payment Method
            </h3>
            <p className="text-sm text-body">
              {order?.payment_gateway ?? 'N/A'}
            </p>
          </div>
        </div>
        {/* end of order received  */}

        <div className="mt-11">
          <OrderItems products={order?.products} />
        </div>

        <div className="flex flex-col md:flex-row border border-gray-100 rounded-md mt-11">
          {/* " */}
          <div className="w-full md:w-1/2 md:pe-3 border-r px-5 lg:px-7 py-6 lg:py-7 xl:py-8 border-gray-100">
            <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-heading mb-5 lg:mb-6">
              Order Details
            </h2>
            <div className="space-y-4 lg:space-y-5">
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 pe-4 text-heading font-semibold">
                  Total Items
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ps-7 capitalize">
                  {/* {formatString(order?.products?.length, t("text-item"))} */}
                  {order?.products?.length} Items
                </span>
              </p>
              {/* <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 pe-4 text-heading font-semibold">
                  {t('text-deliver-time')}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ps-7">
                  {order?.delivery_time}
                </span>
              </p> */}
              {/* <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 pe-4 text-heading font-semibold">
                  Shipping Address
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ps-7">
                  {formatAddress(order?.shipping_address!)}
                </span>
              </p> */}
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 pe-4 text-heading font-semibold">
                  Address
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ps-7">
                  {formatAddress(order?.billing_address!)}
                </span>
              </p>

              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 pe-4 text-heading font-semibold">
                Note :
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ps-7">
                  {order?.customer_note}
                </span>
              </p>

            </div>
          </div>
          <div className="w-full md:w-1/2 px-5 lg:px-7 py-6 lg:py-7 xl:py-8">
            <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-heading mb-5 lg:mb-6 text-center">
              Total
            </h2>
            <div className="space-y-4 lg:space-y-5">
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0 text-right">
                <strong className="w-1/2 md:w-4/12 pe-4 text-heading font-semibold">
                  SubTotal :
                </strong>
                :<span className="w-1/2 md:w-8/12 ps-7">{sub_total}</span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0 text-right">
                <strong className="w-1/2 md:w-4/12 pe-4 text-heading font-semibold">
                  Shipping Charge :
                </strong>
                :<span className="w-1/2 md:w-8/12 ps-7">{shipping_charge}</span>
              </p>

              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0 text-right">
                <strong className="w-1/2 md:w-4/12 pe-4 text-heading font-semibold">
                  Discount:
                </strong>
                :<span className="w-1/2 md:w-8/12 ps-7">{discount}</span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0 text-right">
                <strong className="w-1/2 md:w-4/12 pe-4 text-heading font-semibold">
                  Total :
                </strong>
                :<span className="w-1/2 md:w-8/12 ps-7">{total}</span>
              </p>
            </div>
          </div>
          {/* end of total amount */}

          {/* end of order details */}
        </div>
        {/* {order?.children?.length ? (
          <div className="mt-11">
            <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-heading mb-3 lg:mb-5 xl:mb-6">
              Sub Orders
            </h2>
            <div>
              <div className="flex items-start mb-6">
                <p className="text-heading text-sm leading-6">
                  <span className="font-bold">Note:</span> Message from the
                  customer:
                </p>
              </div>
              {Array.isArray(order?.children) && order?.children.length && (
                <SuborderItems items={order?.children} />
              )}
            </div>
          </div>
        ) : null} */}
      </div>
    </div>
  );
}
