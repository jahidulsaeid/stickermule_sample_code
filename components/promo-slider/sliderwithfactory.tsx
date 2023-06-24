import React from 'react';
import BannerCard from '../common/banner-card';
// import promo4 from '@/assets/tempimg/promo4.png';
// import promo5 from '@/assets/tempimg/promo5.png';

export default function SliderWithFactory({ data}: any) {
  const promoSliderData = data?.banners;
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <BannerCard
        data={{
          title: 'Title',
          image: {
            mobile: promoSliderData[3]?.image?.thumbnail,
            desktop: promoSliderData[3]?.image?.original,
          },
          description: 'Description',
        }}
        href={promoSliderData[3]?.slug}
        effectActive
        className="w-full lg:w-[60%] h-[300px]"
      />
      <BannerCard
        data={{
          title: 'Title',
          image: {
            mobile: promoSliderData[4]?.image?.thumbnail,
            desktop: promoSliderData[4]?.image?.original,
          },
          description: 'Description',
        }}
        href={promoSliderData[4]?.slug}
        effectActive
        className="w-full lg:w-[40%] h-[300px]"
      />
    </div>
  );
}
