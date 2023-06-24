'use client';
import NotFound from '@/components/404/not-found';
import WishlistItem from '@/components/account/wishlist-item';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { useGetWishlistQuery } from '@/redux/features/products/productApi';
import React from 'react';

export default function Page() {
  const { data: wishlists, isLoading } = useGetWishlistQuery();
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-[300px]">
          <Spinner showText={false} />
        </div>
      ) : (
        <>
          {wishlists.data?.length ? (
            wishlists.data?.map((item: any, index: number) => (
              <WishlistItem key={index} product={item} />
            ))
          ) : (
            <h3 className="w-full text-center text-lg lg:text-xl font-semibold text-heading my-7">
              No Wishlist Found
            </h3>
          )}
        </>
      )}
    </>
  );
}
