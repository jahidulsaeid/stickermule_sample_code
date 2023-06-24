'use client';
import { ROUTES } from '@/utils/routes';
import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import SwiperCore, {
  Autoplay,
  Navigation,
  EffectFade,
  Thumbs,
  FreeMode,
} from 'swiper';
import { useGetProductQuery } from '@/redux/features/products/productApi';

import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { formatPrice } from '@/utils/use-price';

import Divider from '@/components/ui/divider';
import FavoriteButton from '@/components/product/favorite-button';
import { ProductAttributes } from '@/components/product/product-attributes';
import Counter from '@/components/common/counter';
import Button from '@/components/ui/button';
import ProductsFeatured from '@/components/product/products-featured';
interface IProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

export default function ProductPage({ params }: IProps) {
  SwiperCore.use([Autoplay]);
  // const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { data: product, isLoading } = useGetProductQuery(params?.slug);

  const price = formatPrice({
    amount: product?.sale_price ? product?.sale_price : product?.price!,
  });

  const basePrice = formatPrice({
    amount: product?.price!,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Divider className="mb-0" />
      <div className="mx-auto container">
        {/* <div className="pt-8">
          <Breadcrumb />
        </div> */}
        <div className="block lg:grid grid-cols-10 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
          <div className="col-span-5 grid grid-cols-1 gap-2.5 h-full">
            <Swiper
              spaceBetween={30}
              effect="fade"
              height={655}
              navigation={true}
              loop={true}
              modules={[Navigation, EffectFade, Thumbs, FreeMode]}
              // thumbs={{ swiper: thumbsSwiper }}

              className="w-full product_details_navigation fluid h-auto md:h-[655px] lg:h-[655px] xl:h-[655px] 2xl:h-[655px]"
            >
              {product?.image && (
                <SwiperSlide className="w-full bg-no-repeat !flex items-center">
                  <InnerImageZoom
                    src={product?.image?.original}
                    zoomSrc={product?.image?.original}
                    className="single_product_image"
                  />
                </SwiperSlide>
              )}
              {product?.gallery?.map((image: any) => (
                <SwiperSlide
                  key={1}
                  className="w-full bg-no-repeat !flex items-center"
                >
                  <InnerImageZoom
                    src={image?.original}
                    zoomSrc={image?.original}
                    className="single_product_image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-span-5 pt-8 lg:pt-0">
            <div className="pb-7 border-b border-gray-300">
              <div className="flex justify-between mb-2">
                <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
                  {product?.name}
                </h2>
                <FavoriteButton productId="1" in_wishlist={true} />
              </div>
              <p className="text-body text-sm lg:text-base leading-6 lg:leading-8">
                {product?.description}
              </p>

              <div className="flex items-center mt-5">
                {/* {!isEmpty(variations) ? (
              <VariationPrice
                selectedVariation={selectedVariation}
                minPrice={product.min_price}
                maxPrice={product.max_price}
              />
            ) : ( */}
                {/* <VariationPrice
                selectedVariation={selectedVariation}
                minPrice={product.min_price}
                maxPrice={product.max_price}
              /> */}
                <>
                  <div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
                    {price}
                  </div>

                  {basePrice && (
                    <del className="font-segoe text-gray-400 text-base lg:text-xl ps-2.5 -mt-0.5 md:mt-0">
                      {basePrice}
                    </del>
                  )}
                </>
                {/* )} */}
              </div>
            </div>

            <div className="pt-7 pb-3 border-b border-gray-300">
              <ProductAttributes
                title="test"
                // attributes={variations[variation]}
                // active={attributes[variation]}
                // onClick={handleAttribute}
              />
            </div>

            <div className="flex items-center space-s-4 md:pe-32 lg:pe-12 2xl:pe-32 3xl:pe-48 border-b border-gray-300 py-8 gap-10">
              <>
                <Counter
                  quantity={quantity}
                  onIncrement={() => setQuantity((prev) => prev + 1)}
                  onDecrement={() =>
                    setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                  }
                  //   disableDecrement={quantity === 1}
                  //   disableIncrement={Number(product.quantity) === quantity}
                />
                {/*  For Out of Stock */}
                {/*
            <div className="text-base text-red-500 whitespace-nowrap lg:ms-7">
              Out of stock
            </div> */}
              </>

              <Button variant="slim" className={`w-full md:w-6/12 xl:w-full `}>
                <span className="py-2 3xl:px-8">Add to cart</span>
              </Button>
            </div>
            <div className="py-6">
              <ul className="text-sm space-y-5 pb-1">
                <li>
                  <span className="font-semibold text-heading inline-block pe-2">
                    SKU:
                  </span>
                  # {product?.sku}
                </li>

                {/* Category Area  */}
                {product?.categories?.length > 0 && (
                  <li>
                    <span className="font-semibold text-heading inline-block pe-2">
                      Category:
                    </span>

                    {product?.categories.map((category: any) => (
                      <Link
                        key={category.id}
                        href={`${ROUTES.CATEGORY}/slug`}
                        className="transition hover:underline hover:text-heading"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </li>
                )}
                {/* Category Area End */}

                {/* Tag Area  */}
                {product?.tags?.length > 0 && (
                  <li className="productTags">
                    <span className="font-semibold text-heading inline-block pe-2">
                      Tags:
                    </span>
                    {/* Tag Item */}
                    {product?.tags.map((tag: any) => (
                      <button
                        key={tag}
                        className="inline-block pe-1.5 transition hover:underline hover:text-heading last:pe-0"
                      >
                        {tag}
                      </button>
                    ))}
                  </li>
                )}
                {/* Tag Area End */}

                {/* Product Share Start */}
                <li className="flex items-center gap-3">
                  <span className="font-semibold text-heading inline-block">
                    Share:
                  </span>
                  {/* Tag Item */}
                  <FacebookShareButton
                    url={`https://www.giordanobd.com/products/${product?.slug}`}
                    quote={product?.name}
                  >
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>

                  <TwitterShareButton
                    url={`https://www.giordanobd.com/products/${product?.slug}`}
                    title={product?.name}
                  >
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                </li>
                {/* Product Share End */}
              </ul>
            </div>
          </div>
        </div>

        {/* <div>
        <h5 className="text-[18ppx] font-bold mb-4">Description</h5>
        <p className="leading-6">
          Shine like a piece of precious gem with this new style icon, the
          latest addition to the impactful design concepts featuring the
          ILLIYEEN Monogram. Visualize the design elements that contrast
          throughout, except for the sleeves, projecting flawless detailing with
          contrasting hues. The ultra fine cotton fabric, treated with liquid
          ammonia, has two-ply yarn dyed herringbone weave, known for strength,
          durability, softness, breathability, and a subtle texture, which can
          provide a comfortable wearing experience for months and years if
          treated with care. The ornate collar and folded sleeves are
          complemented by silver ILLIYEEN signature buttons showing geometric
          details, adding a final touch of elegance.
        </p>
      </div> */}
        <Divider className="my-12" />
        <ProductsFeatured title="Related Product" />
      </div>
    </>
  );
}
