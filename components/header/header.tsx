import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/assets/icons/social-icon';
import SearchIcon from '@/assets/icons/search-icon';
import Link from 'next/link';
import { ROUTES } from '@/utils/routes';
import HeaderMenu from './header-menu';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import CartButton from '../cart/cart-button';
import { openLoginModal } from '@/redux/features/auth/authSlice';
import { HeartOutlineIcon } from '@/assets/icons/heart-outline';
import { useRouter } from 'next/navigation';
import { menu } from './menu';
import { openMobileMenu } from '@/redux/features/ui/uiSlice';

function Header() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loggedIn } = useAppSelector((state) => state.auth);

  const handleWislist = () => {
    if (!loggedIn) {
      dispatch(openLoginModal());
    } else {
      router.push(ROUTES.WISHLIST);
    }
  };
  return (
    <>
      <div className="w-full h-10 flex items-center border-b relative border-gray-300">
        <div className="container flex justify-between mx-auto">
          <div className="phone_number">
            <a
              className="transition-colors duration-200 hover:text-black text-sm font-medium"
              href="tel:+8801313-772477"
              target='_blank'
            >
              +8801313-772477
            </a>
          </div>
          <div className="social_media flex items-center">
            <ul className="flex justify-center items-center gap-8">
              <li>
                <a href="https://www.facebook.com/giordanoOnlinebd" target='_blank'>
                  <FacebookIcon />
                </a>
              </li>
              {/* <li>
                <a href="#">
                  <TwitterIcon />
                </a>
              </li> */}
              <li>
                <a href="https://www.instagram.com/giordanobangladesh">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@giordanobangladesh9602">
                  <YouTubeIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header
        className="w-full h-16 sm:h-20 lg:h-24 z-20 shadow-header is-scrolling bg-white transition duration-200 ease-in-out sticky top-0"
      >
        <div className="text-gray-700 body-font  bg-white container h-16 sm:h-20 lg:h-24 z-20 transition duration-200 ease-in-out mx-auto">
          <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
            <button
              aria-label="Menu"
              className="menuBtn flex lg:hidden flex-col items-center justify-center px-5 2xl:px-7 flex-shrink-0 h-full outline-none focus:outline-none"
              onClick={() => dispatch(openMobileMenu())}
            >
              <span className="menuIcon">
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </span>
            </button>
            <Link href="/" className="logo mr-5">
              <Image src={logo} width={320} height={120} alt="logo" />
            </Link>

            <HeaderMenu data={menu} className="hidden lg:flex md:ms-6" />

            <div className="flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0 gap-5">
              <button
                className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
                aria-label="search-button"
              >
                <SearchIcon />
              </button>

              <button
                className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
                aria-label="search-button"
                title="Wishlist"
                onClick={handleWislist}
              >
                <HeartOutlineIcon />
              </button>

              <div className="-mt-0.5 flex-shrink-0">
                {loggedIn ? (
                  <Link
                    href={ROUTES.ACCOUNT_ORDERS}
                    className=" text-heading font-medium focus:outline-none uppercase text-xs xl:text-sm"
                  >
                    My Account
                  </Link>
                ) : (
                  <button
                    className=" text-heading font-medium focus:outline-none uppercase text-xs xl:text-sm"
                    onClick={() => dispatch(openLoginModal())}
                  >
                    Sign In
                  </button>
                )}
              </div>
              <CartButton />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
