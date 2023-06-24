import { useWishlistToggleMutation } from '@/redux/features/products/productApi';
import usePrice from '@/utils/use-price';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

export default function WishlistItem({ product }: any) {

  const [mutate, isLoading] = useWishlistToggleMutation();

  const { price, basePrice } = usePrice({
    amount: product?.sale_price ? product?.sale_price : product?.price,
    baseAmount: product?.price,
  });
  const { price: minPrice } = usePrice({
    amount: product?.min_price,
  });
  const { price: maxPrice } = usePrice({
    amount: product?.max_price,
  });

  const removeFromWishlist =  () => {
    mutate(product.id).unwrap().then(() => {
      toast.success('Removed from wishlist');
    }).catch((err) => {
      toast.error("Couldn't remove from wishlist");
    });
  };

  return (
    <div className="flex w-full items-start space-x-4 border-b border-gray-200 py-5 first:pt-0 last:border-0 last:pb-0 rtl:space-x-reverse sm:space-x-5 xl:items-center">
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center border border-gray-200 sm:h-[74px] sm:w-[74px]">
        <Image src={product?.image?.thumbnail} alt="text" layout="fill" />
      </div>

      <div className="flex w-full flex-col items-start sm:flex-row sm:justify-between sm:space-x-4 rtl:sm:space-x-reverse xl:items-center">
        <div className="flex w-full flex-col sm:items-start">
          <Link
            // href={`${Routes.products}/${product?.slug}`}
            href="/"
            className="text-lg font-semibold text-heading transition-colors hover:text-accent"
            locale={product?.language}
          >
            {product?.name}
          </Link>

          {/* <p className="mt-3 space-y-2 space-x-3.5 sm:space-y-0 rtl:sm:space-x-reverse"> */}
          <p className="mt-1.5 flex flex-col items-start space-y-3">
            <Link
              href="/"
              //   href={Routes.shop(product?.shop?.slug)}
              className="inline-block w-auto text-sm font-semibold text-body-dark transition-colors hover:text-accent"
            >
              {product?.shop?.name}
            </Link>
          </p>
        </div>

        <div className="mt-4 flex w-full flex-col justify-between space-y-3 xs:flex-row xs:space-y-0 sm:w-auto sm:flex-col sm:justify-end sm:space-y-3 md:mt-0">
          {product?.product_type.toLowerCase() === 'variable' ? (
            <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
              <span className="text-xl font-semibold text-heading">
                {minPrice}
              </span>
              <span> - </span>
              <span className="text-xl font-semibold text-heading">
                {maxPrice}
              </span>
            </div>
          ) : (
            <span className="flex min-w-150 items-center sm:justify-end">
              <ins className="text-xl font-semibold text-heading no-underline">
                {price}
              </ins>
              {basePrice && (
                <del className="text-base font-normal text-muted ltr:ml-3 rtl:mr-3">
                  {basePrice}
                </del>
              )}
            </span>
          )}

          <div className="flex items-center space-x-6 rtl:space-x-reverse sm:justify-end">
            {Number(product?.quantity) > 0 && (
              <>
                {/* {product?.product_type.toLowerCase() === 'variable' ? (
                  <AddToCartBtn
                    variant="text"
                    onClick={handleVariableProduct}
                  />
                ) : (
                  <AddToCart variant="text" data={product} />
                )} */}
              </>
            )}

            {Number(product?.quantity) <= 0 && (
              <span className="whitespace-nowrap text-sm font-semibold text-red-300 sm:mt-0">
                Out of stock
              </span>
            )}
            <span className="flex h-7 w-px border-r border-dashed border-gray-300" />
            <button
              className="whitespace-nowrap text-sm font-semibold text-red-500 hover:underline sm:mt-0 cursor-pointer"
              onClick={removeFromWishlist}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
