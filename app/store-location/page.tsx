import React from 'react';
import { IoCallSharp } from '@react-icons/all-files/io5/IoCallSharp';
import { IoLocationSharp } from '@react-icons/all-files/io5/IoLocationSharp';

const Page = () => {
  const shopList = [
    {
      id: 1,
      address: 'Anam Rangs Plaza, Road 6/A, Satmasjid Road, Dhanmondi.',
      phone: '+88 01313-772481',
      map_location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1379785600243!2d90.3742362!3d23.7424586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4b26043675%3A0x208b794ec82a3085!2sAnam%20Rangs%20Smart%20Plaza!5e0!3m2!1sen!2sbd!4v1687327050297!5m2!1sen!2sbd',
    },

    {
      id: 2,
      address:
        'Bashundhara City Shopping Mall, Shop: 41, Block: A, Level :1, Panthapath.',
      phone: '+88 01313-772482',
      map_location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.8926144682264!2d90.3883528!3d23.7512085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ab96ba5afd%3A0xdc6e738726d80bd8!2sGIORDANO%20-%20Bashundhara%20City!5e0!3m2!1sen!2sbd!4v1687327205206!5m2!1sen!2sbd',
    },

    {
      id: 3,
      address: 'Police Plaza Concord, Hatirjheel, Gulshan.',
      phone: '+88 01313-772483',
      map_location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7302.313454284734!2d90.4124857!3d23.7774327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70abd6697dd%3A0x2de770411575588c!2sPolice%20Plaza%20Concord%20Shopping%20Mall!5e0!3m2!1sen!2sbd!4v1687327245481!5m2!1sen!2sbd',
    },

    {
      id: 4,
      address: 'Banani Road no: 11, Block. F, House. 54, Banani.',
      phone: '+88 01313-772484',
      map_location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.6950138454096!2d90.4033316!3d23.7908453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72879eca77f%3A0xc19d6b300ab12d6e!2sGiordano%20Bangladesh!5e0!3m2!1sen!2sbd!4v1687327684026!5m2!1sen!2sbd',
    },

    {
      id: 5,
      address: 'SKS Tower, VIP road, DOHS, Mohakhali.',
      phone: '+88 01313-772485',
      map_location:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.136169965882!2d90.39437557581897!3d23.77816488770888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c769ad5e7f6f%3A0x1d928a50d9cbcc90!2sSKS%20Shopping%20Mall!5e0!3m2!1sen!2sbd!4v1687327386907!5m2!1sen!2sbd',
    },
    {
      id: 6,
      address:
        'Bashundhara City Shopping Mall, Level :7, Blook : D, Panthapath.',
      phone: '+88 01313-772486',
      map_location:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.8926144682264!2d90.3883528!3d23.7512085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ab96ba5afd%3A0xdc6e738726d80bd8!2sGIORDANO%20-%20Bashundhara%20City!5e0!3m2!1sen!2sbd!4v1687327205206!5m2!1sen!2sbd',
    },
  ];

  return (
    <div className="flex flex-col gap-y-6 py-20">
      {shopList?.map((item) => {
        return (
          <div
            className="container flex flex-col md:flex-row md:gap-y-0 gap-y-2 md:gap-x-6"
            key={item.id}
          >
            <div className="p-5 md:w-[50%] w-full flex flex-col border-4 border-gray-200 gap-8  justify-center">
              <h1 className="text-xl uppercase font-medium">Shop {item.id}</h1>
              <div className="flex">
                <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
                  <IoLocationSharp />
                </div>
                <div className="flex flex-col ps-3 2xl:ps-4 text-sm md:text-base">
                  <h5 className="text-sm font-bold text-heading">Address</h5>
                  {item.address}
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
                  <IoCallSharp />
                </div>
                <div className="flex flex-col ps-3 2xl:ps-4 text-sm md:text-base">
                  <h5 className="text-sm font-bold text-heading">Phone</h5>
                  {item.phone}
                </div>
              </div>
            </div>
            <div className="md:w-[50%] h-[300px]">
              <iframe
                className="w-full aspect-video h-full"
                src={item.map_location}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
