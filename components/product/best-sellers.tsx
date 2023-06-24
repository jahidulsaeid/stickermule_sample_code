"use client";
import ProductCard from './product-card';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import ProductLoader from './product-loader';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css/bundle';
import { useState } from 'react';
interface Props {
  title?: string;
}

const TopSellingProducts: React.FC<Props> = () => {
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  SwiperCore.use([Autoplay]);
  const { data: products, isLoading } = useGetProductsQuery();
  // const { data: products, isLoading } = useTopSellingQuery();

  return (
    <div className="container mx-auto px-3 md:px-0">
      <div className="flex items-center justify-between py-10">
        <h3 className="font-bold text-heading uppercase text-xl">
          Top Selling Products
        </h3>
        <div className="slider_icon flex gap-2">
          <button className="slider_prev">
            <svg
              className=""
              width={40}
              height={40}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_168_5838"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x={12}
                y={12}
                width={24}
                height={24}
              >
                <rect
                  x={12}
                  y={12}
                  width={24}
                  height={24}
                  fill={disablePrev ? '#D1D5DB' : '#333333'}
                />
              </mask>
              <g mask="url(#mask0_168_5838)">
                <path
                  d="M25 31L14 24L25 17L21.575 23H34V25H21.575L25 31Z"
                  fill={disablePrev ? '#D1D5DB' : '#333333'}
                />
              </g>
              <rect
                x={1}
                y={1}
                width={46}
                height={46}
                rx={23}
                stroke={disablePrev ? '#D1D5DB' : '#333333'}
                strokeWidth={2}
              />
            </svg>
          </button>

          <button className="slider_next">
            <svg
              className=""
              width={40}
              height={40}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_168_5842"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x={12}
                y={12}
                width={24}
                height={24}
              >
                <rect
                  x={12}
                  y={12}
                  width={24}
                  height={24}
                  fill={disableNext ? '#D1D5DB' : '#333333'}
                />
              </mask>
              <g mask="url(#mask0_168_5842)">
                <path
                  d="M23 31L26.425 25H14V23H26.425L23 17L34 24L23 31Z"
                  fill={disableNext ? '#D1D5DB' : '#333333'}
                />
              </g>
              <rect
                x={1}
                y={1}
                width={46}
                height={46}
                rx={23}
                stroke={disableNext ? '#D1D5DB' : '#333333'}
                strokeWidth={2}
              />
            </svg>
          </button>
        </div>
      </div>
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 md:gap-5 xl:gap-7 container">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <ProductLoader key={`product-loader-${idx}`} />
            ))}
        </div>
      )}
      <div className="container">
        <Swiper
          className="w-full product__slider"
          onSlideChange={(swiper) => {
            if (swiper.isBeginning) {
              setDisablePrev(true);
            }
            if (!swiper.isBeginning) {
              setDisablePrev(false);
            }
            if (swiper.isEnd) {
              setDisableNext(true);
            }
            if (!swiper.isEnd) {
              setDisableNext(false);
            }

          }}
          spaceBetween={20}
          navigation={{
            nextEl: '.slider_next',
            prevEl: '.slider_prev',
          }}
          modules={[Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products?.map((product: any) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                key={`product--key${product.id}`}
                product={product}
                variant="grid"
                imgHeight={350}
                imgWidth={550}
                imageContentClassName="w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSellingProducts;
