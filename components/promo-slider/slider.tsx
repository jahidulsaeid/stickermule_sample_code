import React from 'react';
import BannerCard from '../common/banner-card';
// import { promoSliderData } from './data';

export default function PromoSlider({ data }: any) {
  const promoSliderData = data?.banners;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {promoSliderData.slice(0, 3).map((slider: any) => (
        <BannerCard
          key={slider?.id}
          data={{
            title: 'Title',
            image: {
              mobile: slider?.image?.thumbnail,
              desktop: slider?.image?.original,
            },
            description: 'Description',
          }}
          href={slider?.slug}
          effectActive
        />
      ))}
    </div>
  );
}
