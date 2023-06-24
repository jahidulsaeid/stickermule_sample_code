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
  Controller,
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
import { useSearchParams } from 'next/navigation';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import ErrorInformation from '../not-found';
import {AiOutlineLink} from '@react-icons/all-files/ai/AiOutlineLink'
import Image from 'next/image';
// import VariationPrice from '@/components/product/product-variant-price';
import { isEmpty, isEqual, isMatch } from 'lodash';
import { getVariations } from '@/utils/get-variations';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addItemToCart } from '@/redux/features/products/productSlice';
import RelatedProducts from '@/components/product/related-product';

export default function ProductPage() {
  const { cartItems } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [attributes, setAttributes] = useState<{ [key: string]: string }>({});

  const query = useSearchParams();
  const slug = query.get('slug');
  SwiperCore.use([Autoplay]);
  SwiperCore.use([Thumbs]);
  const [quantity, setQuantity] = useState(1);

  const { data: product, isLoading } = useGetProductQuery(slug);

  const price = formatPrice({
    amount: product?.sale_price ? product?.sale_price : product?.price!,
  });
  const variations = getVariations(product?.variations!);
  const isSelected = !isEmpty(variations);

  const sale_price = formatPrice({
    amount: product?.sale_price ? product?.sale_price : product?.price!,
  });

  let selectedVariation: any = {};
  if (isSelected) {
    selectedVariation = product?.variation_options?.find((o: any) =>
      isEqual(
        o?.options?.map((v: any) => v?.value).sort(),
        Object.values(attributes).sort()
      )
    );
  }

  function handleAttribute(attribute: any) {
    // Reset Quantity
    if (!isMatch(attributes, attribute)) {
      setQuantity(1);
    }

    setAttributes((prev) => ({
      ...prev,
      ...attribute,
    }));
  }

  function addToCart() {
    // if (!isSelected) return;
    console.log('Cart Items: ', cartItems);
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    if (itemIndex >= 0) {
      const cproduct = cartItems.find(
        (cartItem) =>
          cartItem.id === product.id &&
          cartItem.cartAttributes &&
          isEqual(cartItem.cartAttributes, attributes)
      );

      if (cproduct) {
        toast.warn('Item already in cart');
        // return;
      } else {
        dispatch(
          addItemToCart({ product, quantity, attributes, selectedVariation })
        );
        toast('Add to cart 2');
      }
    } else {
      dispatch(
        addItemToCart({ product, quantity, attributes, selectedVariation })
      );
      toast('Add to cart');
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    toast('Link copied to clipboard');
  };

  if (!slug) return <ErrorInformation />;

  if (isLoading) return <Spinner showText={false} />;

  return (
    <>
      <Divider className="mb-0" />
      <div className="mx-auto container">
        <div className="block lg:grid grid-cols-10 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
          <div className="col-span-5 grid grid-cols-1 gap-2.5 h-full">
            <Swiper
              spaceBetween={30}
              effect="fade"
              height={655}
              loop={true}
              className="w-full product_details_navigation fluid h-auto md:h-[655px] lg:h-[655px] xl:h-[655px] 2xl:h-[655px]"
              // controller={{ control: secondSwiper }}
              grabCursor={true}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs, Controller]}
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
                  className="w-full bg-no-repeat !flex items-center flex-row"
                >
                  <InnerImageZoom
                    src={image?.original}
                    zoomSrc={image?.original}
                    className="single_product_image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="product_thumbs">
              <Swiper
                // controller={{ control: firstSwiper }}
                loop={false}
                spaceBetween={10}
                slidesPerView={8}
                watchSlidesProgress
                touchRatio={0.2}
                slideToClickedSlide={true}
                onSwiper={setThumbsSwiper}
                modules={[Navigation, Thumbs, Controller]}
                className="h-[100.4px] mt-[20px]"
              >
                {product?.image && (
                  <SwiperSlide className="!w-[100px]">
                    <Image
                      src={product?.image?.original}
                      alt={product?.name}
                      width={100}
                      height={100}
                    />
                  </SwiperSlide>
                )}
                {product?.gallery?.map((image: any) => (
                  <SwiperSlide className="!w-[100px]" key={image.id}>
                    <Image
                      src={image?.original}
                      alt={product?.name}
                      width={100}
                      height={100}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
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
                {!isEmpty(variations) ? (
                  // <VariationPrice
                  //   selectedVariation={selectedVariation}
                  //   minPrice={product.min_price}
                  //   maxPrice={product.max_price}
                  // />
                  <>
                    <span className="inline-block text-heading font-semibold text-base md:text-xl lg:text-2xl">
                      {formatPrice({ amount: Number(product.min_price) })}
                    </span>

                    <del className="sm:text-base font-normal pl-1 font-segoe text-gray-400 text-base lg:text-xl ps-2.5 -mt-0.5 md:mt-0">
                      {formatPrice({ amount: Number(product.max_price) })}
                    </del>
                  </>
                ) : (
                  <>
                    {product.sale_price ? (
                      <>
                        <div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
                          {sale_price}
                        </div>
                        <del className="font-segoe text-gray-400 text-base lg:text-xl ps-2.5 -mt-0.5 md:mt-0">
                          {price}
                        </del>
                      </>
                    ) : (
                      <div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
                        {price}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="pt-7 pb-3 border-b border-gray-300">
              {Object.keys(variations).map((variation) => {
                return (
                  <ProductAttributes
                    key={`popup-attribute-key${variation}`}
                    title={variation}
                    attributes={variations[variation]}
                    active={attributes[variation]}
                    onClick={handleAttribute}
                  />
                );
              })}
            </div>

            <div className="flex items-center space-s-4 md:pe-32 lg:pe-12 2xl:pe-32 3xl:pe-48 border-b border-gray-300 py-8 gap-10">
              {isEmpty(variations) && (
                <>
                  {Number(product?.quantity) > 0 ? (
                    <Counter
                      quantity={quantity}
                      onIncrement={() => setQuantity((prev) => prev + 1)}
                      onDecrement={() =>
                        setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                      }
                      disableDecrement={quantity === 1}
                      disableIncrement={Number(product?.quantity) === quantity}
                    />
                  ) : (
                    <div className="text-base text-red-500 whitespace-nowrap lg:ms-7">
                      Out of Stock
                    </div>
                  )}
                </>
              )}

              {!isEmpty(selectedVariation) && (
                <>
                  {Number(selectedVariation?.is_disable) ||
                  selectedVariation.quantity === 0 ? (
                    <div className="text-base text-red-500 whitespace-nowrap lg:ms-7">
                      Out of Stock
                    </div>
                  ) : (
                    <Counter
                      quantity={quantity}
                      onIncrement={() => setQuantity((prev) => prev + 1)}
                      onDecrement={() =>
                        setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                      }
                      disableDecrement={quantity === 1}
                      disableIncrement={
                        Number(selectedVariation.quantity) === quantity
                      }
                    />
                  )}
                </>
              )}

              {/* <Button
                variant="slim"
                className={`w-full md:w-6/12 xl:w-full `}
                onClick={addToCart}
              >
                <span className="py-2 3xl:px-8">Add to cart</span>
              </Button> */}
              <Button
                onClick={addToCart}
                variant="slim"
                className={`w-full lg:w-6/12 xl:w-full ${
                  !isSelected && 'bg-gray-400 hover:bg-gray-400'
                }`}
                disabled={
                  // isSelected ||
                  !product?.quantity ||
                  (!isEmpty(selectedVariation) && !selectedVariation?.quantity)
                }
                // loading={addToCartLoader}
              >
                <span className="py-2 3xl:px-8">
                  {product?.quantity ||
                  (!isEmpty(selectedVariation) && selectedVariation?.quantity)
                    ? 'Add to Cart'
                    : 'Out of Stock'}
                </span>
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
                    url={`${
                      process.env.NEXT_PUBLIC_URL + ROUTES.PRODUCT
                    }?slug=${product?.slug}`}
                    quote={product?.name}
                  >
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>

                  <TwitterShareButton
                    url={`${
                      process.env.NEXT_PUBLIC_URL + ROUTES.PRODUCT
                    }?slug=${product?.slug}`}
                    title={product?.name}
                  >
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                  <AiOutlineLink onClick={handleCopy} className="text-xl cursor-pointer border border-slate-300 w-8 h-8 rounded-full p-2" />
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
        {/* <ProductsFeatured title="Related Product" /> */}
        <RelatedProducts slug={slug} />
      </div>
    </>
  );
}
