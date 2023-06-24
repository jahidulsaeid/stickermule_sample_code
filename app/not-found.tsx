import Image from 'next/image';
import { IoHomeSharp } from '@react-icons/all-files/io5/IoHomeSharp';
import Link from 'next/link';
import ErrorImg from '@/assets/images/404.svg';

const ErrorInformation: React.FC = () => {
  return (
    <div className="border-t border-b border-gray-300 text-center px-16 py-16 sm:py-20 lg:py-24 xl:py-32 flex items-center justify-center">
      <div>
        <Image
          src={ErrorImg}
          alt="404"
          width={822}
          height={492}
        />

        <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
          Looks like you are lost
        </h3>
        <p className="text-sm md:text-base leading-7 pt-2 md:pt-3.5 pb-7 md:pb-9">
          We can&apos;t find the page you&apos;re looking for
        </p>
        <Link
          href="/"
          className="text-[13px] md:text-sm lg:text-base leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 bg-heading text-white px-4 md:px-6  py-2.5 lg:py-3 hover:text-white hover:bg-gray-600 hover:shadow-cart rounded-lg"
        >
          <IoHomeSharp />
          <span className="ps-1.5">Go Home</span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorInformation;
