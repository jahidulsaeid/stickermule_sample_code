import type { FC } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/utils/routes';

const WidgetContact: FC = () => {
  return (
    <div>
      <h4 className="text-heading text-sm md:text-base xl:text-lg font-semibold mb-5 2xl:mb-6 3xl:mb-7 uppercase">
        Service Center
      </h4>
      <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
        {ROUTES?.CONTACT && (
          <li className="flex items-baseline">
            <Link
              href={ROUTES.CONTACT}
              className="transition-colors duration-200 hover:text-black"
            >
              Contact Us
            </Link>
          </li>
        )}

        <li className="flex items-baseline">
          Email:
          <Link
            target="_blank"
            href="mailto:info@giordanobd.com"
            className="transition-colors duration-200 hover:text-black ml-1"
          >
            info@giordanobd.com
          </Link>
        </li>

        <li className="flex items-baseline">
          Phone:
          <Link
            target="_blank"
            href="tel:+8801313-772477"
            className="transition-colors duration-200 hover:text-black ml-1"
          >
            +8801313-772477
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default WidgetContact;
