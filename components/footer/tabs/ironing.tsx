import Image from 'next/image';
import React from 'react';
import ironing from './images/ironing.jpg';
import s_ir_talll from './images/s_ir_talll.jpg';
import s_ir_tallm from './images/s_ir_tallm.jpg';
import s_ir_tallh from './images/s_ir_tallh.jpg';
import s_ir_nostm from './images/s_ir_nostm.jpg';
import s_ir_dontt from './images/s_ir_dontt.jpg';

export default function Ironing() {
  return (
    <table className='w-full' border={2}>
      <tbody>
        <tr>
          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
            <table className='w-full' cellPadding={1}>
              <tbody>
                <tr>
                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                    <Image src={ironing} alt="Ironing" />
                    <b>Ironing</b>
                  </td>
                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>
                    <table className='w-full'>
                      <tbody>
                        <tr>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <table className='w-full' cellPadding={2}>
                              <tbody>
                                <tr>
                                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                                   
                                    <Image src={s_ir_talll} alt="Ironing" />
                                  </td>
                                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Iron, Steam or Dry, with LOW HEAT</td>
                                </tr>
                                <tr>
                                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                                
                                    <Image src={s_ir_tallm} alt="Ironing" />
                                  </td>
                                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Iron, Steam or Dry, with MEDIUM HEAT</td>
                                </tr>
                                <tr>
                                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                                  
                                    <Image src={s_ir_tallh} alt="Ironing" />
                                  </td>
                                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Iron, Steam or Dry, with HIGH HEAT</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                            <table cellPadding={2}>
                              <tbody>
                                <tr>
                                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                                  
                                    <Image src={s_ir_nostm} alt="Ironing" />
                                  </td>
                                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Do Not Iron with Steam</td>
                                </tr>
                                <tr>
                                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]' align="center">
                                  
                                    <Image src={s_ir_dontt} alt="Ironing" />
                                  </td>
                                  <td className='p-[15px] border border-gray-300 h-[54px] xl:h-[70px] 2xl:h-[84px]'>Do Not Iron</td>
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
          </td>
        </tr>
      </tbody>
    </table>
  );
}
