'use client';
import EmptyCart from '@/assets/icons/empty-cart';
import { ItemInfoRow } from './item-info-row';
import ItemCard from './item-card';
import { useAppSelector } from '@/redux/hook';
import { formatPrice } from '@/utils/use-price';
import Button from '@/components/ui/button';
import { useNewOrderMutation } from '@/redux/features/orders/orderApi';
import { useRouter } from 'next/navigation';
import { isEmpty } from 'lodash';
import { ROUTES } from '@/utils/routes';
// import BannerCard from '@/components/common/banner-card';
// import { title } from 'process';
// import Link from 'next/link';
// import Image from 'next/image';
// import promo_img from '@/assets/tempimg/promo5.png';
import ProductCard from '@/components/product/product-card';
import { useGetProductQuery } from '@/redux/features/products/productApi';

interface Props {
  className?: string;
  isSubmit?: boolean;
}

export default function ItemList({ className, isSubmit }: Props) {
  const router = useRouter();
  const { cartItems } = useAppSelector((state) => state.product);
  // const sub_total = cartItems?.reduce(
  //   (acc, item) => acc + Number(item.sale_price || item.price) * item.cartQuantity,
  //   0
  // );

  const { data: product } = useGetProductQuery(cartItems[0]?.slug);
  console.log('🚀 ~ file: item-list.tsx:34 ~ ItemList ~ product:', product);

  const sub_total = cartItems.reduce((acc, item) => {
    const isVariable = !isEmpty(item.variations);
    if (isVariable) {
      return (
        acc +
        Number(item.max_price || item.min_price) * Number(item.cartQuantity)
      );
    } else {
      return (
        acc + Number(item.sale_price || item.price) * Number(item.cartQuantity)
      );
    }
  }, 0);
  const subTotal = formatPrice({ amount: sub_total });
  const shipping_charge = 60;
  const shipping = formatPrice({ amount: shipping_charge });

  const total = formatPrice({ amount: sub_total + shipping_charge });

  const [mutate, { isLoading }] = useNewOrderMutation();

  const handleCheckout = () => {
    const data = {
      products: cartItems.map((item) => ({
        order_quantity: item.cartQuantity,
        product_id: item.id,
        unit_price: Number(item.sale_price || item.price),
        subtotal: item.sale_price || item.price * item.cartQuantity,
      })),
      status: 1,
      amount: sub_total,
      sales_tax: 0,
      // coupon_id: 0,
      shop_id: 1,
      paid_total: sub_total + shipping_charge,
      total: sub_total + shipping_charge,
      customer_contact: '01829738891',
      payment_gateway: 'CASH_ON_DELIVERY',
      billing_address: {
        country: 'US',
        state: 'CA',
        zip: 123456,
        city: 'California',
        street_address: 'djksdjksdjskd, djshsjdhsdsd',
      },
      shipping_address: {
        country: 'US',
        state: 'CA',
        zip: 123456,
        city: 'California',
        street_address: 'djksdjksdjskd, djshsjdhsdsd',
      },
    };

    mutate(data)
      .unwrap()
      .then((res) => {
        router.push(`${ROUTES.ORDER}?id=${res.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className={className}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between text-heading text-base font-semibold bg-gray-200 px-6 py-3.5 border-b border-gray-300">
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          {cartItems?.length > 0 ? (
            <div className="px-6 py-2.5">
              {cartItems?.map((item) => (
                <ItemCard item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <EmptyCart className="mx-auto my-20" />
          )}
        </div>

        <div className="">
          <ItemInfoRow title="Subtotal" value={subTotal} />
          {/* <ItemInfoRow title="Tax" value={tax} /> */}
          <ItemInfoRow title="Shipping" value={shipping} />
          {/* {discount && coupon ? (
          <div className="flex justify-between">
            <p className="text-sm text-body me-4">Do you have coupon?</p>
            <span className="text-xs font-semibold text-red-500 flex items-center me-auto">
              ({coupon?.code})
              <button onClick={() => setCoupon(null)}>
                <CloseIcon className="w-3 h-3 ms-2" />
              </button>
            </span>
            <span className="text-sm text-body">{discountPrice}</span>
          </div>
        ) : (
          <div className="flex justify-between py-4 px-6 border-t border-gray-100">
            <Coupon />
          </div>
        )} */}
          {/* <div className="flex justify-between border-t-4 border-double border-gray-100 py-4 px-6"> */}
          <div className="flex justify-between border-t-4 border-double border-gray-100 py-4 px-6">
            <p className="text-base font-semibold text-heading">Total</p>
            <span className="text-base font-semibold text-heading">
              {total}
            </span>
          </div>
        </div>
        {/* <PaymentGrid className="px-6 py-5 border border-gray-100" /> */}
        {/* <PlaceOrderAction>Place Order</PlaceOrderAction> */}
        <div className="m-5">
          <Button
            className="w-full"
            type="submit"
            form="checkout-form"
            loading={isSubmit}
            disabled={isSubmit}
          >
            Place Order
          </Button>
        </div>
      </div>

      <div className="mx-auto pt-10 rounded">
        {product?.related_products.length > 0 && (
          <ProductCard
            product={product?.related_products[0]}
            variant="grid"
            imgHeight={350}
            imgWidth={550}
            imageContentClassName="w-full"
          />
        )}
      </div>

      {/* <div className="mx-auto pt-10 rounded">
        <Link
          href="/"
          className="h-full group flex justify-center relative overflow-hidden"
        >
          <Image
            src={promo_img}
            // width={selectedImage.width}
            // height={selectedImage.height}
            width={500}
            height={500}
            alt={title}
            quality={100}
            // className={cn("bg-gray-300 object-cover w-full", {
            // 	"rounded-md": variant === "rounded",
            // })}
            className='rounded-md'
          />

          <div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
        </Link>
      </div> */}
    </>
  );
}
