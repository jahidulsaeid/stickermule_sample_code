import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper';
import Image from 'next/image';
// import { SliderData } from './data';

export default function HeroSliderV2({data}: any) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[EffectFade, Navigation, Pagination]}
        className="hero-slider-v2  mb-10 cursor-pointer h-[220px] md:h-[450px] lg:h-[550px] xl:h-[660px]"
      >
        {data.map((slider: any) => (
          <SwiperSlide key={slider.id}>
            <Image
              src={slider.original}
              width={1920}
              height={660}
              className="w-full h-[220px] md:h-[450px] lg:h-[550px] xl:h-[660px]"
              alt="test"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
