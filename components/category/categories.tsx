'use client';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Link from 'next/link';
import { useGetCategoriesQuery } from '@/redux/features/categories/categoryApi';
import CategoryLoader from './category-loader';
import { ROUTES } from '@/utils/routes';

const Categories = () => {
  SwiperCore.use([Autoplay]);
  const { data: categories, isLoading } = useGetCategoriesQuery(['categories']);

  return (
    <div className="container mx-auto py-10 px-3 md:px-0">
      <div className="flex items-center justify-between -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
        <h3 className="font-bold text-heading uppercase text-xl">
          Browse Categories
        </h3>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 md:gap-5 xl:gap-7 container">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <CategoryLoader key={`category-loader-${idx}`} />
            ))}
        </div>
      ) : (
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
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
          className="category-slider"
        >
          {categories?.map((category: any) => (
            <SwiperSlide
              key={category.id}
              style={{
                backgroundImage: `url(${category?.image?.original})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '400px',
                // borderRadius: '10px',
              }}
              className="relative"
            >
              <Link href={`/collection?category=${category?.slug}`}>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white transition-all duration-300 bg-black bg-opacity-50 opacity-50 hover:opacity-100">
                  {/* <div className="text-center">
                    <h2 className="text-2xl mb-4">{category.name}</h2>
                    Shop Now
                  </div> */}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Categories;
