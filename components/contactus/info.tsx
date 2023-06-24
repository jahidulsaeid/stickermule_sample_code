import { FC } from 'react';
import { IoLocationSharp } from '@react-icons/all-files/io5/IoLocationSharp';
import { IoMail } from '@react-icons/all-files/io5/IoMail';
import { IoCallSharp } from '@react-icons/all-files/io5/IoCallSharp';
import GoogleMap from './google-map';

interface Props {
  image?: HTMLImageElement;
}

const ContactInfo: FC<Props> = () => {
  return (
    <div className="mb-6 lg:border lg:rounded-md border-gray-300 lg:p-7">
      <h4 className="text-2xl md:text-lg font-bold text-heading pb-7 md:pb-10 lg:pb-6 -mt-1">
        Find us here
      </h4>

      {/* Address */}
      <div className="flex pb-7">
        <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
          <IoLocationSharp />
        </div>
        <div className="flex flex-col ps-3 2xl:ps-4 text-sm md:text-base">
          <h5 className="text-sm font-bold text-heading">Address</h5>
          Suite : 1211, Level : 12, Multiplan Centre, 69-71, Laboratory Road,
          Dhanmondi, Dhaka-1205, Bangladesh. Phone: +88-02-55153608
        </div>
      </div>

      {/* Email */}
      <div className="flex pb-7">
        <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
          <IoMail />
        </div>
        <div className="flex flex-col ps-3 2xl:ps-4 text-sm md:text-base">
          <h5 className="text-sm font-bold text-heading">Email</h5>
          demo@mail.com
        </div>
      </div>

      {/* Phone */}
      <div className="flex pb-7">
        <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
          <IoCallSharp />
        </div>
        <div className="flex flex-col ps-3 2xl:ps-4 text-sm md:text-base">
          <h5 className="text-sm font-bold text-heading">Phone</h5>
          +880 123456789
        </div>
      </div>

      {/* Google Map */}
      <GoogleMap />
    </div>
  );
};

export default ContactInfo;
