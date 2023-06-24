import ProductCard from './product-card';
import {
  useGetProductQuery,
  useGetProductsQuery,
} from '@/redux/features/products/productApi';
import ProductLoader from './product-loader';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css/bundle';
import Spinner from '../ui/loaders/spinner/spinner';
// import Link from 'next/link';
interface Props {
  slug: string;
}

const RelatedProducts: React.FC<Props> = ({ slug }) => {
  SwiperCore.use([Autoplay]);
  //   const { data: products, isLoading } = useGetProductsQuery();
  const { data, isLoading } = useGetProductQuery(slug);

  const products = data?.related_products;

  if (isLoading) return <Spinner />;

  if (products.length === 0) return null;

  return (
    <div className="container mx-auto px-3 md:px-0 pb-20">
      <div className="flex items-center justify-between py-10">
        <h3 className="font-bold text-heading uppercase text-xl">
          Related Products
        </h3>
        {/* {products.length === 0 && (
          <p className="text-sm text-gray-500">No related products found</p>
        )} */}
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
                <rect x={12} y={12} width={24} height={24} fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_168_5838)">
                <path
                  d="M25 31L14 24L25 17L21.575 23H34V25H21.575L25 31Z"
                  fill="#D1D5DB"
                />
              </g>
              <rect
                x={1}
                y={1}
                width={46}
                height={46}
                rx={23}
                stroke="#D1D5DB"
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
                <rect x={12} y={12} width={24} height={24} fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_168_5842)">
                <path
                  d="M23 31L26.425 25H14V23H26.425L23 17L34 24L23 31Z"
                  fill="#333333"
                />
              </g>
              <rect
                x={1}
                y={1}
                width={46}
                height={46}
                rx={23}
                stroke="#333333"
                strokeWidth={2}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 md:gap-5 xl:gap-7  */}
      <div className="container">
        {isLoading &&
          Array(4)
            .fill(0)
            .map((_, idx) => <ProductLoader key={`product-loader-${idx}`} />)}

        <Swiper
          className="w-full product__slider"
          spaceBetween={20}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.slider_next',
            prevEl: '.slider_prev',
          }}
          modules={[Navigation]}
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

export default RelatedProducts;
