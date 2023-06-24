import type { FC } from 'react';
import { footer } from '../footer/data';
import Image from 'next/image';
const { payment } = footer;

interface CopyrightProps {
  payment?: {
    id: string | number;
    path?: string;
    name: string;
    image: string;
    width: number;
    height: number;
  }[];
}

const PaymentWidget: FC<CopyrightProps> = () => {
  return (
    <div>
      <h4 className="text-heading text-sm md:text-base xl:text-lg font-semibold mb-5 2xl:mb-6 3xl:mb-7 uppercase">
        We Accept
      </h4>
      {payment && (
        <ul className="hidden md:flex flex-wrap justify-center items-center space-s-4 xs:space-s-5 lg:space-s-7 mb-1 md:mb-0 mx-auto md:mx-0 gap-5">
          {payment?.map((item) => (
            <li
              className="mb-2 md:mb-0 transition hover:opacity-80"
              key={`payment-list--key${item.id}`}
            >
              <a
                href={item.path ? item.path : '/#'}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={item.image}
                  alt="payment"
                  height={item.height}
                  width={item.width}
                />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentWidget;
