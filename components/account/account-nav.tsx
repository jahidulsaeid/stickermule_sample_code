"use client"

import { usePathname, useRouter } from 'next/navigation';
import { IoLogOutOutline } from '@react-icons/all-files/io5/IoLogOutOutline';
import { ROUTES } from '@/utils/routes';
import Link from 'next/link';
import { useAppDispatch } from '@/redux/hook';

import { userLoggedOut } from '@/redux/features/auth/authSlice';

type Option = {
  name: string;
  slug: string;
  icon?: JSX.Element;
};
export default function AccountNav({ options }: { options: Option[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const newPathname = pathname.split('/').slice(2, 3);
  const mainPath = `/${newPathname[0]}`;

  const handleLogout = () => {
    dispatch(userLoggedOut());
    router.push(ROUTES.HOME);
  };

  return (
    <nav className="flex flex-col">
      {options?.map((item) => {
        const menuPathname = item.slug.split('/').slice(2, 3);
        const menuPath = `/${menuPathname[0]}`;

        return (
          <Link
            key={item.slug}
            href={item.slug}
            className={
              mainPath === menuPath
                ? 'bg-gray-100 font-semibold flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2 '
                : 'flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 rounded mb-2'
            }
          >
            {item.icon}
            <span className="ps-2">{item.name}</span>
          </Link>
        );
      })}
      <button
        // href={`${ROUTES.LOGOUT}`}
        className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 focus:outline-none"
        onClick={handleLogout}
      >
        <IoLogOutOutline className="w-5 h-5" />
        <span className="ps-2">Logout</span>
      </button>
    </nav>
  );
}
