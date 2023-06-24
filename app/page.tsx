'use client';
// import LoginForm from '@/components/auth/login-form';
import Categories from '@/components/category/categories';
// import Search from '@/components/common/search';
import FeatureSection from '@/components/feature/feature';
import FooterTabs from '@/components/footer/tabs';
import PreLoader from '@/components/loaders/pre-loader';
// import Newsletter from '@/components/newsletter/newsletter';
import TopSellingProducts from '@/components/product/best-sellers';
import NewArrivals from '@/components/product/new-arrivals';
import OnSellingProducts from '@/components/product/on-sale';
// import ProductsFeatured from '@/components/product/products-featured';
import PromoSlider from '@/components/promo-slider/slider';
import SliderWithFactory from '@/components/promo-slider/sliderwithfactory';
// import HomeSlider from '@/components/slider/HeroSlider';
import HeroSliderV2 from '@/components/slider/HeroSlider@v2';
import { useGetBannerQuery } from '@/redux/features/ui/uiApi';
// import Image from 'next/image';
// import promoImg from '@/assets/images/'
export default function Home() {
  const { data, isLoading } = useGetBannerQuery();
  if (isLoading) return <PreLoader />;
  return (
    <>
      {/* <HomeSlider className="mb-12 md:mb-14 xl:mb-16 px-2.5 mx-auto max-w-[1920px]" /> */}
      <HeroSliderV2 data={data?.promotional_sliders} />
      {/* <CategoriesSlider /> */}
      <Categories />
      {/* <ProductsFeatured title="New Arrivals" /> */}
      <NewArrivals />
      <div className="container mx-auto pt-20 pb-10 px-3 md:px-0">
        <PromoSlider data={data} />
      </div>

      {/* <ProductsFeatured title="Best Sellers" /> */}
      <TopSellingProducts />

      <OnSellingProducts />

      {/* <Modal open={open} onClose={onClose}>
        <LoginForm />
      </Modal> */}
      {/* <Newsletter /> */}
      <div className="container mx-auto pt-20 pb-10 px-3 md:px-0">
        <SliderWithFactory data={data}  />
      </div>
      <FooterTabs />

      <FeatureSection className="my-10 px-3 md:px-0" />

      {/* SEARCH */}
      {/* <div className="flex flex-col min-h-screen">
        <Search />
      </div> */}
    </>
  );
}
