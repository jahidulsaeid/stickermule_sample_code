import m_dc_circle from './images/m_dc_circle.jpg';
import s_dc_circle from './images/s_dc_circle.jpg';
import s_dc_donot from './images/s_dc_donot.jpg';

import Image from 'next/image';
import React from 'react';

export default function Drycleaning() {
  return (
    <table border={2} width="100%" className="w-full">
      <tbody>
        <tr>
          <td className="p-[15px] border border-gray-300">
            <table width="100%" cellPadding={1} className="w-full">
              <tbody className="w-full">
                <tr>
                  <td
                    align="center"
                    width={100}
                    className="border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px] px-8"
                  >
                    <Image src={m_dc_circle} alt="Dryclean" />
                    <b>Drycleaning</b>
                  </td>
                  <td className="p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]">
                    <table width="100%" cellPadding={2}>
                      <tbody>
                        <tr>
                          <td
                            className="p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]"
                            align="center"
                          >
                            <Image src={s_dc_circle} alt="Dryclean" />
                          </td>
                          <td className="p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]">
                            Dryclean
                            <i>
                              May appear with additional letters and/or lines
                            </i>
                            Take this item to a professional drycleaner
                          </td>
                          <td
                            className="p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]"
                            align="center"
                          >
                            <Image src={s_dc_donot} alt="Dryclean" />
                          </td>
                          <td className="p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]">
                            Do Not Dryclean
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
