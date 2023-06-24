import type { FC } from 'react';
import Link from 'next/link';

import { FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from '@/assets/icons/social-icon';

const WidgetSocial: FC = () => {
  return (
    <div>
      <h4 className="text-heading text-sm md:text-base xl:text-lg font-semibold mb-5 2xl:mb-6 3xl:mb-7 uppercase">
        Social
      </h4>
      <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
        <li className="flex items-baseline">
          <span className="me-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
            <FacebookIcon />
          </span>

          <Link
            href="https://www.facebook.com/giordanoOnlinebd"
            target='_blank'
            className="transition-colors duration-200 hover:text-black"
          >
            Facebook
          </Link>
        </li>
        {/* <li className="flex items-baseline">
          <span className="me-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
            <TwitterIcon />
          </span>

          <Link
            href="https://www.twitter.com/giordanoOnlinebd"
            target='_blank'
            className="transition-colors duration-200 hover:text-black"
          >
            Twitter
          </Link>
        </li> */}
        <li className="flex items-baseline">
          <span className="me-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
            <InstagramIcon />
          </span>

          <Link
            href="https://www.instagram.com/giordanobangladesh"
            target='_blank'
            className="transition-colors duration-200 hover:text-black"
          >
            Instagram
          </Link>
        </li>
        <li className="flex items-baseline">
          <span className="me-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
            <YouTubeIcon />
          </span>

          <Link
            href="https://www.youtube.com/@giordanobangladesh9602"
            target='_blank'
            className="transition-colors duration-200 hover:text-black"
          >
            Youtube
          </Link>
        </li>
    
      </ul>
    </div>
  );
};

export default WidgetSocial;
