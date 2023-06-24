import s_td_nornh from './images/s_td_nornh.jpg';
import s_td_pp_nh from './images/s_td_pp_nh.jpg';
import s_td_gennh from './images/s_td_gennh.jpg';
import s_td_donot from './images/s_td_donot.jpg';
import s_td_nor_l from './images/s_td_nor_l.jpg';
import s_td_pp_l from './images/s_td_pp_l.jpg';
import s_td_gen_l from './images/s_td_gen_l.jpg';
import s_td_nor_h from './images/s_td_nor_h.jpg';
import s_td_nor_m from './images/s_td_nor_m.jpg';
import s_td_pp_m1 from './images/s_td_pp_m-1.jpg';
import s_td_gen_m from './images/s_td_gen_m.jpg';
import s_dr_line from './images/s_dr_line.jpg';
import s_dr_drip from './images/s_dr_drip.jpg';
import s_dr_flat from './images/s_dr_flat.jpg';

import Image from 'next/image';
import React from 'react';

export default function Drying() {
  return (
    <table className='w-full' border={2}>
      <tbody>
        <tr>
          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
            <table className='w-full' cellPadding={1}>
              <tbody>
                <tr>
                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                    <Image src={s_td_nornh} alt="Dryclean" />
                    <b>Drying</b>
                  </td>
                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                    <table className='w-full' cellPadding={2}>
                      <tbody>
                        <tr>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_td_nornh} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Tumble Dry, NO HEAT</td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_td_pp_nh} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Tumble Dry, Permanent Press, NO HEAT</td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_td_gennh} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Tumble Dry, Gentle Cycle, NO HEAT</td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_td_donot} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Do Not Tumble Dry</td>
                        </tr>
                        <tr>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_td_nor_l} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Tumble Dry, LOW HEAT</td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_td_pp_l} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Tumble Dry, Permanent Press, LOW HEAT</td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_td_gen_l} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Tumble Dry, Gentle Cycle, LOW HEAT</td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_dr_line} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Line Dry</td>
                        </tr>
                        <tr>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_td_nor_m} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Tumble Dry, MEDIUM</td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_td_pp_m1} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Tumble Dry, Permanent Press, MEDIUM</td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_td_gen_m} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Tumble Dry, Gentle Cycle, MEDIUM</td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_dr_drip} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Drip Dry</td>
                        </tr>
                        <tr>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_td_nor_h} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Tumble Dry, HIGH</td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center" />
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' />
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center" />
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' />
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <Image src={s_dr_flat} alt="Dryclean" />
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Dry Flat</td>
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
