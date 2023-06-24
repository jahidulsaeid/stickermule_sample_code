'use client';
import { useAppSelector } from '@/redux/hook';
import { ROUTES } from '@/utils/routes';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Page() {
  // const { loggedIn } = useAppSelector((state) => state.auth);
  // const route = useRouter();

  // useEffect(() => {
  //   if (!loggedIn) return route.push(ROUTES.SIGNIN);
  // }, [loggedIn, route]);
  // if (!loggedIn) return route.push(ROUTES.SIGNIN);

  return (
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-3 xl:mb-5">
        Dashboard
      </h2>
      <div className="text-sm leading-7 md:text-base md:leading-loose">
        <p className="capitalize">
          Hello,
          {/* <span className="font-bold">CIS</span> */}
          {/* <Link
            href={`${ROUTES.LOGOUT}`}
            className="font-bold underline cursor-pointer focus:outline-none"
          >
            Logout
          </Link> */}
        </p>
        <br />
        From your account dashboard you can view your{' '}
        <Link
          href={ROUTES.ACCOUNT_ORDERS}
          className="text-heading underline font-semibold"
        >
          Recent orders
        </Link>
        , manage your{' '}
        <Link
          href={ROUTES.ACCOUNT_ADDRESS}
          className="text-heading underline font-semibold"
        >
          Address
        </Link>{' '}
        And{' '}
        <Link
          href={ROUTES.ACCOUNT_CONTACT_NUMBER}
          className="text-heading underline font-semibold"
        >
          Contact Number
        </Link>{' '}
        And{' '}
        <Link
          href={ROUTES.ACCOUNT_CHANGE_PASSWORD}
          className="text-heading underline font-semibold"
        >
          change your password
        </Link>
      </div>
    </>
  );
}
