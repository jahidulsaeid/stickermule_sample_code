'use client';
import { IoHomeOutline } from '@react-icons/all-files/io5/IoHomeOutline';
import { IoCartOutline } from '@react-icons/all-files/io5/IoCartOutline';
import { IoPersonOutline } from '@react-icons/all-files/io5/IoPersonOutline';
import { MdFavoriteBorder } from '@react-icons/all-files/md/MdFavoriteBorder';
// import { IoCallOutline } from '@react-icons/all-files/io5/IoCallOutline';
import { IoSettingsOutline } from '@react-icons/all-files/io5/IoSettingsOutline';
import { AiOutlineUnorderedList } from '@react-icons/all-files/ai/AiOutlineUnorderedList';
import { ROUTES } from '@/utils/routes';
import AccountNav from '@/components/account/account-nav';
import { useAppSelector } from '@/redux/hook';
import { useRouter } from 'next/navigation';

const accountMenu = [
  {
    slug: ROUTES.ACCOUNT_ORDERS,
    name: 'My Orders',
    icon: <AiOutlineUnorderedList className="w-[18px] md:w-5 h-[18px] md:h-5" />,
  },
  // {
  //   slug: ROUTES.ACCOUNT,
  //   name: 'Dashboard',
  //   icon: <IoHomeOutline className="w-[18px] md:w-5 h-[18px] md:h-5" />,
  // },
  {
    slug: ROUTES.MY_ACCOUNT,
    name: 'My Account',
    icon: <IoPersonOutline className="w-[18px] md:w-5 h-[18px] md:h-5" />,
  },

  {
    slug: ROUTES.WISHLIST,
    name: 'Wishlist',
    icon: <MdFavoriteBorder className="w-[18px] md:w-5 h-[18px] md:h-5" />,
  },

  // {
  //   slug: ROUTES.ACCOUNT_CONTACT_NUMBER,
  //   name: 'Phone Number',
  //   icon: <IoCallOutline className="w-[18px] md:w-5 h-[18px] md:h-5" />,
  // },
  {
    slug: ROUTES.ACCOUNT_CHANGE_PASSWORD,
    name: 'Change Password',
    icon: <IoSettingsOutline className="w-[18px] md:w-5 h-[18px] md:h-5" />,
  },
];

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const { loggedIn } = useAppSelector((state) => state.auth);
  const route = useRouter();
  if (!loggedIn) {
    return route.push(ROUTES.SIGNIN);
  }
  return (
    <>
      {/* <PageHeader pageHeader="text-page-my-account" /> */}
      <div className="container">
        <div className="py-16 lg:py-20 px-0 xl:max-w-screen-xl mx-auto flex  md:flex-row w-full">
          <div className="flex flex-col lg:flex-row w-full">
            {/* <div className="lg:hidden">
              <AccountNavMobile options={accountMenu} />
            </div> */}
            <div className="hidden lg:block flex-shrink-0 md:w-2/6 2xl:w-4/12 md:pe-8 lg:pe-12 xl:pe-16 2xl:pe-20 pb-2 md:pb-0">
              <AccountNav options={accountMenu} />
            </div>
            <div className="lg:w-4/6 2xl:w-8/12 mt-6 lg:mt-0">{children}</div>
          </div>
        </div>

        {/* <Subscription /> */}
      </div>
    </>
  );
};

export default AccountLayout;
