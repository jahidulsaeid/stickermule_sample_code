import Image from 'next/image';
import m_b_any from './images/m_b_any.jpg';
import s_b_any from './images/s_b_any.jpg';
import s_b_nonchl from './images/s_b_nonchl.jpg';
import s_b_dont_s from './images/s_b_dont_s.jpg';

import React from 'react';

export default function Bleaching() {
  return (
    <table border={2} className='w-full'>
      <tbody>
        <tr>
          <td className='p-[15px] border border-gray-300'>
            <table cellPadding={1} className="w-full">
              <tbody>
                <tr>
                  <td align="center" className='border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px] px-8'>
                    <Image src={m_b_any} alt="Bleach as needed" className="w-[60px]" />
                    <b>Bleaching</b>
                  </td>
                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                    <table cellPadding={2} className="w-full">
                      <tbody>
                        <tr>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_b_any} alt="Bleach as needed" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                            Bleach as needed
                            <i>Any bleach, like Clorox®, may be safely used</i>
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' rowSpan={2} align="center">
                            <Image src={s_b_dont_s} alt="Bleach as needed" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' rowSpan={2}>
                            Do Not Bleach
                            <i>
                              No bleach product should be used including
                              detergents with bleach – or follow bleach package
                              test procedures to test for bleach safety.
                            </i>
                          </td>
                        </tr>
                        <tr>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_b_nonchl} alt="Bleach as needed" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                            Non-chlorine Bleach as needed
                            <i>Use only a color-safe bleach, like Clorox 2®</i>
                          </td>
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
