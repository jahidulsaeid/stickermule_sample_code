import Image from 'next/image';
import React from 'react';
import washing from './images/washing.jpg';
import t1_t1 from './images/Machine-Wash1.jpg';
import t1_t2 from './images/1.jpg';
import cold from './images/cold.jpg';
import t3_t1 from './images/3-1-1.jpg';
import cold2 from './images/cold2.jpg';
import t3_t2 from './images/2.jpg';
import t2_t2 from './images/2-2.jpg';
import cold3 from './images/cold3.jpg';
import t3_1 from './images/3.jpg';
import t3_1o from './images/3-1.jpg';

export default function Washing() {
  return (
    <table className="wshng w-full" border={2}>
      <tbody>
        <tr>
          <td className='p-[15px] border border-gray-300'>
            <table cellPadding={1} className="w-full">
              <tbody>
                <tr>
                  <td align="center" className='border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px] px-8' >
                    <Image src={washing} alt="washing" className="w-[60px]" />
                    <b>Washing</b>
                  </td>
                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                    <table cellPadding={2} className="w-full">
                      <tbody>
                        <tr>
                          <td align="center" className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                            {/* <img
                              decoding="async"
                              className='w-[23px]'
                              src="https://giordanopk.com/wp-content/uploads/2022/09/cold.jpg"
                            /> */}
                            <Image src={cold} className='w-[23px]' alt='' />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Machine Wash, COLD</td>
                          <td align="center" className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                            {/* <img
                              decoding="async"
                              className='w-[23px]'
                              src="https://giordanopk.com/wp-content/uploads/2022/09/Machine-Wash1.jpg"
                              alt=""
                              //   border={0}
                            /> */}
                            <Image src={t1_t1} className='w-[23px]' alt='' />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Machine Wash, COLD Permanent Press</td>
                          <td align="center" className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                            {/* <img
                              decoding="async"
                              className='w-[23px]'
                              src="https://giordanopk.com/wp-content/uploads/2022/09/1.jpg"
                              alt=""
                              //   border={0}
                            /> */}
                            <Image src={t1_t2} className='w-[23px]' alt='' />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Machine Wash, COLD Gentle Cycle</td>
                          <td align="center" className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                            {/* <img
                              decoding="async"
                              className='w-[23px]'
                              src="https://giordanopk.com/wp-content/uploads/2022/09/3-1-1.jpg"
                            /> */}
                            <Image src={t3_t1} className='w-[23px]' alt='' />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Hand Wash</td>
                        </tr>
                        <tr>
                          <td align="center" className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                            {/* <img
                              decoding="async"
                              className='w-[23px]'
                              src="https://giordanopk.com/wp-content/uploads/2022/09/cold2.jpg"
                              alt=""
                              //   border={0}
                            /> */}
                            <Image src={cold2} className='w-[23px]' alt='' />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Machine Wash, WARM</td>
                          <td align="center" className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                            {/* <img
                              decoding="async"
                              className='w-[23px]'
                              src="https://giordanopk.com/wp-content/uploads/2022/09/2.jpg"
                              alt=""
                              //   border={0}
                            /> */}
                            <Image src={t3_t2} className='w-[23px]' alt='' />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Machine Wash, WARM Permanent Press</td>
                          <td align="center" className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                            {/* <img
                              decoding="async"
                              className='w-[23px]'
                              src="https://giordanopk.com/wp-content/uploads/2022/09/2-2.jpg"
                              alt=""
                              //   border={0}
                            /> */}
                            <Image src={t2_t2} className='w-[23px]' alt='' />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Machine Wash, WARM Gentle Cycle</td>
                          <td align="center" className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                            {/* <img
                              decoding="async"
                              className='w-[23px]'
                              src="https://giordanopk.com/wp-content/uploads/2022/09/3-2.jpg"
                              alt=""
                              //   border={0}
                            /> */}
                            <Image src={t3_t2} className='w-[23px]' alt='' />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Do Not Wash</td>
                        </tr>
                        <tr>
                          <td align="center" className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                            {/* <img
                              decoding="async"
                              className='w-[23px]'
                              src="https://giordanopk.com/wp-content/uploads/2022/09/cold3.jpg"
                              alt=""
                              //   border={0}
                            /> */}
                            <Image src={cold3} className='w-[23px]' alt='' />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Machine Wash, HOT</td>
                          <td align="center" className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                            {/* <img
                              decoding="async"
                              className='w-[23px]'
                              src="https://giordanopk.com/wp-content/uploads/2022/09/3.jpg"
                              alt=""
                              //   border={0}
                            /> */}
                            <Image src={t3_1} className='w-[23px]' alt='' />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Machine Wash, HOT Permanent Press</td>
                          <td align="center" className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                            {/* <img
                              decoding="async"
                              className='w-[23px]'
                              src="https://giordanopk.com/wp-content/uploads/2022/09/3-1.jpg"
                              alt=""
                              //   border={0}
                            /> */}
                            <Image src={t3_1o} className='w-[23px]' alt='' />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Machine Wash, HOT Gentle Cycle</td>
                          <td align="center" className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' />
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' />
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
