'use client';
import LeftSideView, { FormValues } from '@/components/checkout/left-side.view';
import RightSideView from '@/components/checkout/right-side-view';
import { useState } from 'react';

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start m-auto lg:space-s-7 xl:space-s-12 w-full gap-10">
          <div className="w-full space-y-6">
            <div className="border border-gray-100 rounded-md p-5 md:p-7 bg-white">
              <LeftSideView setIsLoading={setIsLoading} />
            </div>
            {/* <ContactGrid
              className="border border-gray-100 rounded-md p-5 md:p-7 bg-white"
              //@ts-ignore
              // userId={me?.id!}
              profileId={'1'}
              contact={data?.phone}
              label="Contact Number"
              count={1}
            />
            <AddressGrid
              addresses={data?.address}
              className="border border-gray-100 rounded-md p-5 md:p-7 bg-white"
              label="Billing Address"
              count={2}
              userId={data?.id!}
            />

            <CheckBox
              label="Ship to a different address"
              onChange={handleAddress}
            />

            {shipToDifferentAddress && (
              <AddressGrid
                addresses={data?.address}
                className="border border-gray-100 rounded-md p-5 md:p-7 bg-white"
                label="Shipping Address"
                count={2}
                userId={data?.id!}
              />
            )} */}
          </div>
          <div className="w-full lg:w-[320px] xl:w-[440px] flex-shrink-0 mt-10 sm:mt-12 lg:mt-0">
            <RightSideView isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
}
